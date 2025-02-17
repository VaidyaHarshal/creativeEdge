import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
const Hero = React.lazy(() => import("./components/Hero"));
const Services = React.lazy(() => import("./components/Services"));
const Partners = React.lazy(() => import("./components/Partners"));
const About = React.lazy(() => import("./components/About"));
const CallToAction = React.lazy(() => import("./components/CallToAction"));
const Footer = React.lazy(() => import("./components/Footer"));
import "./styles/globals.css";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <Navbar />
      <Hero />
      <Services />
      <About />
      <Partners />
      <CallToAction />
      <Footer />
    </>
  );
}
