import React from 'react';
import { Envelope, Phone, FacebookLogo, YoutubeLogo, LinkedinLogo, ArrowRight } from '@phosphor-icons/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: 'var(--color-onyx)', // #121212
        color: '#ffffff',
        paddingTop: '80px',
        paddingBottom: '40px',
        borderTop: '1px solid var(--color-ash)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        
        {/* Contact CTA Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '64px',
          }}
        >
          <span
            className="font-swiss"
            style={{
              fontSize: '12px',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--color-lime-spark)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '16px',
            }}
          >
            Lời kết & Liên hệ
          </span>
          <h2
            className="font-editorial"
            style={{
              fontSize: '32px',
              lineHeight: '1.2',
              color: '#ffffff',
              maxWidth: '800px',
              marginBottom: '24px',
              fontStyle: 'italic',
            }}
          >
            "Một video hay không chỉ nằm ở kỹ xảo phức tạp, mà nằm ở việc nó có kể được câu chuyện của sản phẩm, chạm được vào cảm xúc và giữ chân được người xem hay không."
          </h2>

          <p className="font-swiss" style={{ fontSize: '16px', color: 'var(--color-smoke)', maxWidth: '640px', marginBottom: '32px', lineHeight: '1.6' }}>
            Nếu bạn đang tìm kiếm một làn gió mới – một Editor có gu, nhiệt huyết, đa năng từ mảng Food/Beauty cho đến Tech/Travel, hãy liên hệ với mình ngay nhé!
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
             <a
                href="mailto:thaiphat5b@gmail.com"
                className="glow-on-hover"
                style={{
                  backgroundColor: 'var(--color-lime-spark)',
                  color: 'var(--color-forest-ink)',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-pills)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-semibold)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Envelope size={16} /> thaiphat5b@gmail.com
              </a>
              <a
                href="tel:0565356513"
                className="glow-on-hover"
                style={{
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  border: '1px solid var(--color-ash)',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-pills)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-semibold)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Phone size={16} /> Zalo: 0565356513
              </a>
          </div>
        </div>

        {/* Cleaned & Simplified Bottom Footer Row */}
        <div
          className="font-swiss footer-bottom-row"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--color-ash)',
            paddingTop: '32px',
            fontSize: '13px',
            color: 'var(--color-smoke)',
          }}
        >
          {/* Logo & Description */}
          <div style={{ textAlign: 'center' }} className="footer-brand-side">
            <a
              href="#"
              style={{
                fontSize: '16px',
                fontWeight: 'var(--font-weight-semibold)',
                color: '#ffffff',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                letterSpacing: '-0.02em',
                marginBottom: '8px',
              }}
            >
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: 'var(--color-lime-spark)',
                  borderRadius: '2.5px',
                  display: 'inline-block',
                }}
              ></span>
              THÁI PHÁT <span style={{ color: 'var(--color-smoke)', fontWeight: 'var(--font-weight-regular)' }}>/ VIDEO EDITOR</span>
            </a>
          </div>

          {/* Social Channels List pointing to user's real accounts */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              justifyContent: 'center',
            }}
          >
            <a href="#" className="simple-footer-link">
              Facebook <FacebookLogo size={16} weight="fill" style={{ display: 'inline' }} />
            </a>
            <a href="#" className="simple-footer-link">
              Youtube <YoutubeLogo size={16} weight="fill" style={{ display: 'inline' }} />
            </a>
            <a href="#" className="simple-footer-link">
              Linkedin <LinkedinLogo size={16} weight="fill" style={{ display: 'inline' }} />
            </a>
          </div>

          {/* Meta & Scroll to Top */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <span>&copy; {currentYear} Nguyễn Lê Thái Phát. All rights reserved.</span>
            <a
              href="#"
              onClick={handleScrollToTop}
              style={{
                color: 'var(--color-lime-spark)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            >
              Back to Top ↑
            </a>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .simple-footer-link {
          color: var(--color-smoke);
          transition: color 0.25s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .simple-footer-link:hover {
          color: var(--color-lime-spark);
        }
        @media (min-width: 768px) {
          .footer-bottom-row {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
          }
          .footer-brand-side {
            text-align: left !important;
          }
        }
      `}} />
    </footer>
  );
}
