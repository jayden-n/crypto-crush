/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { BsFillCloudyFill, BsStarFill } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";

// wraps the entire theme toggle functionality
const ToggleWrapper = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    // container div with dynamic classes based on the theme
    <div
      className={`flex items-center justify-center transition-colors ${
        theme === "dark" ? "dark" : "light"
      }`}
    >
      <DarkThemeToggle mode={theme} setTheme={setTheme} />
    </div>
  );
};

const DarkThemeToggle = React.memo(function DarkThemeToggle({
  mode,
  setTheme,
}) {
  return (
    <button
      onClick={() => setTheme(mode === "dark" ? "light" : "dark")}
      className={`relative flex w-24 rounded-full bg-gradient-to-b p-2 shadow-lg ${
        mode === "light"
          ? "justify-end from-blue-500 to-sky-300"
          : "justify-start from-indigo-600 to-indigo-400"
      }`}
    >
      <Thumb theme={mode} />
      {mode === "light" && <Clouds />}
      {mode === "dark" && <Stars />}
    </button>
  );
});

const Thumb = React.memo(function Thumb({ theme }) {
  return (
    <motion.div
      layout
      transition={{
        duration: 0.5,
        type: "spring",
      }}
      className="relative h-8 w-8 overflow-hidden rounded-full shadow-lg"
    >
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-slate-100"
            : "animate-pulse rounded-full bg-gradient-to-tr from-amber-300 to-yellow-500"
        }`}
      />
      {theme === "light" && <SunCenter />}
      {theme === "dark" && <MoonSpots />}
    </motion.div>
  );
});

// sub-components for stars, clouds, sun center, and moon spots
const SunCenter = React.memo(function SunCenter() {
  return <div className="absolute inset-1.5 rounded-full bg-amber-300" />;
});

const MoonSpots = React.memo(function MoonSpots() {
  return (
    <>
      <motion.div
        initial={{ x: -4, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.35 }}
        className="absolute bottom-1 right-2.5 h-3 w-3 rounded-full bg-slate-300"
      />
      <motion.div
        initial={{ x: -4, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.35 }}
        className="absolute bottom-4 left-1 h-3 w-3 rounded-full bg-slate-300"
      />
      <motion.div
        initial={{ x: -4, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.35 }}
        className="absolute right-2 top-2 h-2 w-2 rounded-full bg-slate-300"
      />
    </>
  );
});

const Stars = React.memo(function Stars() {
  return (
    <>
      <motion.span
        animate={{
          scale: [0.75, 1, 0.75],
          opacity: [0.75, 1, 0.75],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeIn",
        }}
        className="absolute right-10 top-2 text-xs text-slate-300"
      >
        <BsStarFill />
      </motion.span>
      <motion.span
        animate={{
          scale: [1, 0.75, 1],
          opacity: [0.5, 0.25, 0.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "easeIn",
        }}
        style={{ rotate: "-45deg" }}
        className="absolute right-4 top-3 text-lg text-slate-300"
      >
        <BsStarFill />
      </motion.span>
      <motion.span
        animate={{
          scale: [1, 0.5, 1],
          opacity: [1, 0.5, 1],
        }}
        style={{ rotate: "45deg" }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "easeIn",
        }}
        className="absolute right-8 top-8 text-slate-300"
      >
        <BsStarFill />
      </motion.span>
    </>
  );
});

const Clouds = React.memo(function Clouds() {
  return (
    <>
      <motion.span
        animate={{ x: [-20, -15, -10, -5, 0], opacity: [0, 1, 0.75, 1, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 0.25,
        }}
        className="absolute left-10 top-1 text-xs text-white"
      >
        <BsFillCloudyFill />
      </motion.span>
      <motion.span
        animate={{ x: [-10, 0, 10, 20, 30], opacity: [0, 1, 0.75, 1, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          delay: 0.5,
        }}
        className="absolute left-4 top-4 text-lg text-white"
      >
        <BsFillCloudyFill />
      </motion.span>
      <motion.span
        animate={{ x: [-7, 0, 7, 14, 21], opacity: [0, 1, 0.75, 1, 0] }}
        transition={{
          duration: 12.5,
          repeat: Infinity,
        }}
        className="absolute left-9 top-8 text-white"
      >
        <BsFillCloudyFill />
      </motion.span>
      <motion.span
        animate={{ x: [-15, 0, 15, 30, 45], opacity: [0, 1, 0.75, 1, 0] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          delay: 0.75,
        }}
        className="absolute left-14 top-4 text-xs text-white"
      >
        <BsFillCloudyFill />
      </motion.span>
    </>
  );
});

export default ToggleWrapper;
