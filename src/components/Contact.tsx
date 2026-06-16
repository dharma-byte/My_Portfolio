"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle, Phone } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    handle: "github.com/dharma-byte",
    href: "https://github.com/dharma-byte",
    icon: Github,
    desc: "Repositories and open source work",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/dharma-tejaa",
    href: "https://linkedin.com/in/dharma-tejaa",
    icon: Linkedin,
    desc: "Connect professionally",
  },
  {
    label: "Email",
    handle: "puttadharmateja6@gmail.com",
    href: "mailto:puttadharmateja6@gmail.com",
    icon: Mail,
    desc: "Opportunities & collaborations",
  },
  {
    label: "Phone",
    handle: "+91 73869 46016",
    href: "tel:+917386946016",
    icon: Phone,
    desc: "Available during business hours",
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] },
    }),
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          custom={0}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <p className="text-accent text-sm font-mono font-medium mb-2 tracking-widest uppercase">
            06. Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            Get in touch
          </h2>
          <p className="text-text-muted text-base mt-3 max-w-xl">
            I&apos;m actively looking for new opportunities. Whether you have a role to discuss,
            a project idea, or just want to say hello — I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Socials + Resume CTA */}
          <div className="space-y-4">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  custom={i + 1}
                  variants={variants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex items-center gap-4 glass-card rounded-2xl p-4 border border-border/60 hover:border-border-hover transition-all duration-300 group hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-text">{s.label}</p>
                    <p className="text-xs text-text-muted truncate">{s.handle}</p>
                  </div>
                  <p className="text-xs text-text-dim hidden sm:block max-w-[120px] text-right leading-relaxed">
                    {s.desc}
                  </p>
                </motion.a>
              );
            })}

          </div>

          {/* Right: Contact form */}
          <motion.div
            custom={2}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 border border-border/60 space-y-5"
            >
              <div>
                <label className="block text-xs font-medium text-text-muted mb-1.5" htmlFor="name">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="John Doe"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-border text-text text-sm placeholder:text-text-dim focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/60 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-text-muted mb-1.5" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="john@company.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-border text-text text-sm placeholder:text-text-dim focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/60 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-text-muted mb-1.5" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Hi Dharma, I came across your profile and..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-border text-text text-sm placeholder:text-text-dim focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-glow hover:shadow-glow-lg"
              >
                {status === "loading" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={16} />
                    Message sent!
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-xs">
                  <AlertCircle size={14} />
                  Something went wrong. Please email me directly at puttadharmateja6@gmail.com
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
