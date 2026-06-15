"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { certifications } from "@/data/certifications";

function CertCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = cert.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      className={`group relative glass-card rounded-2xl p-6 border ${cert.borderColor} bg-gradient-to-br ${cert.gradient} transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1`}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-surface border border-border/60 group-hover:border-border-hover transition-colors flex-shrink-0">
          <Icon size={20} className={cert.iconColor} />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-text leading-snug mb-1">{cert.title}</h3>
          <p className="text-xs text-text-muted mb-0.5">{cert.issuer}</p>
          <p className="text-xs text-text-dim font-mono mb-3">Issued {cert.date}</p>

          <p className="text-xs text-text-muted leading-relaxed mb-3">{cert.description}</p>

          <div className="flex flex-wrap gap-1.5">
            {cert.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-xs font-mono text-text-dim bg-surface/80 border border-border/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 relative">
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
            05. Certifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            Credentials
          </h2>
          <p className="text-text-muted text-base mt-3 max-w-xl">
            Industry-recognized programs and virtual internships validating my technical depth.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
