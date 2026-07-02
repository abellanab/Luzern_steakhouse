import { cn } from "@/lib/utils";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useMemo, useRef, type ElementType, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const DISTANCE = 44;

const directionOffset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: DISTANCE },
  down: { y: -DISTANCE },
  left: { x: DISTANCE },
  right: { x: -DISTANCE },
  none: {},
};

interface RevealProps {
  children: ReactNode;
  /** Direction the element travels FROM as it settles into place. */
  from?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
  /** Fraction of the element that must be visible before it reveals. */
  amount?: number;
}

/**
 * Scroll-triggered reveal with a soft settle + blur-in, tuned for the
 * warm, unhurried feel of the Luzern brand. Fires once, respects
 * prefers-reduced-motion.
 */
export function Reveal({
  children,
  from = "up",
  delay = 0,
  duration = 0.75,
  className,
  as = "div",
  amount = 0.3,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = useMemo(() => motion(as as ElementType), [as]);

  if (reduce) {
    const Tag = as as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  const offset = directionOffset[from];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x ?? 0,
      y: offset.y ?? 0,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </MotionTag>
  );
}

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Total vertical drift in px across the element's scroll journey. */
  distance?: number;
  as?: ElementType;
}

/**
 * Drifts its content vertically as the section scrolls through the
 * viewport — a subtle depth cue for hero and feature imagery.
 */
export function Parallax({
  children,
  className,
  distance = 60,
  as = "div",
}: ParallaxProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const MotionTag = useMemo(() => motion(as as ElementType), [as]);

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={reduce ? undefined : { y }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Wraps a group so its <Reveal> children can share a stagger cadence via
 * the `index` prop pattern. Kept intentionally thin — callers pass
 * per-item delays for full control.
 */
export function staggerDelay(index: number, step = 0.09, base = 0) {
  return base + index * step;
}

export { cn };
