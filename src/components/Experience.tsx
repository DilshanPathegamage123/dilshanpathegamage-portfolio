import { experience } from "../data/experience";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section className="section alt" id="experience">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Experience</span>
            <h2>Where I've worked</h2>
            <p>Professional experience building scalable software solutions in agile, international environments.</p>
          </div>
        </Reveal>

        <div className="timeline">
          {experience.map((entry, i) => (
            <Reveal key={entry.role} delay={i * 80}>
              <div className="tl-item">
                <div className="tl-date">
                  {entry.start} — {entry.current ? <span className="current">● Present</span> : entry.end}
                </div>
                <div className="tl-rule" />
                <div className="tl-role">
                  <h3>{entry.role}</h3>
                  <div className="co">{entry.company}</div>
                  <ul>
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="tech">
                    {entry.tech.map((t) => (
                      <span key={t} className="pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
