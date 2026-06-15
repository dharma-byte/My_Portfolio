"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/dharma-byte", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/dharma-tejaa", icon: Linkedin },
  { label: "Email", href: "mailto:puttadharmateja6@gmail.com", icon: Mail },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg accent-gradient-text mb-1">DTP</p>
            <p className="text-xs text-text-dim">
              Dharma Teja Putta · Software Engineer
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-xs text-text-dim hover:text-text transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-text-dim hover:text-accent transition-colors duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="text-xs text-text-dim">
            © {new Date().getFullYear()} Dharma Teja Putta. All rights reserved.
          </p>
          <p className="text-xs text-text-dim">
            Built with{" "}
            <span className="text-text-muted">Next.js 15</span>,{" "}
            <span className="text-text-muted">TypeScript</span> &{" "}
            <span className="text-text-muted">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
