import aboutPhoto from "../assets/images/profile/about.webp";
import { education, profile } from "../data/profile";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <Reveal>
          <div className="about-photo">
            <img src={aboutPhoto} alt={profile.name} width={800} height={1067} loading="lazy" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="about-copy">
            <span className="eyebrow">About</span>
            <h2>A little about me</h2>
            <p>{profile.aboutBio}</p>

            <div className="facts">
              <div>
                <div className="k">Location</div>
                <div className="v">{profile.location}</div>
              </div>
              <div>
                <div className="k">Email</div>
                <div className="v">{profile.email}</div>
              </div>
              <div>
                <div className="k">Phone</div>
                <div className="v">{profile.phone}</div>
              </div>
              <div>
                <div className="k">GitHub</div>
                <div className="v">@DilshanPathegamage123</div>
              </div>
            </div>

            <div className="edu-card">
              <div>
                <h4>
                  {education.degree} — {education.institution}
                </h4>
                <p>
                  {education.faculty} · {education.start} – {education.end}
                </p>
              </div>
            </div>

            <div className="about-actions">
              <a href={profile.resumeUrl} className="btn btn-primary" download>
                Download CV
              </a>
              <a href={profile.github} className="btn btn-ghost" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
