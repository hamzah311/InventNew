"use client";

import styles from "./SeriesSection.module.css";

const SERIES_DEFAULT = [
    {
        name: "Heritage",
        description: "Classic enclosed lifts for large villas",
        href: "/series/heritage",
        imageSrc: "/images/heritage-1.png",
    },
    {
        name: "Horizon",
        description: "Minimal modern lifts for contemporary homes",
        href: "/series/horizon",
        imageSrc: "/images/horizon-1.png",
    },
    {
        name: "Aero / Slim",
        description: "Space-saving lifts for compact layouts",
        href: "/series/aero-slim",
        imageSrc: "/images/aero-slim-1.png",
    },
];

interface SeriesItem {
    name: string;
    description: string;
    href: string;
    imageSrc: string;
}

interface SeriesSectionProps {
    data?: {
        heading?: string;
        series?: SeriesItem[];
    };
}

export default function SeriesSection({ data }: SeriesSectionProps) {
    const heading = data?.heading ?? "Series";
    const series = data?.series ?? SERIES_DEFAULT;

    return (
        <section className={styles.wrapper}>

            {/* Section heading with lines */}
            <div className={styles.headingRow}>
                <span className={styles.line} />
                <h2 className={styles.heading}>{heading}</h2>
                <span className={styles.line} />
            </div>

            {/* Cards grid */}
            <div className={styles.grid}>
                {series.map((item) => (
                    <a key={item.name} href={item.href} className={styles.card}>

                        {/* Background image */}
                        <img
                            src={item.imageSrc}
                            alt={item.name}
                            className={styles.cardImage}
                        />

                        {/* Dark overlay — deepens on hover */}
                        <div className={styles.overlay} />

                        {/* Default state: name at bottom */}
                        <span className={styles.cardName}>{item.name}</span>

                        {/* Hover state: centred content */}
                        <div className={styles.hoverContent}>
                            <h3 className={styles.hoverName}>{item.name}</h3>
                            <p className={styles.hoverDesc}>{item.description}</p>
                            <span className={styles.knowMoreBtn}>Know More</span>
                        </div>

                    </a>
                ))}
            </div>

        </section>
    );
}