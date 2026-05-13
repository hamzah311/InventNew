"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroBanner.module.css";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
}

export default function VideoBackground({ src, poster }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // iOS Safari requires these set imperatively
    video.muted = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const attemptPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If autoplay blocked, try once on first user interaction
          const unlock = () => {
            video.play().catch(() => {});
            document.removeEventListener("touchstart", unlock);
            document.removeEventListener("click", unlock);
          };
          document.addEventListener("touchstart", unlock, { once: true });
          document.addEventListener("click", unlock, { once: true });
        });
      }
    };

    if (video.readyState >= 3) {
      attemptPlay();
    } else {
      video.addEventListener("canplaythrough", attemptPlay, { once: true });
    }

    return () => {
      video.removeEventListener("canplaythrough", attemptPlay);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={styles.bgVideo}
      loop
      muted
      playsInline
      poster={poster}
      preload="auto"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}