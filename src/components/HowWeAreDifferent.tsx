import React from 'react';

export const HowWeAreDifferent: React.FC = () => {
  const differentiators = [
    {
      icon: '🔗',
      title: 'Multi-vendor integration',
      description: 'Works with your existing instruments and LIMS'
    },
    {
      icon: '📋',
      title: 'Compliance-first design',
      description: 'Built for FDA/ISO requirements from day one'
    },
    {
      icon: '⚡',
      title: 'No workflow disruption',
      description: 'Integrates seamlessly with existing processes'
    },
    {
      icon: '📈',
      title: 'Scalable architecture',
      description: 'Grows from single instruments to enterprise-wide'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="section-title">Purpose-Built for Biotech Labs</h2>
          <p className="section-subtitle">Why leading labs choose our integration solution</p>
        </div>

        <div className="differentiators-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {differentiators.map((item, index) => (
            <div key={index} className="differentiator-card" style={{
              padding: '2.5rem',
              backgroundColor: 'var(--background-primary)',
              borderRadius: '0.75rem',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border-color)',
              textAlign: 'center',
              transition: 'all 0.2s ease'
            }}>
              <div className="differentiator-icon" style={{
                fontSize: '3rem',
                marginBottom: '1.5rem'
              }}>
                {item.icon}
              </div>
              
              <h3 className="differentiator-title" style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                {item.title}
              </h3>
              
              <p className="differentiator-description" style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="trust-section" style={{
          backgroundColor: 'var(--background-secondary)',
          padding: '3rem',
          borderRadius: '0.75rem',
          textAlign: 'center'
        }}>
          <h3 className="trust-title" style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: '2rem'
          }}>
            Trusted by Leading Biotech Companies
          </h3>
          
          <div className="trust-badges" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <div className="trust-badge" style={{
              padding: '1rem 1.5rem',
              backgroundColor: 'var(--background-primary)',
              borderRadius: '0.5rem',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                FDA Compliant
              </div>
            </div>
            
            <div className="trust-badge" style={{
              padding: '1rem 1.5rem',
              backgroundColor: 'var(--background-primary)',
              borderRadius: '0.5rem',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                ISO 17025
              </div>
            </div>
            
            <div className="trust-badge" style={{
              padding: '1rem 1.5rem',
              backgroundColor: 'var(--background-primary)',
              borderRadius: '0.5rem',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                GLP Ready
              </div>
            </div>
            
            <div className="trust-badge" style={{
              padding: '1rem 1.5rem',
              backgroundColor: 'var(--background-primary)',
              borderRadius: '0.5rem',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                SOC 2 Type II
              </div>
            </div>
          </div>
        </div>

        {/* Integration Partners */}
        <div className="partners-section" style={{
          marginTop: '4rem',
          textAlign: 'center'
        }}>
          <h3 className="partners-title" style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: '2rem'
          }}>
            Compatible with Your Lab Ecosystem
          </h3>
          
          <div className="partners-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {['Agilent', 'Waters', 'Thermo Fisher', 'Bio-Rad', 'Benchling', 'LabWare', 'Thermo SampleManager'].map((partner, index) => (
              <div key={index} className="partner-item" style={{
                padding: '1.5rem',
                backgroundColor: 'var(--background-primary)',
                borderRadius: '0.5rem',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border-color)',
                fontWeight: '500',
                color: 'var(--text-primary)'
              }}>
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 