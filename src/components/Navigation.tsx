import React, { useState, useEffect } from 'react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navigation" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '80px',
      zIndex: 1000,
      transition: 'all 300ms ease',
      backdropFilter: isScrolled ? 'blur(10px)' : 'blur(5px)',
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.3)',
      borderBottom: isScrolled ? '1px solid rgba(229, 231, 235, 0.5)' : 'none',
      boxShadow: isScrolled ? '0 1px 3px 0 rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <div className="logo" style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          color: 'white',
          textDecoration: 'none',
          cursor: 'pointer',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
        }}>
          BioData Automation
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <button 
            onClick={() => scrollToSection('solutions')}
            className="nav-link"
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              padding: '0.5rem 0',
              transition: 'color 200ms ease',
              position: 'relative',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
            }}
          >
            Solutions
          </button>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="nav-link"
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              padding: '0.5rem 0',
              transition: 'color 200ms ease',
              position: 'relative',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
            }}
          >
            About
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="nav-link"
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              padding: '0.5rem 0',
              transition: 'color 200ms ease',
              position: 'relative',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
            }}
          >
            Contact
          </button>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="cta-button"
            style={{
              backgroundColor: 'var(--primary-color)',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 200ms ease',
              boxShadow: '0 2px 4px rgba(37, 99, 235, 0.2)'
            }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="mobile-menu-button"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
          }}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu" style={{
          position: 'absolute',
          top: '80px',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(229, 231, 235, 0.5)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          padding: '1rem',
          animation: 'slideDown 200ms ease'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <button 
              onClick={() => scrollToSection('solutions')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-primary)',
                fontSize: '1.1rem',
                fontWeight: '500',
                cursor: 'pointer',
                padding: '0.75rem 0',
                textAlign: 'left',
                transition: 'color 200ms ease'
              }}
            >
              Solutions
            </button>
            
            <button 
              onClick={() => scrollToSection('about')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-primary)',
                fontSize: '1.1rem',
                fontWeight: '500',
                cursor: 'pointer',
                padding: '0.75rem 0',
                textAlign: 'left',
                transition: 'color 200ms ease'
              }}
            >
              About
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-primary)',
                fontSize: '1.1rem',
                fontWeight: '500',
                cursor: 'pointer',
                padding: '0.75rem 0',
                textAlign: 'left',
                transition: 'color 200ms ease'
              }}
            >
              Contact
            </button>

            <button 
              onClick={() => scrollToSection('contact')}
              style={{
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '1rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 200ms ease',
                marginTop: '0.5rem'
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}; 