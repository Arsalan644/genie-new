// ...existing code...
"use client";
import React, { useEffect, useRef, useState } from "react";
import "./AnimationList.css";
import { AnimatedList, AnimatedListItem } from "./magicui/animated-list";

/**
 * Shows the AnimatedList only after the wrapper enters the viewport.
 * Uses a small IntersectionObserver hook implemented inline.
 */
const defaultItems = [
  "Loading...",
  "No items found",
  "Item 1",
  "Item 2",
  "Item 3",
];

const AnimationList = ({
  items = defaultItems,
  delay = 1000,
  className = "",
}) => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // If already in view (e.g. server-side rendering hydration), skip observer
    if (inView) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect(); // only trigger once
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [inView]);
  return (
    <div ref={containerRef} className={`mt-16 mx-auto relative ${className}`}>
      {/* added heading */}
      <div className="animation-list-heading-container">
        <h1 className="animation-list-heading">Wave goodbye to</h1>
      </div>
      
      {/* reserve layout space so layout doesn't jump */}
      {!inView && (
        <div aria-hidden className="animation-list" style={{ minHeight: 120 }}>
          {items.slice(0, 1).map((item, i) => (
            <div key={i} className="animation-list-item">
              {item}
            </div>
          ))}
        </div>
      )}

      {inView && (
        <AnimatedList delay={delay} className={`animation-list ${className}`}>
          {items.map((item, i) => (
            <div key={i} className="animation-list-item">
              {item}
            </div>
          ))}
        </AnimatedList>
      )}
    </div>
  );
};

export default AnimationList;
export { AnimatedList, AnimatedListItem };