import React from 'react';

export const ProblemSection: React.FC = () => {
  const painPoints = [
    {
      icon: '⏰',
      title: '2,000+ wasted hours annually',
      description: 'Scientists manually transferring data instead of doing science'
    },
    {
      icon: '❌',
      title: '40% data quality issues',
      description: 'Human error in transcription and file handling'
    },
    {
      icon: '📋',
      title: 'Weeks-long compliance delays',
      description: 'Manual report generation for FDA submissions'
    },
    {
      icon: '🔒',
      title: 'Siloed data',
      description: 'Critical insights trapped in disconnected systems'
    },
    {
      icon: '💰',
      title: '$600K-8M daily trial delays',
      description: 'When data bottlenecks slow clinical progress'
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--background-secondary)' }}>
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="section-title">The Hidden Cost of Manual Lab Data</h2>
          <p className="section-subtitle">Every biotech lab faces the same bottleneck</p>
        </div>

        <div className="grid grid-3">
          {painPoints.map((point, index) => (
            <div key={index} className="card" style={{
              textAlign: 'center',
              padding: '2.5rem 1.5rem'
            }}>
              <div className="pain-point-icon" style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>
                {point.icon}
              </div>
              <h3 className="pain-point-title" style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem'
              }}>
                {point.title}
              </h3>
              <p className="pain-point-description" style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                {point.description}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}; 