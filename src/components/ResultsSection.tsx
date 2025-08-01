import React from 'react';

export const ResultsSection: React.FC = () => {
  const successMetrics = [
    {
      number: '2,000+',
      label: 'hours saved annually',
      color: 'var(--primary-color)'
    },
    {
      number: '90%+',
      label: 'accuracy in data transfer',
      color: 'var(--success-color)'
    },
    {
      number: '50%',
      label: 'faster time-to-insight',
      color: 'var(--accent-color)'
    },
    {
      number: 'Zero',
      label: 'compliance violations',
      color: 'var(--success-color)'
    },
    {
      number: 'Weeks to days',
      label: 'compliance reporting time',
      color: 'var(--warning-color)'
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--background-secondary)' }}>
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="section-title">Proven Impact</h2>
          <p className="section-subtitle">Real results from real labs</p>
        </div>

        {/* Success Metrics */}
        <div className="metrics-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {successMetrics.map((metric, index) => (
            <div key={index} className="metric-card" style={{
              textAlign: 'center',
              padding: '2rem 1rem',
              backgroundColor: 'var(--background-primary)',
              borderRadius: '0.75rem',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border-color)'
            }}>
              <div className="metric-number" style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: metric.color,
                marginBottom: '0.5rem'
              }}>
                {metric.number}
              </div>
              <div className="metric-label" style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                fontWeight: '500'
              }}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}; 