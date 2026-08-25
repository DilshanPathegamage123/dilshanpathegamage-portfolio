import { useEffect, useRef, useState } from "react";
import type { Project } from "../types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const media = [
    ...(project.cover ? [{ type: "image" as const, src: project.cover }] : []),
    ...(project.gallery ?? []).map((src) => ({ type: "image" as const, src })),
    ...(project.video ? [{ type: "video" as const, src: project.video }] : []),
  ];

  const mediaCount = media.length;
  const goPrev = () => setActiveIndex((i) => (i - 1 + mediaCount) % mediaCount);
  const goNext = () => setActiveIndex((i) => (i + 1) % mediaCount);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && mediaCount > 1) goPrev();
      if (e.key === "ArrowRight" && mediaCount > 1) goNext();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose, mediaCount]);

  const active = media[activeIndex];

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-panel" role="dialog" aria-modal="true" aria-label={project.title}>
        <button type="button" className="modal-close" onClick={onClose} ref={closeRef} aria-label="Close">
          ✕
        </button>

        <div className="modal-scroll">
          <span className="proj-cat">{project.category}</span>
          <h2>{project.title}</h2>
          {project.dateLabel && <div className="modal-datelabel mono">{project.dateLabel}</div>}

          {media.length > 0 ? (
            <div className="modal-gallery">
              <div className="modal-gallery-main">
                {active.type === "video" ? (
                  <video controls playsInline preload="none" src={active.src} />
                ) : (
                  <img src={active.src} alt={`${project.title} screenshot ${activeIndex + 1}`} />
                )}
                {mediaCount > 1 && (
                  <>
                    <button type="button" className="gallery-nav gallery-nav-prev" onClick={goPrev} aria-label="Previous image">
                      ‹
                    </button>
                    <button type="button" className="gallery-nav gallery-nav-next" onClick={goNext} aria-label="Next image">
                      ›
                    </button>
                  </>
                )}
              </div>
              {media.length > 1 && (
                <div className="modal-gallery-strip">
                  {media.map((m, i) => (
                    <button
                      type="button"
                      key={m.src}
                      className={`strip-thumb ${i === activeIndex ? "active" : ""}`}
                      onClick={() => setActiveIndex(i)}
                      aria-label={`Show ${m.type === "video" ? "video" : `image ${i + 1}`}`}
                    >
                      {m.type === "video" ? (
                        <span className="strip-video-icon">▶</span>
                      ) : (
                        <img src={m.src} alt="" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="modal-noimage">No screenshots yet — details below.</div>
          )}

          <div className="modal-description">
            {project.description.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>

          {project.sections?.map((section) => (
            <div className="modal-rich-section" key={section.heading}>
              <h3>
                {section.icon && <span className="modal-rich-icon">{section.icon}</span>}
                {section.heading}
              </h3>
              {section.paragraphs?.map((para) => (
                <p key={para}>{para}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {project.highlights && (
            <div className="modal-section">
              <h4>Key highlights</h4>
              <ul>
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          {project.metrics && (
            <div className="modal-metrics">
              {project.metrics.map((m) => (
                <div key={m.label} className="metric">
                  <div className="metric-value">{m.value}</div>
                  <div className="metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="modal-section">
            <h4>Technologies used</h4>
            <div className="proj-tech modal-tech">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>

          {project.links.length > 0 && (
            <div className="modal-links">
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
