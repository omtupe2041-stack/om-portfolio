"use client";
import { motion } from "framer-motion";

export default function Projects() {
 const projects = [
  {
    title: "Student Management System",
    desc: "Flask + MySQL CRUD application with authentication"
  },
  {
    title: "Portfolio Website",
    desc: "Responsive portfolio with modern UI"
  },
  {
    title: "Expense Tracker",
    desc: "Web app to track income and expenses with data visualization"
  }
];


  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-8 gradient-text">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            whileHover={{ y: -8 }}
            className="glass p-6 cursor-pointer"
          >
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
