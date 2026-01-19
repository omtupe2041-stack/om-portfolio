"use client";
import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  return (
    <nav className="fixed w-full top-0 glass z-50">
      <div className="glass p-8">

        <h1 className="font-bold text-xl">Om Tupe</h1>

        <div className="flex items-center gap-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <button
            onClick={() => {
              document.documentElement.classList.toggle("dark");
              setDark(!dark);
            }}
            className="border px-3 py-1 rounded"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
