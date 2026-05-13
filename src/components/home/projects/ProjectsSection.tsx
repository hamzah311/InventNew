"use client";

import { useState, useRef } from "react";
import styles from "./ProjectsSection.module.css";

const PROJECTS_DEFAULT = [
  {
    index: "01",
    title: "Dubai Hills DH215",
    imageSrc: "/images/projects/project-1.jpg",
    imageAlt: "Dubai Hills DH215 project",
    href: "/projects/dubai-hills-dh215",
  },
  {
    index: "02",
    title: "Dubai Hills DH215",
    imageSrc: "/images/projects/project-2.jpg",
    imageAlt: "Dubai Hills DH215 project",
    href: "/projects/dubai-hills-dh215-2",
  },
  {
    index: "03",
    title: "Dubai Hills DH215",
    imageSrc: "/images/projects/project-3.jpg",
    imageAlt: "Dubai Hills DH215 project",
    href: "/projects/dubai-hills-dh215-3",
  },
  {
    index: "04",
    title: "Dubai Hills DH215",
    imageSrc: "/images/projects/project-4.jpg",
    imageAlt: "Dubai Hills DH215 project",
    href: "/projects/dubai-hills-dh215-4",
  },
];

interface ProjectItem {
  index: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

interface ProjectsSectionProps {
  data?: {
    heading?: string;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
    projects?: ProjectItem[];
  };
}

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function ProjectsSection({ data }: ProjectsSectionProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const heading = data?.heading ?? "Projects";
  const description =
    data?.description ??
    "Explore our bespoke home lift installations, crafted to combine precision engineering, seamless mobility, and refined design for modern luxury living.";
  const buttonText = data?.buttonText ?? "Get a free quote";
  const buttonHref = data?.buttonHref ?? "/quote";
  const projects = data?.projects ?? PROJECTS_DEFAULT;

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement;
    if (card) {
      track.scrollTo({ left: card.offsetLeft - 40, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const scrollLeft = track.scrollLeft;
    const cardWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 0;
    const gap = 24;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveSlide(Math.min(index, projects.length - 1));
  };

  return (
    <section className={styles.wrapper}>
      {/* Top row: heading + description + CTA */}
      <div className={styles.topRow}>
        <div className={styles.topLeft}>
            <h2 className={styles.heading}>{heading}</h2>
            <span className={styles.line} />
        </div>

        <div className={styles.bottomPart}>
          <p className={styles.description}>{description}</p>
          {/* <a href={buttonHref} className={styles.ctaBtn}>
            <span className={styles.ctaText}>{buttonText}</span>
            <span className={styles.ctaArrow}>↗</span>
          </a> */}
          <a
  href="#"
  className={styles.ctaBtn}
  onClick={(e) => {
    e.preventDefault();

    document
      .getElementById("contact-banner")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
>
  <span className={styles.ctaText}>
    {buttonText}
  </span>

  {/* <span className={styles.ctaArrow}>↗</span> */}
  <span className={styles.arrowCircle}>
                <ArrowIcon />
              </span>
</a>
        </div>
      </div>

      {/* Carousel track */}
      <div className={styles.track} ref={trackRef} onScroll={handleScroll}>
        {projects.map((project) => (
          <a key={project.index} href={project.href} className={styles.card}>
            <div className={styles.imageBox}>
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
                className={styles.image}
              />
            </div>
            <p className={styles.cardLabel}>
              <span className={styles.cardIndex}>{project.index} -</span>{" "}
              {project.title}
            </p>
          </a>
        ))}
      </div>

      {/* Dot indicators */}
      <div className={styles.dots}>
        {projects.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              activeSlide === index ? styles.dotActive : ""
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
