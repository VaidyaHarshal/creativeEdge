import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Links Grid */}
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <h4 className="footer-heading">Creative Edge</h4>
            {/* Contact Section */}
            <div className="contact-section">
              <h4 className="contact-heading">Contact Us</h4>

              <div className="contact-details">
                <p>
                  <strong>Address:</strong> Mumbai, Maharashtra, India
                </p>
                <p className="marketing-email">
                  <strong>Email:</strong> marketing@creativeedge.com
                </p>
              </div>
            </div>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
          {/* Company */}
          <div className="footer-group">
            <h4 className="footer-subheading">Company</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>

              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          Copyright © {new Date().getFullYear()} Creative Edge - All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
