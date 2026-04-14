"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "basic",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", plan: "basic" });
      setSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-md"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-8 text-center">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-gray-400 hover:text-white mb-4 transition-colors"
            >
              ← Back Home
            </motion.button>
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Join Our Gym</h1>
          <p className="text-gray-400">Start your fitness journey today</p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          variants={itemVariants}
          className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-lg p-8"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-2xl text-white">✓</span>
              </motion.div>
              <h2 className="text-xl font-bold text-white mb-2">Registration Successful!</h2>
              <p className="text-gray-400">We'll contact you soon with your membership details.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div variants={itemVariants}>
                <label className="block text-white text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Arjun"
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div variants={itemVariants}>
                <label className="block text-white text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="arjun@example.com"
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </motion.div>

              {/* Phone Field */}
              <motion.div variants={itemVariants}>
                <label className="block text-white text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="8341809236"
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </motion.div>

              {/* Plan Selection */}
              <motion.div variants={itemVariants}>
                <label className="block text-white text-sm font-semibold mb-2">
                  Membership Plan
                </label>
                <select
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="basic">Basic Plan - 28K/month</option>
                  <option value="pro">Pro Plan - 49K/month</option>
                  <option value="premium">Premium Plan - 60K/month</option>
                </select>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <span>Complete Registration</span>
                  <span>→</span>
                </motion.button>
              </motion.div>

              {/* Terms */}
              <motion.p variants={itemVariants} className="text-xs text-gray-400 text-center">
                By registering, you agree to our Terms of Service and Privacy Policy
              </motion.p>
            </form>
          )}
        </motion.div>

        {/* Info Cards */}
        <motion.div variants={itemVariants} className="mt-8 grid grid-cols-3 gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center"
          >
            <p className="text-red-500 font-bold text-lg">24/7</p>
            <p className="text-gray-400 text-xs">Open Access</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center"
          >
            <p className="text-red-500 font-bold text-lg">50+</p>
            <p className="text-gray-400 text-xs">Classes</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center"
          >
            <p className="text-red-500 font-bold text-lg">Expert</p>
            <p className="text-gray-400 text-xs">Trainers</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
