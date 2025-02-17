import { motion } from "framer-motion";
import "../styles/partners.css";
import dgcPartner from "../assets/images/dgc_partner.webp";
import bohemianPartner from "../assets/images/bohemian_partner.webp";

const partners: string[] = [dgcPartner, bohemianPartner];

export default function Partners() {
  return (
    <section id="partners" className="partners-section">
      <div className="partners-container">
        <h3 className="partners-title">Trusted By</h3>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <motion.img
              key={index}
              src={partner}
              alt="Partner"
              className="partner-logo"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
