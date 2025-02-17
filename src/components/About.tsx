import { motion } from "framer-motion";
import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      {/* Background Image with Overlay */}
      <div className="about-background">
        <div className="about-overlay"></div>
      </div>

      {/* Content */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="about-title">Elevate your Brand with Creative Edge</h2>
        <p className="about-description">
          Creative Edge is a dynamic advertising and marketing agency based in
          India, specializing in innovative branding, digital marketing, and
          social media management. We offer tailored strategies to elevate your
          brand presence, from creative ad campaigns to targeted online
          marketing. Our expertise spans multiple industries, ensuring impactful
          results for your business. We combine creativity and data-driven
          solutions to help you connect with your audience and achieve your
          growth goals.
        </p>
        {/* <div className="about-stats">
          <div className="stat-item">
            <h3>10+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-item">
            <h3>200+</h3>
            <p>Happy Clients</p>
          </div>
        </div> */}
      </motion.div>
    </section>
  );
}
