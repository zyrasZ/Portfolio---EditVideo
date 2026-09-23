import React, { useState } from 'react';
import { CaretDown, List, X, ArrowRight } from '@phosphor-icons/react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Showcase', href: '#showcase' },
    { name: 'About Me', href: '#about' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className="glass"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '64px',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid var(--color-fog)',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-swiss"
          style={{
            fontSize: '18px',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-carbon)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            letterSpacing: '-0.02em',
          }}
        >
          <span
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: 'var(--color-lime-spark)',
              borderRadius: '3px',
              display: 'inline-block',
            }}
          ></span>
          PORTFOLIO <span style={{ color: 'var(--color-smoke)', fontWeight: 'var(--font-weight-regular)' }}>/ CREATIVE</span>
        </a>

        {/* Center Links (Desktop) */}
        <div
          className="font-swiss"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: 'var(--spacing-28)',
            height: '100%',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '14px',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-charcoal)',
              }}
              className="nav-item-hover"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions (Desktop) */}
        <div
          className="font-swiss"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: 'var(--spacing-16)',
          }}
        >
          <a
            href="#contact"
            className="glow-on-hover"
            style={{
              backgroundColor: 'var(--color-carbon)',
              color: 'var(--color-paper)',
              padding: '8px 16px',
              borderRadius: 'var(--radius-buttons)',
              fontSize: '14px',
              fontWeight: 'var(--font-weight-semibold)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: 'var(--shadow-subtle)',
            }}
          >
            Collaborate <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px',
            color: 'var(--color-carbon)',
          }}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="font-swiss"
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--color-paper)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            padding: 'var(--spacing-32) var(--spacing-24)',
            gap: 'var(--spacing-24)',
            borderTop: '1px solid var(--color-fog)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '18px',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-carbon)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '12px',
                borderBottom: '1px solid var(--color-mist)',
              }}
            >
              {link.name}
            </a>
          ))}
          <div
            style={{
              marginTop: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textAlign: 'center',
                backgroundColor: 'var(--color-carbon)',
                color: 'var(--color-paper)',
                padding: '14px',
                borderRadius: 'var(--radius-buttons)',
                fontSize: '15px',
                fontWeight: 'var(--font-weight-semibold)',
              }}
            >
              Collaborate
            </a>
          </div>
        </div>
      )}

      {/* Styled JSX for hover effects */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .nav-item-hover:hover {
            color: var(--color-lime-spark) !important;
            filter: drop-shadow(0 0 4px rgba(150,255,26,0.3));
          }
          nav > div > div:nth-child(2) {
            display: flex !important;
          }
          nav > div > div:nth-child(3) {
            display: flex !important;
          }
          nav > div > button {
            display: none !important;
          }
        }
      `}} />
    </nav>
  );
}
