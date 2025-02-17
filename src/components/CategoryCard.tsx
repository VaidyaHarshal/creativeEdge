import { motion } from "framer-motion";
import "../styles/categoryCard.css";

interface ServiceItem {
  title?: string;
  description: string;
}

interface CategoryCardProps {
  category: string;
  image: string;
  services: ServiceItem[];
}

export default function CategoryCard({
  category,
  image,
  services,
}: CategoryCardProps) {
  return (
    <motion.div
      className="category-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="category-image-container">
        <img
          src={image}
          alt={category}
          className="category-image"
          loading="lazy"
        />
      </div>

      <div className="category-content">
        <h2 className="category-title">{category}</h2>

        <div className="services-list">
          {services.map((service, index) => (
            <div key={`${category}-${index}`} className="service-item">
              {service.title && (
                <h3 className="service-title">{service.title}</h3>
              )}
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
