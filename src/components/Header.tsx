import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <a href="#top" className="logo" aria-label="Back to top">
          <span>dilshan</span>
          <span className="dot">.</span>
          <span>dev</span>
        </a>

        <ul className="navlinks">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="navright">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "dark"}
          >
            <span className="knob">{theme === "dark" ? "🌙" : "☀"}</span>
          </button>
          <a href="#contact" className="btn btn-primary hide-mobile">
            Contact me
          </a>
          <button
            type="button"
            className="menu-toggle hide-desktop"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Contact me
          </a>
        </div>
      )}
    </header>
  );
}
