"use client";

import styles from "./AboutSection.module.css";

const ABOUT_DEFAULT = {
    heading: "About Invent",
    description:
        "Welcome to Invent, where innovation meets refined living. We design intelligent home lift solutions that combine advanced engineering with elegant aesthetics. Our approach focuses on creating seamless mobility experiences that integrate effortlessly into modern homes.",
    buttonText: "Get a free quote",
    buttonHref: "/quote",
    imageSrc: "/images/about.jpg",
    imageAlt: "Invent Elevator interior showcase",
};

interface AboutData {
    heading?: string;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
    imageSrc?: string;
    imageAlt?: string;
}

interface AboutSectionProps {
    data?: AboutData;
}

export default function AboutSection({ data }: AboutSectionProps) {
    const about = {
        ...ABOUT_DEFAULT,
        ...data,
    };

    return (
        <section className={styles.wrapper}>
            <div className={styles.inner}>

                {/* LEFT — Image */}
                <div className={styles.imageBox}>
                    <img
                        src={about.imageSrc}
                        alt={about.imageAlt}
                        className={styles.image}
                    />
                </div>

                {/* RIGHT — Content */}
                <div className={styles.content}>
                    <h2 className={styles.heading}>{about.heading}</h2>
                    <p className={styles.description}>{about.description}</p>

                    <a href={about.buttonHref} className={styles.ctaBtn}>
                        <span className={styles.ctaText}>{about.buttonText}</span>
                        <span className={styles.ctaArrow}>↗</span>
                    </a>
                </div>

            </div>
        </section>
    );
}