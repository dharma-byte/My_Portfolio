"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, FileText } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const techStack = ["FastAPI", "Spring Boot", "Node.js", "PostgreSQL", "Docker", "React"];

interface HeroSplineProps {
  splineScene: ReactNode;
}

export default function HeroSpline({ splineScene }: HeroSplineProps) {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0B1120]"
    >
      {/* Spotlight beams */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20"
        fill="#3B82F6"
      />
      <Spotlight
        className="top-10 right-0 h-[80vh] w-[50vw]"
        fill="#1D4ED8"
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Outer card */}
      <Card className="relative z-10 w-full max-w-7xl mx-4 sm:mx-6 lg:mx-8 border-0 bg-transparent shadow-none overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-2rem)] lg:min-h-[680px]">

          {/* ── LEFT: Content ─────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-14 lg:py-20 z-10"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 text-xs font-medium text-blue-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to full-time &amp; intern roles
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Dharma Teja
              </span>
              <br />
              Putta
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl font-medium text-neutral-300 mb-4"
            >
              Software Engineer
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-md mb-8"
            >
              I build scalable backend systems and RESTful APIs using{" "}
              <span className="text-white font-medium">FastAPI</span>,{" "}
              <span className="text-white font-medium">Java Spring Boot</span>, and{" "}
              <span className="text-white font-medium">Node.js</span> — backed by{" "}
              <span className="text-white font-medium">PostgreSQL</span> and containerized with Docker.
              Currently interning at Nexzap Software Development, shipping real-time features and production-grade APIs.
            </motion.p>

            {/* Tech pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
              {techStack.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-white/5 border border-white/10 text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_28px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="/Software_Engineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileText size={15} />
                View Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-5">
              <a
                href="https://github.com/dharma-byte"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors group"
              >
                <Github size={18} className="group-hover:text-blue-400 transition-colors" />
                <span className="text-sm hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/dharma-tejaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors group"
              >
                <Linkedin size={18} className="group-hover:text-blue-400 transition-colors" />
                <span className="text-sm hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="mailto:puttadharmateja6@gmail.com"
                aria-label="Email"
                className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors group"
              >
                <Mail size={18} className="group-hover:text-blue-400 transition-colors" />
                <span className="text-sm hidden sm:inline">Email</span>
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Spline (passed as ReactNode from server) ── */}
          <div className="flex-1 relative min-h-[320px] lg:min-h-full">
            {/* Blend edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#0B1120] to-transparent pointer-events-none hidden lg:block" />
            <div className="absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-[#0B1120] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-16 z-10 bg-gradient-to-t from-[#0B1120] to-transparent pointer-events-none lg:hidden" />

            <div className="absolute inset-0">{splineScene}</div>
          </div>

        </div>
      </Card>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-600 z-10"
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-5 bg-gradient-to-b from-neutral-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
