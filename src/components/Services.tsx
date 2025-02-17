import { motion } from "framer-motion";
import CategoryCard from "../components/CategoryCard";
import { serviceCategories } from "../data/services";
import "../styles/services.css";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <h2 className="services-heading">
        Innovative Services to Elevate Your Brand
      </h2>
      <motion.div
        className="services-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {serviceCategories.map((category, index) => (
          <CategoryCard key={`${category.category}-${index}`} {...category} />
        ))}
      </motion.div>
    </section>
  );
}
