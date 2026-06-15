"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { timeline } from "@/data/experience";

function TimelineCard({ item, index, isLast }: { item: typeof timeline[0]; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isWork = item.type === "work";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
      className="relative flex gap-6"
    >
      {/* Icon + line */}
      <div className="flex flex-col items-center">
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border ${
            isWork
              ? "bg-accent/10 border-accent/30 text-accent"
              : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
          }`}
        >
          {isWork ? <Briefcase size={16} /> : <GraduationCap size={16} />}
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-3 bg-gradient-to-b from-border to-transparent min-h-[40px]" />
        )}
      </div>

      {/* Card */}
      <div className={`flex-1 ${!isLast ? "pb-10" : "pb-0"}`}>
        <div className="glass-card rounded-2xl p-6 border border-border/60 hover:border-border-hover transition-all duration-300 hover:shadow-card">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h3 className="text-base font-semibold text-text">{item.role}</h3>
              <p className={`text-sm font-medium ${isWork ? "text-accent" : "text-emerald-400"}`}>
                {item.org}
              </p>
            </div>
            <div className="flex flex-col sm:items-end gap-0.5">
              <span className="text-xs font-mono text-text-dim bg-surface px-2 py-1 rounded border border-border/60 whitespace-nowrap">
                {item.period}
              </span>
              <span className="text-xs text-text-dim">{item.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-text-muted leading-relaxed mb-4">{item.description}</p>

          {/* Bullets */}
          <ul className="space-y-2 mb-4">
            {item.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-text-muted">
                <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          {/* Tech */}
          {item.tech && (
            <div className="pt-4 border-t border-border/40">
              <div className="flex flex-wrap gap-1.5">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-xs font-mono text-text-dim bg-surface border border-border/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-mono font-medium mb-2 tracking-widest uppercase">
            04. Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            Work & education
          </h2>
          <p className="text-text-muted text-base mt-3 max-w-xl">
            Professional experience and academic background in software engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div>
          {timeline.map((item, i) => (
            <TimelineCard
              key={`${item.org}-${i}`}
              item={item}
              index={i}
              isLast={i === timeline.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
