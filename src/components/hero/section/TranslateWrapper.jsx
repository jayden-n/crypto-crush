/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2 "
    >
      {children}
    </motion.div>
  );
};
