"use client";

import { useEffect, useRef } from "react";
import styles from "./ReviewSection.module.css";

const REVIEWS_DEFAULT = [
  {
    name: "Arjun Mehta",
    location: "Dubai Hills, UAE",
    rating: 5,
    review:
      "Invent Elevator transformed our villa completely. The installation was seamless, done within 30 days as promised. The lift is whisper-quiet and the cabin finish matches our interiors perfectly.",
    initials: "AM",
  },
  {
    name: "Sarah Al Mansoori",
    location: "Palm Jumeirah, UAE",
    rating: 5,
    review:
      "Exceptional quality and professionalism. From the initial consultation to the final handover, every step was handled with precision. Our glass lift is now the centrepiece of our home.",
    initials: "SA",
  },
  {
    name: "Vikram Nair",
    location: "Jumeirah, UAE",
    rating: 5,
    review:
      "We installed a compact home lift for my elderly parents. The team was incredibly thoughtful about accessibility needs. The operation is smooth and the build quality is outstanding.",
    initials: "VN",
  },
  {
    name: "Layla Hassan",
    location: "Abu Dhabi, UAE",
    rating: 5,
    review:
      "I was impressed by how little structural work was needed. The team completed everything neatly and on schedule. The lift blends beautifully into our duplex villa.",
    initials: "LH",
  },
  {
    name: "Omar Al Farsi",
    location: "Sharjah, UAE",
    rating: 5,
    review:
      "Top-notch German components, impeccable finishing, and a team that genuinely cares about the final result. Would highly recommend Invent Elevator to anyone looking for quality.",
    initials: "OF",
  },
  {
    name: "Priya Sharma",
    location: "Mirdif, UAE",
    rating: 5,
    review:
      "The Heritage series is stunning. Our traditional villa now has a lift that feels completely at home with the architecture. The after-sales support has also been excellent.",
    initials: "PS",
  },
];

interface Review {
  name: string;
  location: string;
  rating: number;
  review: string;
  initials: string;
}

interface ReviewsSectionProps {
  data?: {
    heading?: string;
    subheading?: string;
    reviews?: Review[];
  };
}

export default function ReviewsSection({ data }: ReviewsSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef<number>(0);
  const isResetting = useRef<boolean>(false);

  const heading    = data?.heading    ?? "What Our Clients Say";
  const subheading = data?.subheading ?? "Trusted by homeowners across the UAE";
  const reviews    = data?.reviews    ?? REVIEWS_DEFAULT;

  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const getCardWidth = () => {
      const firstCard = track.children[0] as HTMLElement;
      return firstCard ? firstCard.offsetWidth + 20 : 0;
    };

    // Start from the middle set so we can scroll both directions
    indexRef.current = reviews.length;
    track.scrollLeft = indexRef.current * getCardWidth();

    const interval = setInterval(() => {
      if (isResetting.current) return;

      indexRef.current += 1;
      const cardWidth = getCardWidth();

      track.scrollTo({
        left: indexRef.current * cardWidth,
        behavior: "smooth",
      });

      // Once we've scrolled through the second set, silently jump back to the middle set
      if (indexRef.current >= reviews.length * 2) {
        isResetting.current = true;

        setTimeout(() => {
          // Disable smooth scroll, jump to equivalent position in middle set
          track.style.scrollBehavior = "auto";
          indexRef.current = reviews.length;
          track.scrollLeft = indexRef.current * cardWidth;

          // Re-enable smooth scroll on next frame
          requestAnimationFrame(() => {
            track.style.scrollBehavior = "";
            isResetting.current = false;
          });
        }, 500);
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section id="testimonials" className={styles.wrapper}>

      {/* Heading */}
      <div className={styles.headingBlock}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subheading}>{subheading}</p>
      </div>

      {/* Reviews Track */}
      <div className={styles.track} ref={trackRef}>
        {duplicatedReviews.map((review, index) => (
          <div key={index} className={styles.card}>

            {/* Stars */}
            <div className={styles.stars}>
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} className={styles.star}>★</span>
              ))}
            </div>

            {/* Review */}
            <p className={styles.reviewText}>"{review.review}"</p>

            {/* Author */}
            <div className={styles.author}>
              <div className={styles.avatar}>{review.initials}</div>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{review.name}</span>
                <span className={styles.authorLocation}>{review.location}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}