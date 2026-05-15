"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./ProjectsSection.module.css";

const PROJECTS_DEFAULT = [
  {
    index: "01",
    title: "Dubai Hills Villa Residence",
    imageSrc: "/images/projects/_DSC5734.jpg",
    imageAlt: "Luxury home lift installation at Dubai Hills villa",
    href: "/projects/dubai-hills-villa-residence",
  },
  {
    index: "02",
    title: "Modern Home Lift Installation",
    imageSrc: "/images/projects/_DSC6621.jpg",
    imageAlt: "Modern residential lift project in Dubai Hills",
    href: "/projects/modern-home-lift-installation",
  },
  {
    index: "03",
    title: "Premium Villa Elevator",
    imageSrc: "/images/projects/_DSC5738.jpg",
    imageAlt: "Premium home elevator project at Dubai Hills",
    href: "/projects/premium-villa-elevator",
  },
  {
    index: "04",
    title: "Contemporary Home Lift",
    imageSrc: "/images/projects/_DSC6628.jpg",
    imageAlt: "Contemporary luxury lift installation project",
    href: "/projects/contemporary-home-lift",
  },
  {
    index: "05",
    title: "Luxury Residential Elevator",
    imageSrc: "/images/projects/_DSC5891.jpg",
    imageAlt: "Luxury residential elevator installation",
    href: "/projects/luxury-residential-elevator",
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

export default function ProjectsSection({
  data,
}: ProjectsSectionProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const heading = data?.heading ?? "Projects";

  const description =
    data?.description ??
    "Discover our premium home lift projects, designed for smooth mobility, modern elegance, and everyday comfort.";

  const buttonText = data?.buttonText ?? "Get a free quote";

  const buttonHref = data?.buttonHref ?? "/quote";

  const projects = data?.projects ?? PROJECTS_DEFAULT;

  // AUTO SLIDE
  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const interval = setInterval(() => {
      const nextSlide =
        activeSlide === projects.length - 1
          ? 0
          : activeSlide + 1;

      setActiveSlide(nextSlide);

      const card = track.children[nextSlide] as HTMLElement;

      if (card) {
        track.scrollTo({
          left: card.offsetLeft - 40,
          behavior: "smooth",
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeSlide, projects.length]);

  const handleDotClick = (index: number) => {
    setActiveSlide(index);

    const track = trackRef.current;

    if (!track) return;

    const card = track.children[index] as HTMLElement;

    if (card) {
      track.scrollTo({
        left: card.offsetLeft - 40,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const track = trackRef.current;

    if (!track) return;

    const scrollLeft = track.scrollLeft;

    const cardWidth =
      (track.children[0] as HTMLElement)?.offsetWidth ?? 0;

    const gap = 24;

    const index = Math.round(
      scrollLeft / (cardWidth + gap)
    );

    setActiveSlide(
      Math.min(index, projects.length - 1)
    );
  };

  return (
    <section id="projects" className={styles.wrapper}>
      {/* Top row */}
      <div className={styles.topRow}>
        <div className={styles.topLeft}>
          <h2 className={styles.heading}>{heading}</h2>

          <span className={styles.line} />
        </div>

        <div className={styles.bottomPart}>
          <p className={styles.description}>
            {description}
          </p>

          <a
            href={buttonHref}
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

            <span className={styles.arrowCircle}>
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>

      {/* Carousel */}
      <div
        className={styles.track}
        ref={trackRef}
        onScroll={handleScroll}
      >
        {projects.map((project) => (
          <a
            key={project.index}
            href={project.href}
            className={styles.card}
          >
            <div className={styles.imageBox}>
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
                className={styles.image}
              />
            </div>

            <p className={styles.cardLabel}>
              <span className={styles.cardIndex}>
                {project.index} -
              </span>{" "}
              {project.title}
            </p>
          </a>
        ))}
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {projects.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              activeSlide === index
                ? styles.dotActive
                : ""
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}