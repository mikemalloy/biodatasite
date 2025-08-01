import React, { useState } from 'react';

export const NextSteps: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    company: '',
    instruments: '',
    challenge: '',
    hoursPerWeek: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--background-secondary)' }}>
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="section-title">Ready to Eliminate Your Data Bottlenecks?</h2>
          <p className="section-subtitle">Get started with automated lab data integration today</p>
        </div>

        <div className="next-steps-content" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Contact Form */}
          <div className="contact-form-container">
            <h3 className="form-title" style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '2rem'
            }}>
              Get Your Free Assessment
            </h3>
            
            <form onSubmit={handleSubmit} className="contact-form" style={{
              backgroundColor: 'var(--background-primary)',
              padding: '2rem',
              borderRadius: '0.75rem',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border-color)'
            }}>
              <div className="form-row" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div className="form-group">
                  <label htmlFor="name" style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--text-primary)'
                  }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border-color)',
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="title" style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--text-primary)'
                  }}>
                    Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border-color)',
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label htmlFor="company" style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--text-primary)'
                }}>
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.5rem',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label htmlFor="instruments" style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--text-primary)'
                }}>
                  What instruments do you use?
                </label>
                <textarea
                  id="instruments"
                  name="instruments"
                  value={formData.instruments}
                  onChange={handleInputChange}
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label htmlFor="challenge" style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--text-primary)'
                }}>
                  What's your biggest data integration challenge?
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleInputChange}
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label htmlFor="hoursPerWeek" style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--text-primary)'
                }}>
                  How many hours per week does your team spend on manual data tasks?
                </label>
                <select
                  id="hoursPerWeek"
                  name="hoursPerWeek"
                  value={formData.hoursPerWeek}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.5rem',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select an option</option>
                  <option value="0-5">0-5 hours</option>
                  <option value="5-10">5-10 hours</option>
                  <option value="10-20">10-20 hours</option>
                  <option value="20-40">20-40 hours</option>
                  <option value="40+">40+ hours</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary" style={{
                width: '100%',
                fontSize: '1.1rem',
                padding: '1rem'
              }}>
                Get Free Assessment
              </button>
            </form>
          </div>

          {/* CTA Options */}
          <div className="cta-options">
            <h3 className="cta-title" style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '2rem'
            }}>
              Or Choose Another Option
            </h3>
            
            <div className="cta-buttons" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <button className="btn btn-secondary" style={{
                fontSize: '1.1rem',
                padding: '1.5rem',
                textAlign: 'left',
                justifyContent: 'space-between',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span>Schedule a Discovery Call</span>
                <span>→</span>
              </button>
              
              <button className="btn btn-secondary" style={{
                fontSize: '1.1rem',
                padding: '1.5rem',
                textAlign: 'left',
                justifyContent: 'space-between',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span>See a Live Demo</span>
                <span>→</span>
              </button>
              
              <button className="btn btn-secondary" style={{
                fontSize: '1.1rem',
                padding: '1.5rem',
                textAlign: 'left',
                justifyContent: 'space-between',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span>Get Integration Assessment</span>
                <span>→</span>
              </button>
            </div>

            <div className="contact-info" style={{
              marginTop: '3rem',
              padding: '2rem',
              backgroundColor: 'var(--background-primary)',
              borderRadius: '0.75rem',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border-color)'
            }}>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                Need Immediate Help?
              </h4>
              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: '1rem'
              }}>
                Our lab integration experts are ready to help you eliminate data bottlenecks.
              </p>
              <div style={{
                color: 'var(--primary-color)',
                fontWeight: '600',
                fontSize: '1.1rem'
              }}>
                📞 (555) 123-4567
              </div>
              <div style={{
                color: 'var(--primary-color)',
                fontWeight: '600',
                fontSize: '1.1rem'
              }}>
                ✉️ hello@biotechlabintegration.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 