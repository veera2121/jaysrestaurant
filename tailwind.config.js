module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      keyframes: {
        slideX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        slideX: "slideX 18s linear infinite",
      },
    },
  },
  plugins: [],
};
