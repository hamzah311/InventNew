// "use client";

// import styles from "./HeroBanner.module.css";

// interface HeroBannerProps {
//   imageSrc?: string;
//   imageAlt?: string;
//   title?: React.ReactNode;
//   subtitle?: string;
// }

// export default function HeroBanner({
//   imageSrc = "/images/hero-banner.jpg",
//   imageAlt = "Smart Lifts for Smarter Buildings",
//   title,
//   subtitle = "Smart lift solutions for business environments",
// }: HeroBannerProps) {
//   return (
//     <div className={styles.wrapper}>
//       {/* Background image */}
//       <img src={imageSrc} alt={imageAlt} className={styles.bgImage} />

//       {/* Dark overlay */}
//       <div className={styles.overlay} />

//       {/* Bottom-left content */}
//       <div className={styles.content}>
//         <h1 className={styles.title}>
//           {title ?? (
//             <>
//               Smart <span className={styles.gold}>Lifts</span> for Smarter
//               <br />
//               <span className={styles.gold}>Buildings</span>
//             </>
//           )}
//         </h1>
//         <p className={styles.subtitle}>{subtitle}</p>
//         <button className={styles.ctaBtn}>
//           <span className={styles.ctaText}>Get a free quote</span>
//           <span className={styles.ctaArrow}>↗</span>
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import styles from "./HeroBanner.module.css";

interface HeroBannerProps {
  videoSrc?: string;
  videoPoster?: string;
  title?: React.ReactNode;
  subtitle?: string;
  data: any;
}

export default function HeroBanner({
  videoSrc = "/video.mp4",
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

      {/* NEW FLEX CONTAINER */}
      <div className={styles.inner}>

        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            {title ?? (
              <>
                {data.hero.Heading}{" "}
                <span className={styles.gold}>
                  {data.hero.highlightedText}
                </span>
              </>
            )}
          </h1>

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
          <button className={styles.ctaBtn}>
            <span className={styles.ctaText}>
              {data.hero.buttonText}
            </span>
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
            <h3>Get in touch</h3>

            {/* Hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Hero Form Submission" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thanks! We’ll contact you soon."
            />

            {/* Fields */}
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <select name="service" required>

                <option value="">Select Service</option>

                <option value="Home Lift">Lift 1</option>

                <option value="Glass Elevator">Lift 2</option>

                <option value="Maintenance">Lift 3</option>

                <option value="Consultation">Lift 4</option>

            </select>
            <textarea name="message" placeholder="Your Message" rows={4} required />

            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
}