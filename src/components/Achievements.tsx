import { achievements } from "../data/achievements";
import { Reveal } from "./Reveal";

export function Achievements() {
  return (
    <section className="section alt" id="awards">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Achievements</span>
            <h2>Awards &amp; participations</h2>
            <p>Competition results, recognitions, and academic honors.</p>
          </div>
        </Reveal>

        <div className="ach-grid">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={(i % 4) * 60}>
              <div className="ach-card">
                <div className="icon">{a.icon}</div>
                <h4>{a.title}</h4>
                <div className="ev">{a.event}</div>
                <div className="yr">{a.year}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
