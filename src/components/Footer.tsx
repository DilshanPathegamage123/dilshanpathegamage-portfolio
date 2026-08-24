import { profile } from "../data/profile";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <a href="#top" className="logo">
            <span>dilshan</span>
            <span className="dot">.</span>
            <span>dev</span>
          </a>
          <ul className="foot-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              in
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              gh
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} {profile.name}</span>
        </div>
      </div>
    </footer>
  );
}
