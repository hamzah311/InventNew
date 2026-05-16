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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeadline((prev) =>
                prev === HEADLINES.length - 1 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.wrapper}>
            {/* LEFT */}
            <div className={styles.left}>
                <h2
                    key={currentHeadline}
                    className={styles.experienceHeading}
                >
                    {HEADLINES[currentHeadline]}
                </h2>
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
                            <span className={styles.statLabel}>
                                {stat.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;