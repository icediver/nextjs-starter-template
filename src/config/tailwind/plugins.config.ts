import plugin from "tailwindcss/plugin";

export const plugins = [
  // require("@tailwindcss/forms"),
  // require("@tailwindcss/aspect-ratio"),
  /* eslint-disable */
  plugin(({ addComponents, theme, addUtilities, addBase }) => {
    addComponents({}),
      addUtilities({
        ".text-shadow": {
          textShadow: "1px 1px rgba(0, 0, 0, 0.4)",
        },

        ".outline-border-none": {
          outline: "none",
          border: "none",
        },

        ".flex-center-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },

        ".text-gradient": {
          background: "linear-gradient(90deg, #c731ef, #fe5f0c)",
          "-webkit-background-clip": "text",
          color: "transparent",
          "-webkit-text-fill-color": "transparent",
        },
      });
  }),
];
