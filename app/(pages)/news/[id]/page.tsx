// app/(pages)/news/[id]/page.tsx

import Link from "next/link";
import Image from "next/image";
import { news } from "@/data/data";

export async function generateStaticParams() {
  return news.map((item) => ({
    id: item.id.toString(),
  }));
}

interface NewsPageProps {
  params: Promise<{ id: string }>;
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { id } = await params;
  const newsItem = news.find((item) => item.id.toString() === id);

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
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-64 md:h-96 bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <Image
              src={newsItem.image}
              alt={newsItem.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {newsItem.tags.map((tag: string) => (
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
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                {newsItem.content}
              </p>
            </div>

            {newsItem.url && (
              <div className="mt-6">
                <a
                  href={newsItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Read Full Article
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </article>
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
