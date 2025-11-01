"use client";

import * as React from "react";
import {
  HTMLMotionProps,
  MotionValue,
  Variants,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  Transition,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                               Context Setup                                */
/* -------------------------------------------------------------------------- */
interface ContainerScrollContextValue {
  scrollYProgress: MotionValue<number>;
}

const ContainerScrollContext =
  React.createContext<ContainerScrollContextValue | undefined>(undefined);

function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext);
  if (!context) {
    throw new Error(
      "useContainerScrollContext must be used within a <ContainerScroll /> component"
    );
  }
  return context;
}

/* -------------------------------------------------------------------------- */
/*                            Shared Animation Config                         */
/* -------------------------------------------------------------------------- */
const SPRING_TRANSITION_CONFIG: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 16,
  mass: 0.75,
  restDelta: 0.005,
};

const variants: Variants = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1 },
};

/* -------------------------------------------------------------------------- */
/*                            ContainerScroll Wrapper                         */
/* -------------------------------------------------------------------------- */
export const ContainerScroll: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start center", "end end"],
  });

  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <div
        ref={scrollRef}
        className={cn("relative min-h-svh w-full", className)}
        {...props}
      >
        {children}
      </div>
    </ContainerScrollContext.Provider>
  );
};
ContainerScroll.displayName = "ContainerScroll";

/* -------------------------------------------------------------------------- */
/*                           ContainerAnimated Motion                         */
/* -------------------------------------------------------------------------- */
interface ContainerAnimatedProps extends HTMLMotionProps<"div"> {
  inputRange?: number[];
  outputRange?: number[];
}

export const ContainerAnimated = React.forwardRef<
  HTMLDivElement,
  ContainerAnimatedProps
>(
  (
    {
      className,
      transition,
      style,
      inputRange = [0.2, 0.8],
      outputRange = [80, 0],
      ...props
    },
    ref
  ) => {
    const { scrollYProgress } = useContainerScrollContext();
    const y = useTransform(scrollYProgress, inputRange, outputRange);

    return (
      <motion.div
        ref={ref}
        className={cn("", className)}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ y, ...style }}
        transition={{
          ...SPRING_TRANSITION_CONFIG,
          ...(transition as Transition),
        }}
        {...props}
      />
    );
  }
);
ContainerAnimated.displayName = "ContainerAnimated";

/* -------------------------------------------------------------------------- */
/*                              ContainerSticky                               */
/* -------------------------------------------------------------------------- */
export const ContainerSticky = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("sticky left-0 top-0 min-h-svh w-full", className)}
    {...props}
  />
));
ContainerSticky.displayName = "ContainerSticky";

/* -------------------------------------------------------------------------- */
/*                                  HeroVideo                                 */
/* -------------------------------------------------------------------------- */
export const HeroVideo = React.forwardRef<
  HTMLVideoElement,
  HTMLMotionProps<"video">
>(({ style, className, ...props }, ref) => {
  const { scrollYProgress } = useContainerScrollContext();
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.7, 1]);

  return (
    <motion.video
      ref={ref}
      className={cn(
        "relative z-10 size-auto max-h-full max-w-full",
        className
      )}
      autoPlay
      muted
      loop
      playsInline
      style={{ scale, ...style }}
      {...props}
    />
  );
});
HeroVideo.displayName = "HeroVideo";

/* -------------------------------------------------------------------------- */
/*                                 HeroButton                                 */
/* -------------------------------------------------------------------------- */
export const HeroButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => (
  <motion.button
    ref={ref}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className={cn(
      "group relative flex w-fit items-center gap-2 rounded-full border bg-gray-950/20 px-5 py-2 font-medium text-white shadow-[0px_4px_24px_#84cc16] transition-colors hover:bg-lime-500/10",
      className
    )}
    {...props}
  >
    {children}
    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  </motion.button>
));
HeroButton.displayName = "HeroButton";

/* -------------------------------------------------------------------------- */
/*                                ContainerInset                              */
/* -------------------------------------------------------------------------- */
interface ContainerInsetProps extends HTMLMotionProps<"div"> {
  insetYRange?: [number, number];
  insetXRange?: [number, number];
  roundednessRange?: [number, number];
}

export const ContainerInset = React.forwardRef<
  HTMLDivElement,
  ContainerInsetProps
>(
  (
    {
      className,
      style,
      insetYRange = [45, 0],
      insetXRange = [45, 0],
      roundednessRange = [1000, 16],
      ...props
    },
    ref
  ) => {
    const { scrollYProgress } = useContainerScrollContext();
    const insetY = useTransform(scrollYProgress, [0, 0.8], insetYRange);
    const insetX = useTransform(scrollYProgress, [0, 0.8], insetXRange);
    const roundedness = useTransform(scrollYProgress, [0, 1], roundednessRange);

    const clipPath = useMotionTemplate`inset(${insetY}% ${insetX}% ${insetY}% ${insetX}% round ${roundedness}px)`;

    return (
      <motion.div
        ref={ref}
        className={cn("relative pointer-events-none overflow-hidden", className)}
        style={{ clipPath, ...style }}
        {...props}
      />
    );
  }
);
ContainerInset.displayName = "ContainerInset";
