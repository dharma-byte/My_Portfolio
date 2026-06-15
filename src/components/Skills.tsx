"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories, techBadges } from "@/data/skills";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-text">{name}</span>
        <span className="text-xs text-text-dim font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-blue-400"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] },
    }),
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          custom={0}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <p className="text-accent text-sm font-mono font-medium mb-2 tracking-widest uppercase">
            02. Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            Technical expertise
          </h2>
          <p className="text-text-muted text-base mt-3 max-w-xl">
            Technologies I&apos;ve used in production, internships, and real projects.
          </p>
        </motion.div>

        {/* Tech badge cloud */}
        <motion.div
          custom={1}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap gap-2 mb-14"
        >
          {techBadges.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-mono font-medium rounded-md glass-card border-border/60 text-text-muted hover:text-text hover:border-border-hover transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Skill category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              custom={catIdx + 2}
              variants={variants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`glass-card rounded-2xl p-6 border ${cat.borderColor} bg-gradient-to-br ${cat.color} hover:shadow-card-hover transition-all duration-300 group`}
            >
              <h3 className={`text-sm font-semibold ${cat.accentColor} mb-5 uppercase tracking-widest font-mono`}>
                {cat.category}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIdx * 0.05 + skillIdx * 0.07}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
