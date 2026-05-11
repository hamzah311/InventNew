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
"use client";

import CountUp from "react-countup";
import styles from "./Statssection.module.css";

const STATS = [
  { number: 100, suffix: "+", label: "Projects Delivered" },
  { number: 500, suffix: "+", label: "Design Variations" },
  { number: 10, suffix: "+", label: "Years of Industry Expertise" },
  { number: 15, suffix: "+", label: "Trusted Suppliers & Partners" },
];

const StatsSection = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsGrid}>
        {STATS.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <span className={styles.statNumber}>
              <CountUp
                end={stat.number}
                duration={2}
                suffix={stat.suffix}
              />
            </span>

            <span className={styles.statLabel}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;