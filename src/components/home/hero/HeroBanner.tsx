"use client";

import { useState, useEffect } from "react";
import styles from "./HeroBanner.module.css";

// ── Cycling words for the animated title ──────────────────────────────────────
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
      <span className={styles.staticLine}>{staticLine}</span>
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

// ── HeroBanner ────────────────────────────────────────────────────────────────
interface HeroBannerProps {
  videoSrc?: string;
  videoPoster?: string;
  title?: React.ReactNode;
  subtitle?: string;
  data: any;
}

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
        src={videoSrc}
        poster={videoPoster}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Flex container */}
      <div className={styles.inner}>

        {/* LEFT CONTENT */}
        <div className={styles.content}>

          {/* Animated cycling title — replaces the static h1 */}
          {title ?? (
            <CyclingTitle
              staticLine={data.hero.Heading}
              words={
                data.hero.cyclingWords ?? CYCLING_WORDS
              }
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
            <span className={styles.ctaArrow}>↗</span>
          </button>
        </div>

        {/* RIGHT FORM (FormSubmit Integrated) */}
        <div className={styles.formBox}>
          <form
            className={styles.form}
            action="https://formsubmit.co/info@inventelevator.com"
            method="POST"
          >
            <h3>Get a free quote</h3>

            {/* Hidden fields */}
            <input type="hidden" name="_captcha"      value="false" />
            <input type="hidden" name="_subject"      value="New Hero Form Submission" />
            <input type="hidden" name="_template"     value="table" />
            <input type="text"   name="_honey"        style={{ display: "none" }} />
            <input type="hidden" name="_autoresponse" value="Thanks! We'll contact you soon." />

            {/* Fields */}
            <input type="text"  name="name"  placeholder="Your Name"  required />
            <input type="email" name="email" placeholder="Your Email" required />

            <select name="service" required>
              <option value="">Select Service</option>
              <option value="Home Lift">Lift 1</option>
              <option value="Glass Elevator">Lift 2</option>
              <option value="Maintenance">Lift 3</option>
              <option value="Consultation">Lift 4</option>
            </select>

            <textarea name="message" placeholder="Your Message" rows={4} required />

            <p className={styles.formNote}>
              We'll recommend the best lift for your home within 24 hours.
            </p>

            <div className={styles.formActions}>
              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>

              <a
                href="https://wa.me/971523753356"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .15 5.35.15 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.16-3.46-8.43ZM12.07 21.8h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.74.98 1-3.65-.24-.37a9.82 9.82 0 0 1-1.52-5.27c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.99 2.9a9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.43 9.88-9.87 9.88Zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.5-1.76-1.67-2.06-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.48.71.3 1.27.48 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}