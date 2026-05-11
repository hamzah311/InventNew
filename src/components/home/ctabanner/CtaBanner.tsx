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
  const text =
    data?.text ??
    "We create elevated living experiences through intelligent home lift solutions, combining precision engineering, seamless mobility, and refined design for modern residences and luxury villas.";
  const buttonText = data?.buttonText ?? "Book Free Site Visit";
  const buttonHref = data?.buttonHref ?? "#contact-banner";

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <p className={styles.text}>{text}</p>

        {/* <a href={buttonHref} className={styles.ctaBtn}>
                    <span className={styles.ctaText}>{buttonText}</span>
                    <span className={styles.ctaArrow}>↗</span>
                </a> */}
        <a
          href="#"
          className={styles.ctaBtn}
          onClick={(e) => {
            e.preventDefault();

            document.getElementById("contact-banner")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <span className={styles.ctaText}>{buttonText}</span>

          <span className={styles.ctaArrow}>↗</span>
        </a>
      </div>
    </section>
  );
}
