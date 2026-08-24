import { skillGroups } from "../data/skills";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Skills</span>
            <h2>Technical toolbox</h2>
            <p>Modern development technologies, cloud platforms, and testing tools for scalable, reliable software.</p>
          </div>
        </Reveal>

        <div className="skill-groups">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 70}>
              <div className="skill-group">
                <h4>{group.title}</h4>
                <div className="pills">
                  {group.skills.map((skill) => (
                    <span key={skill} className="pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
