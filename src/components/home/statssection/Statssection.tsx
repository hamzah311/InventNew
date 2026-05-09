"use client";

import styles from "./Statssection.module.css";

const STATS = [
    { number: "100+", label: "Projects Delivered" },
    { number: "500+", label: "Design Variations" },
    { number: "10+", label: "Years of Industry Expertise" },
    { number: "15+", label: "Trusted Suppliers & Partners" },
];

const StatsSection = () => {
    return (
        <section className={styles.statsSection}>
            <div className={styles.statsGrid}>
                {STATS.map((stat, index) => (
                    <div key={index} className={styles.statCard}>
                        <span className={styles.statNumber}>{stat.number}</span>
                        <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;