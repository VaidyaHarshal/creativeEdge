import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import "../styles/navbar.css";
import creativeEdgeLogo from "../assets/images/creativeEdgelogo.webp";

interface NavLink {
  name: string;
  path: string;
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links: NavLink[] = [
    { name: "Services", path: "services" },
    { name: "About", path: "about" },
    { name: "Partners", path: "partners" },
    { name: "Contact", path: "cta" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <>
      <motion.nav
        className={`navbar glass-effect ${isScrolled ? "scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="nav-container">
          <Link to="hero" smooth={true} duration={800} offset={-50}>
            <img
              src={creativeEdgeLogo}
              alt="Creative Edge"
              className={`nav-logo ${isScrolled ? "scrolled" : ""}`}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="nav-links">
            {links.map((link) => (
              <Link
                key={link.name}
                className={`nav-link ${isScrolled ? "scrolled" : ""}`}
                to={link.path}
                smooth={true}
                duration={800}
                offset={-50}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.3 }}
            >
              {links.map((link) => (
                <Link
                  key={link.name}
                  className="mobile-nav-link"
                  to={link.path}
                  smooth={true}
                  duration={800}
                  offset={-50}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            className="scroll-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            aria-label="Scroll to top"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
