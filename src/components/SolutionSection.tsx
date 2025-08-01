import React from 'react';

export const SolutionSection: React.FC = () => {
  const processSteps = [
    {
      step: '1',
      title: 'Direct Instrument Connection',
      description: 'Agilent, Waters, Thermo Fisher, Bio-Rad',
      icon: '🔌'
    },
    {
      step: '2',
      title: 'Automatic Data Processing',
      description: 'Format standardization and quality validation',
      icon: '⚙️'
    },
    {
      step: '3',
      title: 'Real-Time LIMS Integration',
      description: 'Benchling, LabWare, Thermo SampleManager',
      icon: '🔄'
    },
    {
      step: '4',
      title: 'Compliance Ready',
      description: 'FDA/ISO audit trails built-in',
      icon: '✅'
    }
  ];

  const benefits = [
    'Eliminate manual data entry completely',
    '90%+ reduction in data quality errors',
    'Real-time visibility across all lab systems',
    'Automated compliance reporting',
    'Free up scientists to focus on research'
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="section-title">Automated Lab Data Integration</h2>
          <p className="section-subtitle">Connect your entire lab ecosystem in real-time</p>
        </div>

        {/* Process Steps */}
        <div className="process-steps" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {processSteps.map((step, index) => (
            <div key={index} className="process-step" style={{
              textAlign: 'center',
              padding: '2rem',
              backgroundColor: 'var(--background-primary)',
              borderRadius: '0.75rem',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border-color)',
              position: 'relative'
            }}>
              <div className="step-number" style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '40px',
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: '1.1rem'
              }}>
                {step.step}
              </div>
              
              <div className="step-icon" style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                marginTop: '1rem'
              }}>
                {step.icon}
              </div>
              
              <h3 className="step-title" style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem'
              }}>
                {step.title}
              </h3>
              
              <p className="step-description" style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="benefits-section" style={{
          backgroundColor: 'var(--background-secondary)',
          padding: '3rem',
          borderRadius: '0.75rem',
          marginTop: '2rem'
        }}>
          <h3 className="benefits-title" style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            Key Benefits
          </h3>
          
          <div className="benefits-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                backgroundColor: 'var(--background-primary)',
                borderRadius: '0.5rem',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div className="benefit-icon" style={{
                  color: 'var(--success-color)',
                  fontSize: '1.5rem'
                }}>
                  ✓
                </div>
                <span style={{
                  color: 'var(--text-primary)',
                  fontWeight: '500'
                }}>
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="solution-cta" style={{
          textAlign: 'center',
          marginTop: '3rem'
        }}>
          <button className="btn btn-primary" style={{
            fontSize: '1.1rem',
            padding: '1rem 2rem'
          }}>
            See Integration in Action
          </button>
        </div>
      </div>
    </section>
  );
}; 