import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero-container" id="hero">
      <div className="hero-background" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">
          <span className="hero-highlight">UNLEASH</span> YOUR
          <br />
          BRAND'S POTENTIAL
        </h1>
        <AnimatedButton text="Get Started" />
      </motion.div>
    </section>
  );
}
