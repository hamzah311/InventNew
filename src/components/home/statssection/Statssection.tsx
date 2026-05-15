// "use client";

// import styles from "./Statssection.module.css";

// const STATS = [
//     { number: "100+", label: "Projects Delivered" },
//     { number: "500+", label: "Design Variations" },
//     { number: "10+", label: "Years of Industry Expertise" },
//     { number: "15+", label: "Trusted Suppliers & Partners" },
// ];

// const StatsSection = () => {
//     return (
//         <section className={styles.statsSection}>
//             <div className={styles.statsGrid}>
//                 {STATS.map((stat, index) => (
//                     <div key={index} className={styles.statCard}>
//                         <span className={styles.statNumber}>{stat.number}</span>
//                         <span className={styles.statLabel}>{stat.label}</span>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default StatsSection;
// "use client";

// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";
// import styles from "./Statssection.module.css";

// const STATS = [
//   { number: 100, suffix: "+", label: "Villa Elevator delivered" },
//   { number: 500, suffix: "+", label: "Design Variations" },
//   { number: 10, suffix: "+", label: "Years of Industry Expertise" },
//   { number: 15, suffix: "+", label: "Trusted Suppliers & Partners" },
// ];

// const StatsSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });

//   return (
//     <section className={styles.statsSection} ref={ref}>
//       <div className={styles.statsGrid}>
//         {STATS.map((stat, index) => (
//           <div key={index} className={styles.statCard}>
//             <span className={styles.statNumber}>
//               {inView && (
//                 <CountUp
//                   end={stat.number}
//                   duration={2}
//                   suffix={stat.suffix}
//                 />
//               )}
//             </span>

//             <span className={styles.statLabel}>
//               {stat.label}
//             </span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default StatsSection;

"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styles from "./Statssection.module.css";

const STATS = [
    { number: 100,  suffix: "+", label: "Villa Elevators Delivered" },
    { number: 500,  suffix: "+", label: "Design Variations" },
    { number: 15,   suffix: "+", label: "Trusted Suppliers & Partners" },
    { number: 1000, suffix: "+", label: "Satisfied Customers" },
];

const EXPERIENCE = {
    years: 10,
    suffix: "+",
    tagline: "Years of Experience",
    description:
        "Invent Elevator delivers premium home lifts with advanced technology.",
};

const StatsSection = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section className={styles.wrapper} ref={ref}>

            {/* LEFT — experience text */}
            <div className={styles.left}>
                <h2 className={styles.experienceHeading}>
                    {inView && (
                        <CountUp end={EXPERIENCE.years} duration={2} suffix={EXPERIENCE.suffix} />
                    )}
                    {" "}{EXPERIENCE.tagline}
                </h2>
                <p className={styles.experienceDesc}>{EXPERIENCE.description}</p>
            </div>

            {/* RIGHT — stat cards */}
            <div className={styles.statsGrid}>
                {STATS.map((stat, index) => (
                    <div key={index} className={styles.statCard}>
                        <div className={styles.statTop}>
                            <span className={styles.statNumber}>
                                {inView && (
                                    <CountUp end={stat.number} duration={2} suffix={stat.suffix} />
                                )}
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