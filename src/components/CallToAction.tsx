import { motion } from "framer-motion";
import "../styles/callToAction.css";
// import FAQAccordion from "./FaqAccordion";

export default function CallToAction() {
  return (
    <section id="cta" className="cta-section">
      <div className="cta-container">
        {/* Heading */}
        <motion.h2
          className="cta-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let's Elevate Your Brand Together!
        </motion.h2>

        {/* Form */}
        <motion.form
          className="cta-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="How can we help you?"
              rows={4}
              required
            ></textarea>
          </div>

          {/* How Did You Hear About Us? */}
          <div className="form-group">
            <label htmlFor="source">How did you hear about us?</label>
            <select id="source" name="source" required>
              <option className="dropdown-item" value="">
                Select an option
              </option>
              <option className="dropdown-item" value="google">
                Google
              </option>
              <option className="dropdown-item" value="social-media">
                Social Media
              </option>
              <option className="dropdown-item" value="referral">
                Referral
              </option>
              <option className="dropdown-item" value="other">
                Other
              </option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="cta-button">
            Send Message
          </button>

          {/* reCAPTCHA Notice */}
          <p className="cta-notice">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </motion.form>
        {/* <FAQAccordion /> */}
      </div>
    </section>
  );
}
