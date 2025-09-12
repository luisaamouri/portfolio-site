import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeMenu();
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/" onClick={closeMenu}>
          Luisa El Amouri
        </Link>
      </div>

      {/* Desktop Navigation */}
      {!isMobile && (
        <nav className="desktop-nav">
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="nav-item">
              <a 
                href="/LuisaAmouriResume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      )}

      {/* Mobile Menu */}
      {isMobile && (
        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      )}

      {/* Mobile Navigation Menu */}
      {isMobile && (
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-menu">
            {navItems.map((item) => (
              <li key={item.id} className="mobile-nav-item">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="mobile-nav-link"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="mobile-nav-item">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mobile-nav-link"
                onClick={closeMenu}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Mobile Overlay */}
      {isMobile && isMenuOpen && (
        <div className="nav-overlay" onClick={closeMenu}></div>
      )}
    </div>
  );
};

export default Navbar;