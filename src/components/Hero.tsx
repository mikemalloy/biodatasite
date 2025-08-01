import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero" style={{
      background: 'linear-gradient(135deg, var(--background-primary) 0%, var(--background-secondary) 100%)',
      padding: '6rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div className="hero-content" style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 className="hero-title" style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            Stop Losing Days to Manual Data Transfer
          </h1>
          
          <p className="hero-subtitle" style={{
            fontSize: '1.5rem',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            lineHeight: '1.6'
          }}>
            Your lab instruments generate critical data every minute. Why does it take hours to get that data where it needs to go? We connect your instruments directly to your LIMS in real-time.
          </p>
          
          <div className="hero-cta" style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
              See How It Works
            </button>
            <button className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
              Schedule a Demo
            </button>
          </div>
          
          <div className="hero-stats" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginTop: '4rem',
            flexWrap: 'wrap'
          }}>
            <div className="stat" style={{ textAlign: 'center' }}>
              <div className="stat-number" style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'var(--primary-color)'
              }}>
                2,000+
              </div>
              <div className="stat-label" style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem'
              }}>
                Hours Saved Annually
              </div>
            </div>
            
            <div className="stat" style={{ textAlign: 'center' }}>
              <div className="stat-number" style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'var(--success-color)'
              }}>
                90%+
              </div>
              <div className="stat-label" style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem'
              }}>
                Error Reduction
              </div>
            </div>
            
            <div className="stat" style={{ textAlign: 'center' }}>
              <div className="stat-number" style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'var(--accent-color)'
              }}>
                50%
              </div>
              <div className="stat-label" style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem'
              }}>
                Faster Time-to-Insight
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
        opacity: '0.1',
        borderRadius: '50%'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, var(--success-color) 0%, transparent 70%)',
        opacity: '0.1',
        borderRadius: '50%'
      }}></div>
    </section>
  );
}; 