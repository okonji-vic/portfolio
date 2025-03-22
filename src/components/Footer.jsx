import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin, ArrowRight } from "lucide-react"
// import Link from "next/link"
import { Link } from "react-router-dom"
import { useState } from "react"
import "./footer.css"

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (email) {
            console.log(email);
            setEmail("");
        }
    }
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            <h2 className="brand-name">Software Developer</h2>
            <p className="brand-description">
              Creating exceptional experiences through innovative design and technology solutions.
            </p>
            <div className="social-links">
              <Link href="#" className="social-link">
                <Instagram className="icon" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="social-link">
                <Twitter className="icon" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="social-link">
                <Facebook className="icon" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="social-link">
                <Linkedin className="icon" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h3 className="section-title">Contact</h3>
            <ul className="contact-list">
              <li className="contact-item">
                <Mail className="contact-icon" />
                <div>
                  {/* <span className="contact-label">Email</span> */}
                  <a href="mailto:hello@emeka.com" className="contact-value">
                    neo88great@gmail.com
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <Phone className="contact-icon" />
                <div>
                  {/* <span className="contact-label">Phone</span> */}
                  <a href="tel:+2349025697028" className="contact-value">
                    234-902-569-7028
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <MapPin className="contact-icon" />
                <div>
                  {/* <span className="contact-label">Address</span> */}
                  <address className="contact-value address">
                    12 Ohen Street,
                    <br />
                    Off Sapele Road,
                    <br />
                    Benin City, Edo State.
                  </address>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="section-title">Quick Links</h3>
            <ul className="quick-links">
              <li>
                <Link href="#" className="quick-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="quick-link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="quick-link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="quick-link">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="quick-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="quick-link">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3 className="section-title">Stay Updated</h3>
            <p className="newsletter-text">Subscribe to our newsletter for the latest updates and insights.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" className="newsletter-input" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button className="newsletter-button" onClick={handleSubmit}>
                <ArrowRight className="button-icon" />
              </button>
            </div>
            <p className="privacy-text">
              By subscribing, you agree to our{" "}
              <Link href="#" className="privacy-link">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {new Date().getFullYear()} <span className="copyright-name">Emeka</span>. All rights reserved.
            </p>
            <div className="legal-links">
              <Link href="#" className="legal-link">
                Privacy Policy
              </Link>
              <Link href="#" className="legal-link">
                Terms of Service
              </Link>
              <Link href="#" className="legal-link">
                Cookie Policy
              </Link>
            </div>
          </div>
          <p className="tagline">
            <span className="tagline-light">Designed with</span> <span className="tagline-bold">passion</span>{" "}
            <span className="tagline-light">and</span> <span className="tagline-italic">creativity</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

