"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ArrowUpRight, Calendar } from "lucide-react";
import { projects } from "@/data/projects";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative flex flex-col glass-card rounded-2xl overflow-hidden border border-border/60 hover:border-border-hover transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 bg-gradient-to-br ${project.gradient}`}
    >
      {/* Top accent line */}
      <div
        className={`h-px w-full bg-gradient-to-r transition-all duration-500 ${
          hovered ? "from-accent/60 via-accent/30 to-transparent" : "from-border/60 to-transparent"
        }`}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium border ${project.accentColor}`}>
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-text-dim font-mono">
                <Calendar size={10} />
                {project.year}
              </span>
            </div>
            <h3 className="text-base font-semibold text-text leading-snug group-hover:text-accent transition-colors duration-200">
              {project.shortTitle}
            </h3>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            onClick={(e) => e.stopPropagation()}
            className="p-1.5 rounded-md text-text-dim hover:text-text hover:bg-surface-2/60 transition-all flex-shrink-0"
          >
            <Github size={16} />
          </a>
        </div>

        {/* Description */}
        <p className="text-sm text-text-muted leading-relaxed mb-4">{project.longDesc}</p>

        {/* Achievements */}
        <div className="mb-5 flex-1">
          <p className="text-xs font-semibold text-text-dim uppercase tracking-widest mb-2 font-mono">
            Key Highlights
          </p>
          <ul className="space-y-1.5">
            {project.achievements.map((ach) => (
              <li key={ach} className="flex items-start gap-2 text-xs text-text-muted">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                {ach}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="pt-4 border-t border-border/40">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded text-xs font-mono text-text-dim bg-surface border border-border/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-mono font-medium mb-2 tracking-widest uppercase">
            03. Projects
          </p>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text">
                Featured work
              </h2>
              <p className="text-text-muted text-base mt-3 max-w-xl">
                Production-quality projects showcasing backend engineering, security, and full-stack development.
              </p>
            </div>
            <a
              href="https://github.com/dharma-byte"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors group shrink-0"
            >
              View all on GitHub
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Mobile link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="sm:hidden mt-8 text-center"
        >
          <a
            href="https://github.com/dharma-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors"
          >
            View all on GitHub
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
