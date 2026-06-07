import { theme } from "@/constants/theme";

const { duration, ease } = theme.animation;

export const transitions = {
  fast: { duration: duration.fast, ease: ease.luxury },
  normal: { duration: duration.normal, ease: ease.luxury },
  slow: { duration: duration.slow, ease: ease.luxury },
  cinematic: { duration: duration.cinematic, ease: ease.luxury },
  spring: { type: "spring", damping: 25, stiffness: 200 },
  smoothExit: { duration: duration.slow, ease: ease.smooth },
};

export const viewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -80px 0px",
};
