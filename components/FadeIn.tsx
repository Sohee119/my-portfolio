"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

export function FadeIn({ children, className = "", delayMs = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const checkVisibility = () => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight + 200 && rect.bottom > -200) {
        setVisible(true);
        return true;
      }
      return false;
    };

    if (checkVisibility()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "150px 0px 150px 0px" }
    );

    observer.observe(element);

    const handleForceShow = () => {
      setVisible(true);
      observer.disconnect();
    };

    window.addEventListener("hashchange", handleForceShow, { passive: true });
    window.addEventListener("scroll", checkVisibility, { passive: true });

    const timer = setTimeout(checkVisibility, 200);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
      window.removeEventListener("hashchange", handleForceShow);
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}