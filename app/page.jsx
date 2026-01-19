"use client";

import { useEffect } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import TechMarquee from "../components/TechMarquee";
import GlowCursor from "../components/GlowCursor";

export default function Home() {

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <>
      {/* Glow Cursor */}
      <GlowCursor />

      <Navbar />
      <Hero />

      {/* Animated Tech Strip */}
      <TechMarquee />

      <section className="reveal">
        <About />
      </section>

      <section className="reveal">
        <Skills />
      </section>

      <section className="reveal">
        <Projects />
      </section>

      <section className="reveal">
        <Experience />
      </section>

      <section className="reveal">
        <Contact />
      </section>
    </>
  );
}
