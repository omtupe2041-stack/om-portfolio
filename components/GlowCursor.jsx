"use client";
import { useEffect } from "react";

export default function GlowCursor() {
  useEffect(() => {
    const cursor = document.getElementById("glow-cursor");

    const move = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      id="glow-cursor"
      className="fixed w-40 h-40 rounded-full pointer-events-none z-50 
                 bg-gradient-to-r from-blue-500 to-purple-600 
                 blur-3xl opacity-30 transition-transform duration-75"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
}
