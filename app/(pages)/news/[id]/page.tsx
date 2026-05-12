// app/(pages)/news/[id]/page.tsx

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const newsData = {
  "1": {
    id: "1",
    title:
      "Starting our AI for Social Good Seminar Series with inaugural speaker 'Prof. Milind Tambe', Harvard",
    date: "May 1, 2025",
    content: [
      "We are thrilled to launch our AI for Social Good Seminar Series, led by Western University and supported by University of Waterloo, UBC, and the International Center for Applied Systems Science for Sustainable Development. Our first inaugural speaker is Prof. Milind Tambe, Harvard University, USA.",
      "Talk details coming soon...",
    ],
    speakerBio: `Milind Tambe is Gordon McKay Professor of Computer Science and Director of Center for Research on Computation and Society at Harvard University; concurrently, he is also Principal Scientist and Director for "AI for Social Good" at Google Deepmind. Prof. Tambe and his team have developed pioneering AI systems that deliver real-world impact in public health (e.g., maternal and child health), public safety, and wildlife conservation. He is recipient of the AAAI Award for Artificial Intelligence for the Benefit of Humanity, AAAI Feigenbaum Prize, IJCAI John McCarthy Award, AAAI Robert S. Engelmore Memorial Lecture Award, AAMAS ACM Autonomous Agents Research Award, INFORMS Wagner prize for excellence in Operations Research practice, Military Operations Research Society Rist Prize, Columbus Fellowship Foundation Homeland security award and commendations and certificates of appreciation from the US Coast Guard, the Federal Air Marshals Service and airport police at the city of Los Angeles. He is a fellow of AAAI and ACM.`,
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1600&auto=format&fit=crop",
    tags: ["Seminar", "AI for Good"],
  },
};

export async function generateStaticParams() {
  return Object.keys(newsData).map((id) => ({
    id,
  }));
}

interface NewsPageProps {
  params: {
    id: string;
  };
}

export default function NewsDetailPage({ params }: NewsPageProps) {
  const newsItem = newsData[params.id as keyof typeof newsData];

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Article Not Found
          </h1>
          <Link
            href="/news"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            ← Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header with back button */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <Link
              href="/news"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              News
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
        >
          {/* Featured Image */}
          <div className="relative h-64 md:h-96 bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <Image
              src={newsItem.image}
              alt={newsItem.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
              onError={(e) => {
                // Hide the image if it fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {newsItem.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                >
                  {tag}
                </span>
              ))}
              <time
                dateTime={new Date(newsItem.date).toISOString()}
                className="ml-auto text-sm text-gray-500 dark:text-gray-400"
              >
                {newsItem.date}
              </time>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {newsItem.title}
            </h1>

            <div className="prose dark:prose-invert max-w-none">
              {newsItem.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-4 text-gray-700 dark:text-gray-300"
                >
                  {paragraph}
                </p>
              ))}

              {newsItem.speakerBio && (
                <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Speaker Bio
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    {newsItem.speakerBio}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.article>
      </main>

      {/* Back to News Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Link
          href="/news"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to News
        </Link>
      </div>
    </div>
  );
}
