import tailwindStandartColors from "tailwindcss/colors";

export const colors = {
  ...tailwindStandartColors,
  black: "#01010D",
  "black-inactive": "#C2C6CF",
  primary: "#7A57E2",

  warning: "#F1D399",
};
export const theme = {
  colors,
  extend: {
    keyframes: {
      animationOpacity: {
        from: { opacity: "0.2" },
        to: { opacity: "1" },
      },
      scaleIn: {
        "0%": {
          opacity: "0",
          transform: "scale(0.9)",
        },
        "50%": {
          opacity: "0.3",
        },
        "100%": {
          opacity: "1",
          transform: "scale(1)",
        },
      },
    },
    animation: {
      opacity: "animationOpacity 0.7s ease-in-out",
      scaleIn: "scaleIn .35s ease-in-out",
    },
  },
};
