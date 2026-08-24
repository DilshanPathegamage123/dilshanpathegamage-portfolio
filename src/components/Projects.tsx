import { useState } from "react";
import { projects } from "../data/projects";
import type { Project } from "../types";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Reveal } from "./Reveal";

export function Projects() {
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Selected Work</span>
            <h2>Projects</h2>
            <p>A collection of academic, freelance, and personal projects — click any card for the full write-up.</p>
          </div>
        </Reveal>

        <div className="proj-grid">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 70}>
              <ProjectCard project={project} onOpen={() => setOpenProject(project)} />
            </Reveal>
          ))}
        </div>
      </div>

      {openProject && <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />}
    </section>
  );
}
