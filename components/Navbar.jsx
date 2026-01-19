"use client";
import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-widest">OM.TUPE</h1>

        {/* Links */}
        <div className="hidden md:flex gap-10 text-sm tracking-wider">
          <a href="#about" className="hover:text-gray-400">ABOUT</a>
          <a href="#skills" className="hover:text-gray-400">SKILLS</a>
          <a href="#projects" className="hover:text-gray-400">PROJECTS</a>
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
        >
          CONTACT ME
        </a>

        {/* Theme Toggle */}
        <button
          onClick={() => {
            document.documentElement.classList.toggle("dark");
            setDark(!dark);
          }}
          className="ml-4"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
