/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // https://tailwindcss.com/docs/dark-mode
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        thirdary: "var(--color-bg-thirdary)",
        button: "var(--color-bg-button)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        thirdary: "var(--color-text-thirdary)",
        secondary: "var(--color-text-secondary)",
        btnText: "var(--color-bg-secondary)",
        main: "var(--color-text-main)",
      },
      borderColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        input: "var(--color-bg-input)",
        accent: "var(--color-text-accent)",
        main: "var(--color-border-button)",
      },
    },
  },

  plugins: [],
};
