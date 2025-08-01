import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer" style={{
      backgroundColor: 'var(--text-primary)',
      color: 'white',
      padding: '3rem 0 2rem'
    }}>
      <div className="container">
        <div className="footer-content" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title" style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Biotech Lab Integration
            </h3>
            <p style={{
              color: '#d1d5db',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              Eliminating manual data bottlenecks in biotech labs through automated instrument-to-LIMS integration.
            </p>
            <div className="footer-contact" style={{
              color: '#d1d5db'
            }}>
              <div style={{ marginBottom: '0.5rem' }}>
                📞 (555) 123-4567
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                ✉️ hello@biotechlabintegration.com
              </div>
              <div>
                📍 San Francisco, CA
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="footer-section">
            <h4 className="footer-subtitle" style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Solutions
            </h4>
            <ul className="footer-links" style={{
              listStyle: 'none',
              padding: 0
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}>
                  HPLC Integration
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}>
                  Mass Spectrometry
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}>
                  LIMS Integration
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}>
                  Compliance Reporting
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4 className="footer-subtitle" style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Resources
            </h4>
            <ul className="footer-links" style={{
              listStyle: 'none',
              padding: 0
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}>
                  Case Studies
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}>
                  Documentation
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}>
                  API Reference
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}>
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h4 className="footer-subtitle" style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Company
            </h4>
            <ul className="footer-links" style={{
              listStyle: 'none',
              padding: 0
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}>
                  About Us
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}>
                  Careers
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}>
                  Blog
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom" style={{
          borderTop: '1px solid #374151',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div className="footer-copyright" style={{
            color: '#9ca3af'
          }}>
            © 2024 Biotech Lab Integration. All rights reserved.
          </div>
          
          <div className="footer-legal" style={{
            display: 'flex',
            gap: '2rem',
            color: '#9ca3af'
          }}>
            <a href="#" style={{
              color: '#9ca3af',
              textDecoration: 'none',
              fontSize: '0.875rem'
            }}>
              Privacy Policy
            </a>
            <a href="#" style={{
              color: '#9ca3af',
              textDecoration: 'none',
              fontSize: '0.875rem'
            }}>
              Terms of Service
            </a>
            <a href="#" style={{
              color: '#9ca3af',
              textDecoration: 'none',
              fontSize: '0.875rem'
            }}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}; 