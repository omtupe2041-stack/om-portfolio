"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Gradient background blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-6"
      >
        {/* Profile Photo */}
        <img
          src="/profile.jpeg"
          className="w-36 h-36 mx-auto rounded-full border-4 border-white/30 shadow-xl mb-6"
          alt="profile"
        />

        {/* Heading */}
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="gradient-text">Om Tupe</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Python Full Stack Developer • Flask • Django • Web Development
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">

          {/* View Projects Button */}
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:scale-105 transition"
          >
            View Projects
          </a>

          {/* Download CV Button */}
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-lg border border-gray-400 hover:border-blue-500 transition"
          >
            Download CV
          </a>

        </div>
      </motion.div>
    </section>
  );
}
