// ORCID API integration for fetching publications

const ORCID_ID = "0000-0001-7203-8698";
const ORCID_BASE_URL = "https://pub.orcid.org/v3.0";

/** Work summary as returned under `group[].work-summary[]` (ORCID 3.0 public API). */
interface ORCIDWorkSummary {
  "put-code"?: number;
  "display-index"?: string;
  title?: { title?: { value?: string } };
  "publication-date"?: {
    year?: { value?: string };
    month?: { value?: string };
    day?: { value?: string };
  };
  "journal-title"?: { value?: string };
  "short-description"?: { value?: string };
  type?: string;
  "citation-type"?: { value?: string };
  url?: { value?: string };
  "external-ids"?: {
    "external-id"?: Array<{
      "external-id-type"?: string;
      "external-id-value"?: string;
    }>;
  };
}

interface ORCIDWorksGroup {
  "work-summary"?: ORCIDWorkSummary[];
}

export interface Publication {
  id: number;
  type: "Journal" | "Conference";
  title: string;
  venue?: string;
  pages?: string;
  year: number;
  url?: string;
}

function extractPages(work: ORCIDWorkSummary): string | undefined {
  const externalIds = work["external-ids"]?.["external-id"] || [];
  const pagesId = externalIds.find(
    (id) => id["external-id-type"]?.toLowerCase() === "pages",
  );
  return pagesId?.["external-id-value"];
}

function publicationType(work: ORCIDWorkSummary): "Journal" | "Conference" {
  const t = (work.type || work["citation-type"]?.value || "").toLowerCase();
  if (
    t.includes("journal") ||
    t.includes("article") ||
    t.includes("book") ||
    t.includes("dissertation")
  ) {
    return "Journal";
  }
  return "Conference";
}

/** Public `/works` JSON uses `group[].work-summary[]`, not top-level `work`. */
function flattenWorkSummaries(data: unknown): ORCIDWorkSummary[] {
  if (!data || typeof data !== "object") return [];
  const d = data as Record<string, unknown>;

  const legacy = d.work;
  if (Array.isArray(legacy)) {
    return legacy as ORCIDWorkSummary[];
  }

  const groups = d.group;
  if (!Array.isArray(groups)) return [];

  const out: ORCIDWorkSummary[] = [];
  for (const g of groups) {
    if (!g || typeof g !== "object") continue;
    const summaries = (g as ORCIDWorksGroup)["work-summary"];
    if (!Array.isArray(summaries) || summaries.length === 0) continue;

    const preferred = [...summaries].sort(
      (a, b) =>
        parseInt(String(b["display-index"] ?? "0"), 10) -
        parseInt(String(a["display-index"] ?? "0"), 10),
    )[0];
    if (preferred) out.push(preferred);
  }
  return out;
}

function summaryToPublication(work: ORCIDWorkSummary): Omit<Publication, "id"> | null {
  const yearStr = work["publication-date"]?.year?.value;
  if (!yearStr) return null;

  const year = parseInt(yearStr, 10);
  if (!Number.isFinite(year) || year <= 0) return null;

  const venue =
    work["journal-title"]?.value ||
    work["short-description"]?.value ||
    "";

  return {
    type: publicationType(work),
    title: work.title?.title?.value || "Untitled Publication",
    venue: venue || undefined,
    pages: extractPages(work),
    year,
    url: work.url?.value || undefined,
  };
}

export async function fetchORCIDPublications(): Promise<Publication[]> {
  try {
    const response = await fetch(`${ORCID_BASE_URL}/${ORCID_ID}/works`, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`ORCID API request failed: ${response.statusText}`);
    }

    const data: unknown = await response.json();
    const summaries = flattenWorkSummaries(data);

    const publications: Publication[] = summaries
      .flatMap((work) => {
        const row = summaryToPublication(work);
        return row ? [row] : [];
      })
      .sort((a, b) => b.year - a.year)
      .map((p, i) => ({ ...p, id: i + 1 }));

    return publications;
  } catch (error) {
    console.error("Error fetching ORCID publications:", error);
    return [];
  }
}
