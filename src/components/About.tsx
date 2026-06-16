"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Code2, Layers, Zap } from "lucide-react";

const stats = [
  { value: "2+", label: "Internships" },
  { value: "3+", label: "Real Projects" },
  { value: "4+", label: "Certifications" },
  { value: "7.6", label: "CGPA / 10" },
];

const highlights = [
  {
    icon: Code2,
    title: "Backend Systems",
    desc: "Building secure, scalable REST APIs and microservices with Python (FastAPI), Node.js, and Java (Spring Boot).",
  },
  {
    icon: Layers,
    title: "Full Stack",
    desc: "End-to-end development — from PostgreSQL schema design to React frontends with JWT-protected routes.",
  },
  {
    icon: Zap,
    title: "Real-Time Features",
    desc: "Socket.IO-powered bidirectional communication and Firebase for live data sync in production environments.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] },
    }),
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Section header */}
        <motion.div
          custom={0}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <p className="text-accent text-sm font-mono font-medium mb-2 tracking-widest uppercase">
            01. About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            A bit about me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Photo + text */}
          <div className="space-y-6">
            {/* Profile photo */}
            <motion.div
              custom={1}
              variants={variants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex items-center gap-5"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-accent/30 flex-shrink-0 shadow-glow">
                <Image
                  src="/profile.jpg"
                  alt="Dharma Teja Putta"
                  width={64}
                  height={64}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div>
                <p className="text-base font-semibold text-text">Dharma Teja Putta</p>
                <p className="text-sm text-accent font-medium">Software Engineer</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <MapPin size={12} className="text-text-dim" />
                  <span className="text-xs text-text-dim">Hyderabad, India</span>
                </div>
              </div>
            </motion.div>

            <motion.p
              custom={2}
              variants={variants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-text-muted leading-relaxed text-base"
            >
              I&apos;m a Software Engineer with hands-on experience in building scalable backend
              systems, RESTful APIs, and full-stack applications using <span className="text-text font-medium">Python, JavaScript, Java</span>, and modern web technologies.
            </motion.p>
            <motion.p
              custom={3}
              variants={variants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-text-muted leading-relaxed text-base"
            >
              Through internships at <span className="text-text font-medium">Nexzap Software Development</span> and <span className="text-text font-medium">Yuga Yatra Retail</span>, I&apos;ve contributed to production-level API integrations, real-time features using Socket.IO, and Firebase-based authentication systems.
            </motion.p>
            <motion.p
              custom={4}
              variants={variants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-text-muted leading-relaxed text-base"
            >
              I have a strong foundation in microservices architecture, secure API design, and SQL database optimization — with experience delivering production-ready solutions across collaborative team environments.
            </motion.p>

            <motion.div
              custom={5}
              variants={variants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex items-center gap-2 text-text-dim text-sm"
            >
              <MapPin size={14} className="text-accent" />
              <span>Hyderabad, India · Open to remote & hybrid roles</span>
            </motion.div>

            <motion.div
              custom={6}
              variants={variants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <a
                href="/Software_Engineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-all duration-200 shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5"
              >
                View Resume
              </a>
            </motion.div>
          </div>

          {/* Right: Stats + Highlights */}
          <div className="space-y-6">
            {/* Stats */}
            <motion.div
              custom={2}
              variants={variants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-5 text-center hover:border-border-hover transition-all duration-300"
                >
                  <div className="text-2xl font-bold accent-gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-dim font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    custom={3 + i}
                    variants={variants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex gap-4 glass-card rounded-xl p-4 hover:border-border-hover transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text mb-0.5">{item.title}</p>
                      <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
