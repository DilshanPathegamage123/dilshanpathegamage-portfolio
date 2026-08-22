import type { Project } from "../types";

const CATEGORY_ICON: Record<string, string> = {
  "Research Project": "🔬",
  "Machine Learning": "📈",
  "Expert System": "🧠",
  "Web Application": "🌐",
  "Ecommerce Application": "🛒",
  "UI Design & Prototype": "🎨",
  "Mobile Application": "📱",
  "Hardware Application": "🛠️",
};

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const icon = CATEGORY_ICON[project.category] ?? "💻";

  return (
    <button type="button" className="proj-card" onClick={onOpen}>
      <div className="proj-thumb">
        {project.cover ? (
          <img src={project.cover} alt={project.title} loading="lazy" />
        ) : (
          <div className="proj-thumb placeholder">{icon}</div>
        )}
      </div>
      <div className="proj-body">
        <span className="proj-cat">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="proj-tech">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="proj-cta">View details →</div>
      </div>
    </button>
  );
}
