"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Github,
  Twitter,
  Mail,
  Heart,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const links = {
    platform: [
      { name: "Problem Portal", href: "#problems" },
      { name: "Pattern Visualizer", href: "#patterns" },
      { name: "Warning Dashboard", href: "#warnings" },
      { name: "Campus Pulse", href: "#pulse" },
    ],
    community: [
      { name: "Wisdom Feed", href: "#wisdom" },
      { name: "Achievements", href: "#gamification" },
      { name: "Leaderboard", href: "#gamification" },
      { name: "Alumni Portal", href: "#" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to make your campus{" "}
              <span className="text-saffron">never forget?</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Join 500+ colleges already building their institutional memory.
              Every experience shared today prevents a problem tomorrow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-saffron to-saffron-dark text-white rounded-xl font-heading font-semibold shadow-lg hover:shadow-xl transition-all">
                Get Started Free
              </button>
              <button className="px-8 py-3 bg-white/10 text-white rounded-xl font-heading font-semibold hover:bg-white/20 transition-all flex items-center gap-2">
                Watch Demo
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-7 h-7 text-primary-light" />
            <span className="font-heading font-bold text-lg">
              Campus<span className="text-saffron">Memory</span>
            </span>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            The first self-learning college platform. Where every student&apos;s
            experience becomes permanent wisdom.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Platform */}
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm">
            Platform
          </h4>
          <ul className="space-y-2">
            {links.platform.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-saffron transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm">
            Community
          </h4>
          <ul className="space-y-2">
            {links.community.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-saffron transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm">
            Resources
          </h4>
          <ul className="space-y-2">
            {links.resources.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-saffron transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © 2025 Campus Memory. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-current" />{" "}
            for Indian campuses
          </p>
        </div>
      </div>
    </footer>
  );
}
