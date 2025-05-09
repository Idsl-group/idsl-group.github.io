import fs from "fs";
import path from "path";
import { z } from "zod";

// Zod Schema for Insight Validation
export const InsightSchema = z.object({
  id: z.number().positive(),
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title cannot exceed 100 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description cannot exceed 500 characters"),
  content: z.string().min(20, "Content must be at least 20 characters"),
  category: z.string().optional().default("General"),
  date: z.string(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional().default([]),
});

// TypeScript type derived from Zod schema
export type Insight = z.infer<typeof InsightSchema>;

// Insights Management Class
export class InsightsManager {
  // Private static file path for insights storage
  private static _insightsFilePath = path.join(
    process.cwd(),
    "data",
    "insights.json"
  );

  // Getter for insights file path
  public static get INSIGHTS_FILE(): string {
    return this._insightsFilePath;
  }

  // Ensure insights directory exists
  private static ensureDirectoryExists() {
    const directory = path.dirname(this._insightsFilePath);
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }
  }

  // Read insights from file
  public static getInsights(): Insight[] {
    this.ensureDirectoryExists();

    try {
      console.log("Attempting to read insights file:", this._insightsFilePath);

      if (!fs.existsSync(this._insightsFilePath)) {
        console.warn("Insights file does not exist. Returning empty array.");
        return [];
      }

      const rawData = fs.readFileSync(this._insightsFilePath, "utf-8");
      console.log("Raw insights data:", rawData);

      const insights = JSON.parse(rawData) as Insight[];
      console.log("Parsed insights:", insights);

      // Validate each insight
      const validInsights = insights.filter((insight) => {
        try {
          InsightSchema.parse(insight);
          return true;
        } catch (validationError) {
          console.warn(
            `Invalid insight filtered out:`,
            insight,
            validationError
          );
          return false;
        }
      });

      console.log("Valid insights:", validInsights);
      return validInsights;
    } catch (error) {
      console.error("Critical error reading insights:", error);
      return [];
    }
  }

  // Add a new insight
  public static addInsight(insight: Insight): boolean {
    this.ensureDirectoryExists();

    try {
      // Validate the insight using Zod schema
      const validatedInsight = InsightSchema.parse(insight);

      // Read existing insights
      const existingInsights = this.getInsights();

      // Check for duplicate insights
      const isDuplicate = existingInsights.some(
        (existing) => existing.title === validatedInsight.title
      );

      if (isDuplicate) {
        console.warn(
          `Insight with title "${validatedInsight.title}" already exists`
        );
        return false;
      }

      // Add new insight
      const updatedInsights = [...existingInsights, validatedInsight];

      // Write back to file
      fs.writeFileSync(
        this._insightsFilePath,
        JSON.stringify(updatedInsights, null, 2)
      );

      return true;
    } catch (error) {
      console.error("Error adding insight:", error);
      return false;
    }
  }

  // Remove an insight by ID
  public static removeInsight(id: number): boolean {
    try {
      const existingInsights = this.getInsights();
      const updatedInsights = existingInsights.filter(
        (insight) => insight.id !== id
      );

      if (existingInsights.length === updatedInsights.length) {
        console.warn(`No insight found with ID: ${id}`);
        return false;
      }

      fs.writeFileSync(
        this._insightsFilePath,
        JSON.stringify(updatedInsights, null, 2)
      );

      return true;
    } catch (error) {
      console.error("Error removing insight:", error);
      return false;
    }
  }

  // Update an existing insight
  public static updateInsight(updatedInsight: Insight): boolean {
    try {
      // Validate the updated insight
      const validatedInsight = InsightSchema.parse(updatedInsight);

      const existingInsights = this.getInsights();
      const insightIndex = existingInsights.findIndex(
        (insight) => insight.id === validatedInsight.id
      );

      if (insightIndex === -1) {
        console.warn(`No insight found with ID: ${validatedInsight.id}`);
        return false;
      }

      // Replace the existing insight
      existingInsights[insightIndex] = validatedInsight;

      // Write back to file
      fs.writeFileSync(
        this._insightsFilePath,
        JSON.stringify(existingInsights, null, 2)
      );

      return true;
    } catch (error) {
      console.error("Error updating insight:", error);
      return false;
    }
  }
}

// Default insights to bootstrap the system
const defaultInsights: Insight[] = [
  {
    id: 1,
    title: "AI and Quantum Computing",
    description:
      "Exploring the intersection of artificial intelligence and quantum computing technologies.",
    content:
      "A deep dive into how quantum computing is revolutionizing AI capabilities...",
    category: "Research",
    date: "May 2024",
    image: "/insights/image-1.png",
    tags: ["AI", "Quantum Computing", "Technology"],
  },
  {
    id: 2,
    title: "Edge Computing Revolution",
    description:
      "Insights into the transformative potential of edge computing in modern infrastructure.",
    content:
      "Exploring how edge computing is changing the landscape of distributed systems and real-time processing...",
    category: "Technology",
    date: "April 2024",
    image: "/insights/image-2.png",
    tags: ["Edge Computing", "Infrastructure", "Cloud"],
  },
];

// Initialize insights if file doesn't exist
if (!fs.existsSync(InsightsManager.INSIGHTS_FILE)) {
  defaultInsights.forEach((insight) => InsightsManager.addInsight(insight));
}

export default InsightsManager;
