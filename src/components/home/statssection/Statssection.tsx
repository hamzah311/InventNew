"use client";

import { useEffect, useState } from "react";
import styles from "./Statssection.module.css";

const STATS = [
  { number: 100, suffix: "+", label: "Villa Elevators Delivered" },
  { number: 500, suffix: "+", label: "Design Variations" },
  { number: 15, suffix: "+", label: "Trusted Suppliers & Partners" },
  { number: 1000, suffix: "+", label: "Satisfied Customers" },
];

const HEADLINES = [
  "🏆 10+ Years of Experience",
  "⚡ Fast Delivery across the UAE",
  "🔧 Fast & Hassle-Free Installation",
];

const StatsSection = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out first, then swap text, then fade back in
      setVisible(false);
      setTimeout(() => {
        setCurrentHeadline((prev) =>
          prev === HEADLINES.length - 1 ? 0 : prev + 1
        );
        setVisible(true);
      }, 300); // matches CSS transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.wrapper}>
      {/* LEFT */}
      <div className={styles.left}>
        {/* No key prop — element stays mounted, only opacity changes */}
        <h2
          className={styles.experienceHeading}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {HEADLINES[currentHeadline]}
        </h2>
        <p className={styles.headlineSubtext}>
          Premium villa lift solutions crafted for modern UAE homes.
        </p>
      </div>

      {/* RIGHT */}
      <div className={styles.statsGrid}>
        {STATS.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.statTop}>
              <span className={styles.statNumber}>
                {stat.number}
                {stat.suffix}
              </span>
            </div>

            <div className={styles.statBottom}>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;