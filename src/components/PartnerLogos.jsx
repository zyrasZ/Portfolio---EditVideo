import React from 'react';

export default function PartnerLogos() {
  const partners = [
    { name: 'PENTAX', style: { letterSpacing: '0.15em', fontWeight: '800' } },
    { name: 'Ventura Foods', style: { fontStyle: 'italic', fontWeight: '600' } },
    { name: 'P&G', style: { fontWeight: '700' } },
    { name: 'B B C', style: { letterSpacing: '0.2em', fontWeight: '600', border: '1px solid var(--color-charcoal)', padding: '2px 8px' } },
    { name: 'TARGET', style: { letterSpacing: '0.05em', fontWeight: '800' } },
    { name: 'meta', style: { letterSpacing: '-0.03em', fontWeight: '500' } },
    { name: 'amazon', style: { fontWeight: '600', textTransform: 'lowercase' } },
  ];

  return (
    <section
      style={{
        backgroundColor: 'var(--color-paper)',
        paddingTop: '80px',
        paddingBottom: '80px',
        position: 'relative',
        zIndex: 1,
        borderBottom: '1px solid var(--color-fog)',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Strip Header */}
        <h2
          className="font-swiss"
          style={{
            fontSize: '18px',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-smoke)',
            marginBottom: 'var(--spacing-40)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          Trusted by creative leads at
        </h2>

        {/* Logos Layout */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'var(--spacing-48)',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="partner-logo-item"
              style={{
                ...partner.style,
                fontFamily: 'var(--font-swissnow)',
                fontSize: '16px',
                color: 'var(--color-charcoal)',
                opacity: 0.6,
                transition: 'opacity 0.3s ease, transform 0.3s ease, color 0.3s ease',
                cursor: 'default',
                userSelect: 'none',
              }}
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .partner-logo-item:hover {
          opacity: 1 !important;
          color: var(--color-carbon) !important;
          transform: scale(1.05);
        }
      `}} />
    </section>
  );
}
