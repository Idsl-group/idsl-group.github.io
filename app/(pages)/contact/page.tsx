"use client";

import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Send,
  MapPin,
  Mail,
  Phone,
  User,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full grid md:grid-cols-2 gap-8 bg-white dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Contact Information Section */}
        <div className="p-10 bg-blue-600 dark:bg-blue-800 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Send className="mr-3 w-8 h-8" /> Get in Touch
            </h2>
            <p className="text-blue-100 mb-8">
              Have a project in mind or just want to say hello? I'd love to hear
              from you.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="mr-3 w-5 h-5" />
              <span>Montreal, QC, Canada</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-3 w-5 h-5" />
              <a
                href="mailto:pranav.jha@mail.concordia.ca"
                className="hover:underline"
              >
                pranav.jha@mail.concordia.ca
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="mr-3 w-5 h-5" />
              <span>+1 (514) 885-2490</span>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="p-10">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center text-green-600 dark:text-green-400"
            >
              <CheckCircle2 className="mx-auto w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
              <p>Your message has been sent successfully.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Send a Message
              </h2>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    <User className="mr-2 w-4 h-4" /> Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`
                      w-full px-4 py-2 border rounded-lg 
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                      ${errors.name ? "border-red-500" : "border-gray-300"}
                      dark:bg-gray-700 dark:text-gray-200
                    `}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    <Mail className="mr-2 w-4 h-4" /> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`
                      w-full px-4 py-2 border rounded-lg 
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                      ${errors.email ? "border-red-500" : "border-gray-300"}
                      dark:bg-gray-700 dark:text-gray-200
                    `}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    <Phone className="mr-2 w-4 h-4" /> Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`
                      w-full px-4 py-2 border rounded-lg 
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                      border-gray-300
                      dark:bg-gray-700 dark:text-gray-200
                    `}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    <MessageCircle className="mr-2 w-4 h-4" /> Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`
                      w-full px-4 py-2 border rounded-lg 
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                      ${errors.message ? "border-red-500" : "border-gray-300"}
                      dark:bg-gray-700 dark:text-gray-200
                    `}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-3 rounded-lg text-white font-semibold transition-all duration-300
                  ${
                    isSubmitting
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  }
                `}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
