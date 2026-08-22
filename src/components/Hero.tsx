import heroPhoto from "../assets/images/profile/hero.webp";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap grid">
        <div>
          <span className="eyebrow">Software Engineer · Sri Lanka</span>
          <h1>{profile.heroHeadline}</h1>
          <p className="lede">{profile.heroLede}</p>
          <div className="ctas">
            <a href="#work" className="btn btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
            <a href={profile.resumeUrl} className="btn btn-ghost" download>
              Download CV ↓
            </a>
          </div>
          <p className="hero-experience">{profile.heroExperienceLine}</p>
          <div className="focus-pills">
            {profile.heroFocusAreas.map((area) => (
              <span key={area} className="pill">
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-photo">
          <div className="frame">
            <img src={heroPhoto} alt={profile.name} width={900} height={1125} />
          </div>
          <div className="chip">
            <div className="pulse" />
            <div>
              <strong>{profile.currentRole}</strong>
              <span>
                {profile.currentCompany} · {profile.currentSince}–Present
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
