
import { useState } from "react";
import "./App.css";

import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="website">
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          YOUR PLUMBING<span className="brand-dot">.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          >
          <span className={menuOpen ? "hamburger open" : "hamburger"}>
          <span />
          <span />
          <span />
          </span>
        </button>

        <nav
          id="main-navigation"
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          >
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Get a Quote
          </a>
        </nav>
      </header>

      <main>
        
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="hero-label">RELIABLE PLUMBING SERVICES</span>

            <h1>
              Plumbing problems?
              <br />
              <span>We've got you covered.</span>
            </h1>

            <p>
              Reliable plumbing solutions for your home and business.
              From leaking pipes to blocked drains, we're here to help.
            </p>

            <a className="button" href="#contact">
              Contact Us →
            </a>
          </div>

  
          <div className="hero-image">
            <img
              src="./Screenshot 2026-10-12 at 15.11.28.png"
              alt="Plumber repairing water pipes"
            />
          </div>

        </section>


        <section className="section" id="services">
          <h2>Our Plumbing Services</h2>

          <div className="services">
            <article className="service-card">
              <h3>Leak Repairs</h3>
              <p>We repair leaking taps, pipes, and fittings to help prevent water waste and damage.</p>
            </article>

            <article className="service-card">
              <h3>Blocked Drains</h3>
              <p>We help clear blocked drains and restore proper water flow.</p>
            </article>

            <article className="service-card">
              <h3>Geyser Repairs</h3>
              <p>We help diagnose and repair common geyser problems.</p>
            </article>

            <article className="service-card">
              <h3>Pipe Installation</h3>
              <p>We install and replace water pipes for plumbing projects.</p>
            </article>
          </div>
        </section>

        <section className="section contact" id="contact">
          <h2>Need a Plumber?</h2>
          <p>
            Contact us to discuss your plumbing needs and request a quote.
          </p>
          
          <a
            href="https://wa.me/27YOURNUMBER"
            className="button whatsapp-button"
            target="_blank"
            rel="noreferrer"
          >
            Chat with Us on WhatsApp
          </a>


          <h3>Get in Touch</h3>
          <p>Need a plumber? Contact us to discuss your plumbing needs.</p>

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+27012345678">012 234 5678</a>
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:yourplumbing@plumber.com">
            yourplumbing@plumber.com
            </a>
          </p>
        </section>
      </main>

      <footer>
        

        <p>© {new Date().getFullYear()} Your Plumbing. Business. All rights reserved.</p>
        <p>Reliable plumbing services for your home and business.</p>

        
        <div className="social-links">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            >
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            >
            <FaInstagram />
          </a>

          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            >
            <FaTiktok />
          </a>
        </div>


      </footer>
    </div>
  );
}

export default App;
