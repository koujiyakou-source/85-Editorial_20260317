import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Works", href: "#works" },
  { name: "Profile", href: "#profile" },
  { name: "Contact", href: "#contact" },
];

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center py-7 border-bottom border-navy-pale border-b">
        <div className="flex items-center">
          <div className="flex flex-col gap-0.5">
            <span className="text-[15px] font-medium text-navy tracking-wider">85 Editorial</span>
            <span className="text-[10px] text-navy-light tracking-widest uppercase">Content & Marketing Strategy</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] text-navy-light hover:text-navy transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-navy-light"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden py-4 border-b border-navy-pale flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[14px] text-navy-light hover:text-navy transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
}
