"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Send,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .optional()
    .refine((val) => val === undefined || /^\+?[1-9]\d{1,14}$/.test(val), {
      message: "Invalid phone number",
    }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Locations data
const locations = [
  {
    name: "Pranav Jha - Montreal Office",
    address: "604-2250 rue Guy, Montreal,   QC H3H 2M3, Canada",
    phone: "+1 (514) 885-2490",
    email: "pranav.jha@mail.concordia.ca",
    website: "#",
    googleMapsLink: "https://maps.app.goo.gl/k6Xaw3Z7t4PSpWYs6",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific field error when user starts typing
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form and show success
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitStatus("success");

      // Optional: Send actual form data to backend
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   body: JSON.stringify(validatedData)
      // });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
        setErrors(fieldErrors);
        setSubmitStatus("error");
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner.jpg"
            alt="Professional Background"
            fill
            quality={90}
            priority
            className="opacity-50 dark:opacity-30 object-cover"
            aria-hidden="true"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Contact{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            Ready to explore AI possibilities? Let&#39;s connect and discuss how
            we can drive your digital transformation.
          </motion.p>
        </div>
      </section>

      {/* Bento Box Layout */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
          {/* Locations - Top */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
                  <CardContent className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        {location.name}
                      </CardTitle>
                      <div className="flex space-x-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="w-8 h-8"
                          asChild
                        >
                          <Link href={location.website} target="_blank">
                            <Globe className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          className="w-8 h-8"
                          asChild
                        >
                          <Link href={location.googleMapsLink} target="_blank">
                            <MapPin className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <Phone className="w-4 h-4 text-blue-600" />
                        <span>{location.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <Mail className="w-4 h-4 text-blue-600" />
                        <span>{location.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <Globe className="w-4 h-4 text-blue-600" />
                        <span className="truncate">{location.address}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form - Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <Card className="w-full shadow-2xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 relative">
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="destructive"
                    className="text-xs uppercase tracking-wider"
                  >
                    Under Development
                  </Badge>
                </div>
                <CardTitle className="text-3xl font-bold flex items-center gap-4">
                  <Send className="w-10 h-10" />
                  Contact Me
                </CardTitle>
                <CardDescription className="text-white/80 mt-2">
                  Have a question or want to collaborate? I&#39;d love to hear
                  from you.
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8 space-y-6">
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 dark:bg-green-900/30 border border-green-300 dark:border-green-700 p-4 rounded-lg flex items-center gap-4 text-green-700 dark:text-green-300"
                  >
                    <CheckCircle className="w-6 h-6" />
                    <p>
                      Your message has been sent successfully! We&#39;ll get
                      back to you soon.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Full Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full ${errors.name ? "border-red-500" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertTriangle className="w-4 h-4" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email Address
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full ${errors.email ? "border-red-500" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertTriangle className="w-4 h-4" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Phone Number (Optional)
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full ${errors.phone ? "border-red-500" : ""}`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertTriangle className="w-4 h-4" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full ${errors.message ? "border-red-500" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertTriangle className="w-4 h-4" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
