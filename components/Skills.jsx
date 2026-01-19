"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = ["Python", "Flask", "Django", "HTML", "CSS", "JavaScript", "SQL", "Git"];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-[#111]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 gradient-text">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="px-4 py-2 glass text-sm font-medium"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
