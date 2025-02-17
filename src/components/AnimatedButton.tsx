import { motion } from "framer-motion";
import "../styles/animatedButton.css";

interface AnimatedButtonProps {
  text: string;
}

export default function AnimatedButton({ text }: AnimatedButtonProps) {
  return (
    <motion.button
      className="animated-button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="button-text">{text}</span>
      <motion.div
        className="button-overlay"
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.4 }}
      />
    </motion.button>
  );
}
