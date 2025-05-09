"use client";

import React, { useState, FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Blog post type definition
interface BlogPost {
  id: number;
  title: string;
  content: string;
  image?: string;
  date: string;
  author: string;
}

export default function BlogPage() {
  const [passcode, setPasscode] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [newBlog, setNewBlog] = useState<Partial<BlogPost>>({});

  const handleValidation = () => {
    if (passcode === "23452") {
      setIsValidated(true);
      // Load existing blogs
      try {
        const storedBlogs = JSON.parse(localStorage.getItem("blogs") || "[]");
        setBlogs(storedBlogs);
      } catch (error) {
        console.error("Error loading blogs:", error);
      }
    } else {
      alert("Invalid passcode");
    }
  };

  const handleBlogSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newBlog.title || !newBlog.content || !newBlog.author) {
      alert("Please fill all required fields");
      return;
    }

    const blogToAdd: BlogPost = {
      ...(newBlog as BlogPost),
      id: Date.now(),
      date: new Date().toISOString(),
    };

    const updatedBlogs = [...blogs, blogToAdd];
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    // Reset form
    setNewBlog({});
  };

  if (!isValidated) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl mb-4">Enter Passcode</h2>
          <input
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter admin passcode"
          />
          <button
            onClick={handleValidation}
            className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Validate
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create a New Blog Post</h1>

      {/* Blog Creation Form */}
      <form
        onSubmit={handleBlogSubmit}
        className="mb-8 bg-white p-6 rounded-lg shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold">Blog Title</label>
            <input
              type="text"
              value={newBlog.title || ""}
              onChange={(e) =>
                setNewBlog({ ...newBlog, title: e.target.value })
              }
              className="w-full p-2 border rounded"
              placeholder="Enter a catchy and descriptive title"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Choose a title that captures the essence of your blog post
            </p>
          </div>
          <div>
            <label className="block mb-2 font-semibold">Author Name</label>
            <input
              type="text"
              value={newBlog.author || ""}
              onChange={(e) =>
                setNewBlog({ ...newBlog, author: e.target.value })
              }
              className="w-full p-2 border rounded"
              placeholder="Your full name or pen name"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              How you want to be credited for this blog post
            </p>
          </div>
          <div className="col-span-2">
            <label className="block mb-2 font-semibold">
              Blog Image URL (Optional)
            </label>
            <input
              type="url"
              value={newBlog.image || ""}
              onChange={(e) =>
                setNewBlog({ ...newBlog, image: e.target.value })
              }
              className="w-full p-2 border rounded"
              placeholder="Paste a direct link to an illustrative image"
            />
            <p className="text-xs text-gray-500 mt-1">
              Add a compelling image to make your blog post more engaging
              (recommended but optional)
            </p>
          </div>
          <div className="col-span-2">
            <label className="block mb-2 font-semibold">Blog Content</label>
            <textarea
              value={newBlog.content || ""}
              onChange={(e) =>
                setNewBlog({ ...newBlog, content: e.target.value })
              }
              className="w-full p-2 border rounded h-40"
              placeholder="Write your blog post here. Share your thoughts, insights, and stories."
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Explain your topic in detail. Use paragraphs to organize your
              thoughts.
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors"
        >
          Publish Blog Post
        </button>
      </form>

      {/* Blog Posts Display */}
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg flex"
          >
            {blog.image && (
              <div className="w-1/3 relative">
                <Image
                  src={
                    blog.image.startsWith("https://unsplash.com/photos/")
                      ? blog.image.replace(
                          "https://unsplash.com/photos/",
                          "https://images.unsplash.com/photo-"
                        )
                      : blog.image
                  }
                  alt={blog.title}
                  width={300}
                  height={200}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            )}
            <div className={`${blog.image ? "w-2/3 p-4" : "w-full p-6"}`}>
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-500 mb-2">
                By {blog.author} on {new Date(blog.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700">{blog.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
