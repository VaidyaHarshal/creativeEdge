import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
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
            {/* Contact Section */}
            <div className="contact-section">
              <h4 className="contact-heading">Contact Us</h4>
              <p className="contact-text">
                Better yet, see us in person!
                <br />
                We love our customers, so feel free to contact us.
              </p>
              <div className="contact-details">
                <p>
                  <strong>📍 Address:</strong> Mumbai, Maharashtra, India
                </p>
                <p className="marketing-email">
                  <strong>📧 Email:</strong> marketing@creativeedge.com
                </p>
              </div>
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
                <Link to="/business">For Business</Link>
              </li>
              <li>
                <Link to="/partners">Help Center</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-group">
            <h4 className="footer-subheading">Legal</h4>
            <ul className="footer-links">
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
            </ul>
          </div>

          {/* Apps */}
          <div className="footer-group">
            <h4 className="footer-subheading">Get the App</h4>
            <div className="app-links">
              <a href="#" className="app-button">
                <FaApple /> iOS App
              </a>
              <a href="#" className="app-button">
                <FaAndroid /> Android App
              </a>
            </div>
          </div>
        </div>

        {/* Account Links */}
        <div className="account-links">
          <Link to="/signup">Create Account</Link>
          <span className="divider">|</span>
          <Link to="/login">Sign In</Link>
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
