import React from 'react';
import { Play, Sparkles } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

export default function Hero() {
  return (
    <section
      style={{
        paddingTop: '120px',
        paddingBottom: '80px',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '48px', textAlign: 'left', zIndex: 1, position: 'relative' }}>
        
        {/* Two-column layout for Avatar and Content */}
        <div className="hero-content-row" style={{ display: 'flex', alignItems: 'center', gap: '40px', width: '100%' }}>
          
          {/* Avatar Placeholder */}
          <div 
            className="hero-avatar"
            style={{ 
              flexShrink: 0, 
              width: '240px', 
              height: '240px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--color-mist)', 
              border: 'none',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: 'var(--shadow-subtle)',
              overflow: 'hidden'
            }}
          >
            <img src={avatarImg} alt="Nguyễn Lê Thái Phát - Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
          </div>

          {/* Text Content */}
          <div style={{ flex: 1 }}>
            {/* Hero Headline */}
            <h1
              className="font-editorial"
              style={{
                fontSize: 'var(--text-display)',
                lineHeight: 'var(--leading-display)',
                letterSpacing: 'var(--tracking-display)',
                color: 'var(--color-carbon)',
                marginBottom: 'var(--spacing-24)',
              }}
            >
              NGUYỄN LÊ THÁI PHÁT <br />
              <span style={{ fontStyle: 'italic', fontWeight: 'var(--font-weight-regular)' }}>VIDEO EDITOR</span>
            </h1>

            {/* Hero Subtext */}
            <div
              className="font-swiss"
              style={{
                fontSize: '16px',
                lineHeight: 'var(--leading-body)',
                letterSpacing: 'var(--tracking-body)',
                color: 'var(--color-smoke)',
                maxWidth: '560px',
                marginBottom: 'var(--spacing-40)',
              }}
            >
              <p style={{ marginBottom: '16px', fontStyle: 'italic' }}>
                "Biến hình ảnh sản phẩm thành trải nghiệm thị giác kích thích vị giác, khát khao mua sắm và truyền cảm hứng sống."
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', alignItems: 'flex-start', color: 'var(--color-charcoal)' }}>
                <span>📍 Vị trí: Thành phố Hồ Chí Minh</span>
                <span>💼 Hình thức làm việc: Freelance / Part-time / Remote</span>
                <span>📩 Email: thaiphat5b@gmail.com | 📞 Zalo: 0565356513</span>
              </div>
            </div>

            {/* Hero CTA Pair */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap'
              }}
            >
              <a
                href="#showcase"
                className="glow-on-hover font-swiss"
                style={{
                  backgroundColor: 'var(--color-lime-spark)',
                  color: 'var(--color-forest-ink)',
                  border: '1px solid var(--color-forest-ink)',
                  padding: '14px 24px',
                  borderRadius: 'var(--radius-buttons)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-semibold)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <Play size={16} fill="var(--color-forest-ink)" stroke="none" /> Các dự án nổi bật
              </a>
              <a
                href="#capabilities"
                className="font-swiss"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--color-charcoal)',
                  padding: '14px 24px',
                  borderRadius: 'var(--radius-buttons)',
                  fontSize: '14px',
                  fontWeight: 'var(--font-weight-semibold)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Sparkles size={16} /> Kỹ năng & Công cụ
              </a>
            </div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-content-row {
          flex-direction: row;
        }
        @media (max-width: 768px) {
          .hero-content-row {
            flex-direction: column !important;
            text-align: center !important;
          }
          .hero-content-row > div:nth-child(2) {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-content-row h1 {
            text-align: center;
          }
          .hero-content-row p {
            text-align: center;
          }
          .hero-content-row > div:nth-child(2) > div > div {
            align-items: center !important;
          }
          .hero-content-row > div:nth-child(2) > div:last-child {
            justify-content: center;
          }
          h1 {
            font-size: 38px !important;
            line-height: 0.95 !important;
          }
          h1 > br {
            display: block !important;
          }
          .hero-avatar {
            width: 180px !important;
            height: 180px !important;
          }
        }
      `}} />
    </section>
  );
}
