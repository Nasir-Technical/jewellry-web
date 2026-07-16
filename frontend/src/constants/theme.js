export const theme = {
  colors: {
    gold: {
      50: "#fdfaf0",
      100: "#f9f1d5",
      200: "#f2e1aa",
      300: "#e8c875",
      400: "#dfb14b",
      500: "#d4af37",
      600: "#c5a028",
      700: "#a58022",
      800: "#886921",
      900: "#72581f",
      950: "#42300f",
    },
    matteBlack: "#050505",
    luxuryGray: "#1a1a1a",
    background: "#050505",
    foreground: "#ffffff",
  },
  fonts: {
    serif: "var(--font-serif)",
    cormorant: "var(--font-cormorant)",
    sans: "var(--font-sans)",
  },
  spacing: {
    section: "8rem",
    container: "1.5rem",
  },
  animation: {
    duration: {
      fast: 0.2,
      normal: 0.3,
      slow: 0.5,
      cinematic: 1.2,
    },
    ease: {
      luxury: [0.33, 1, 0.68, 1],
      smooth: [0.76, 0, 0.24, 1],
    },
  },
  effects: {
    goldGlow: "0 0 15px rgba(212, 175, 55, 0.3)",
    luxuryShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
    glassBlur: "10px",
  },
};

export const buttonVariants = {
  primary: "bg-gold-600 text-black hover:bg-gold-500",
  secondary: "border border-gold-500/30 text-gold-500 hover:bg-gold-500/10",
  ghost: "text-gold-500 hover:text-gold-400",
  outline: "border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black",
};

export const badgeVariants = {
  default: "bg-gold-900/40 text-gold-400",
  success: "bg-green-900/40 text-green-400",
  warning: "bg-gold-900/40 text-gold-400",
  info: "bg-blue-900/40 text-blue-400",
};
