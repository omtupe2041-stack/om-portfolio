"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400 text-lg mb-2">Hi, I am</p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Om Tupe
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Python Full Stack Developer <br/>
            Flask • Django • Web Applications
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              View Work
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Image with rotated shape */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Rotated background block */}
          <div className="absolute w-80 h-96 bg-white rotate-12"></div>

          {/* Profile Image */}
          <img
            src="/profile.jpeg"
            alt="profile"
            className="relative w-72 h-96 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
