"use client";

import styles from "./CtaBanner.module.css";

interface CtaBannerProps {
    data?: {
        text?: string;
        buttonText?: string;
        buttonHref?: string;
    };
}

export default function CtaBanner({ data }: CtaBannerProps) {
    const text       = data?.text       ?? "We create elevated living experiences through intelligent home lift solutions, blending precision engineering with refined design. From compact residences to luxury villas, every lift is crafted to deliver seamless mobility, enhanced comfort, and timeless sophistication.";
    const buttonText = data?.buttonText ?? "Book Free Site Visit";
    const buttonHref = data?.buttonHref ?? "/contact";

    return (
        <section className={styles.wrapper}>
            <div className={styles.inner}>

                <p className={styles.text}>{text}</p>

                <a href={buttonHref} className={styles.ctaBtn}>
                    <span className={styles.ctaText}>{buttonText}</span>
                    <span className={styles.ctaArrow}>↗</span>
                </a>

            </div>
        </section>
    );
}