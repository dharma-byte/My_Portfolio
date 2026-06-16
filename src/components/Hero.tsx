"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/dharma-byte",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/dharma-tejaa",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:puttadharmateja6@gmail.com",
    icon: Mail,
  },
];

const techStack = ["Python", "FastAPI", "Node.js", "Java", "Spring Boot", "PostgreSQL", "React"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-100" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/3 blur-[80px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-accent/40 shadow-glow ring-4 ring-accent/10">
              <Image
                src="/profile.jpg"
                alt="Dharma Teja Putta"
                width={128}
                height={128}
                className="object-cover object-top w-full h-full"
                priority
              />
            </div>
            {/* Online indicator */}
            <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-background shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
          </div>
        </motion.div>

        {/* Status badge */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-border/60 text-xs text-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to full-time & intern roles
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text mb-3"
        >
          Dharma Teja Putta
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl font-medium text-text-muted mb-5"
        >
          Software Engineer
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Building scalable backend systems, RESTful APIs, and full-stack applications using{" "}
          <span className="text-text font-medium">Python, FastAPI, Node.js, Java</span> and{" "}
          <span className="text-text font-medium">React</span> — with a focus on security, performance, and clean architecture.
        </motion.p>

        {/* Tech pills */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-surface border border-border text-text-muted"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-all duration-200 shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5"
          >
            <ExternalLink size={15} />
            View Projects
          </button>
          <a
            href="/Software_Engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg border border-border bg-surface text-text font-medium text-sm hover:border-border-hover hover:bg-surface-2 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Download size={15} />
            View Resume
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-5"
        >
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex items-center gap-2 text-text-dim hover:text-text transition-colors duration-200 group"
            >
              <Icon size={18} className="group-hover:text-accent transition-colors" />
              <span className="text-sm hidden sm:inline">{label}</span>
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-dim"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
