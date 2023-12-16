import { motion } from "framer-motion";

export const BarLoader = () => {
  const variants = {
    initial: {
      scaleY: 0.5,
      opacity: 0,
    },
    animate: {
      scaleY: 1.25,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.58,
        ease: "circIn",
      },
    },
  };

  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div variants={variants} className="h-12 w-2 bg-button" />
      <motion.div variants={variants} className="h-12 w-2 bg-button" />
      <motion.div variants={variants} className="h-12 w-2 bg-button" />
      <motion.div variants={variants} className="h-12 w-2 bg-button" />
      <motion.div variants={variants} className="h-12 w-2 bg-button" />
    </motion.div>
  );
};
