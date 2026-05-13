"use client";

import { useState, useEffect } from "react";
import styles from "./HeroBanner.module.css";

const CYCLING_WORDS = [
  "affordable",
  "elegant",
  "silent",
  "premium",
  "modern",
  "reliable",
];

interface CyclingTitleProps {
  staticLine?: string;
  words?: string[];
}

function CyclingTitle({
  staticLine = "Our Elevators are",
  words = CYCLING_WORDS,
}: CyclingTitleProps) {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimating(false);
      }, 400);
    }, 2800);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <h1 className={styles.cyclingTitle}>
      <span className={styles.staticLine}>{staticLine}</span>{" "}
      <span
        className={`${styles.cyclingWord} ${
          animating ? styles.wordExit : styles.wordEnter
        }`}
      >
        {words[index]}
      </span>
    </h1>
  );
}

interface HeroBannerProps {
  videoSrc?: string;
  videoPoster?: string;
  title?: React.ReactNode;
  subtitle?: string;
  data: any;
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

export default function HeroBanner({
  videoSrc = "/video-1.mp4",
  videoPoster = "",
  title,
  subtitle,
  data,
}: HeroBannerProps) {
  return (
    <div className={styles.wrapper}>
      {/* Background video */}
      <video
        className={styles.bgVideo}
        autoPlay
        muted
        loop
        playsInline
        poster={videoPoster}
        preload="metadata"
      >
        {/* H.264 MP4 required for iOS Safari autoplay */}
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Center content */}
      <div className={styles.inner}>
        <div className={styles.content}>
          {title ?? (
            <CyclingTitle
              staticLine={data.hero.Heading}
              words={data.hero.cyclingWords ?? CYCLING_WORDS}
            />
          )}

          <p className={styles.subtitle}>
            {(subtitle ?? data.hero.subHeading)
              .split("\n")
              .map((line: string, i: number) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
          </p>

          <button
            className={styles.ctaBtn}
            onClick={() => {
              document
                .getElementById("contact-banner")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className={styles.ctaText}>{data.hero.buttonText}</span>
            {/* <span className={styles.ctaArrow}>↗</span> */}
            <span className={styles.arrowCircle}>
              <ArrowIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}