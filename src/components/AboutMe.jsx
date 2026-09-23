import React from 'react';
import { FilmStrip } from '@phosphor-icons/react';

export default function AboutMe() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: 'var(--surface-mist)', // #f2f1f0
        paddingTop: '96px',
        paddingBottom: '96px',
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid var(--color-fog)',
        borderBottom: '1px solid var(--color-fog)',
      }}
    >
      <div className="container">
        <div className="about-grid">
          
          {/* Left Column: Profile Card Frame */}
          <div
            style={{
              backgroundColor: 'var(--color-paper)',
              borderRadius: 'var(--radius-cards)',
              padding: 'var(--spacing-32)',
              border: '1px solid var(--color-fog)',
              boxShadow: 'var(--shadow-subtle)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            <div>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-lime-spark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  boxShadow: '0 0 16px rgba(150, 255, 26, 0.4)',
                }}
              >
                <FilmStrip size={28} style={{ color: 'var(--color-forest-ink)' }} />
              </div>
              <h3
                className="font-swiss"
                style={{
                  fontSize: '20px',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--color-carbon)',
                  marginBottom: '8px',
                }}
              >
                Video Editor
              </h3>
              <p
                className="font-swiss"
                style={{
                  fontSize: '14px',
                  color: 'var(--color-smoke)',
                  lineHeight: '1.5',
                }}
              >
                Chuyên sâu trong lĩnh vực Short Video Marketing (Reels, TikTok, Shorts).
              </p>
            </div>

            <div
              style={{
                borderTop: '1px solid var(--color-fog)',
                paddingTop: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '13px',
                color: 'var(--color-charcoal)',
                gap: '16px',
              }}
            >
              <div style={{ flex: 1 }}>
                <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-carbon)', marginBottom: '4px' }}>1 Năm</strong>
                Kinh nghiệm
              </div>
              <div style={{ flex: 1, textAlign: 'right' }}>
                <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-carbon)', marginBottom: '4px' }}>100%</strong>
                Đam mê & Nhiệt huyết
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span
              className="font-swiss"
              style={{
                fontSize: '12px',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-forest-ink)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                backgroundColor: 'var(--color-spring-wash)',
                padding: '4px 8px',
                borderRadius: '4px',
                display: 'inline-block',
                marginBottom: '16px',
                alignSelf: 'flex-start',
              }}
            >
              GIỚI THIỆU BẢN THÂN
            </span>
            
            <h2
              className="font-editorial"
              style={{
                fontSize: 'var(--text-heading)',
                lineHeight: 'var(--leading-heading)',
                letterSpacing: 'var(--tracking-heading)',
                color: 'var(--color-carbon)',
                marginBottom: '24px',
              }}
            >
              Tối ưu hóa nội dung, giữ chân người xem trong <span style={{ fontStyle: 'italic' }}>"3 giây đầu tiên"</span>.
            </h2>

            <p
              className="font-swiss"
              style={{
                fontSize: '15px',
                lineHeight: '1.6',
                color: 'var(--color-charcoal)',
                marginBottom: '16px',
              }}
            >
              Chào bạn, mình là Phát – một Video Editor với gần 1 năm kinh nghiệm thực chiến chuyên sâu trong lĩnh vực Short Video Marketing. Thế mạnh của mình là tối ưu hóa nội dung, giữ chân người xem trong "3 giây đầu tiên" trên các nền tảng mạng xã hội như Facebook Reels, TikTok, YouTube Shorts và cả các định dạng Long-form.
            </p>
            
            <ul
              className="font-swiss"
              style={{
                fontSize: '15px',
                lineHeight: '1.6',
                color: 'var(--color-charcoal)',
                paddingLeft: '20px',
                marginBottom: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <li>
                <strong>Kỹ năng chuyên môn:</strong> Tư duy nhịp điệu (pacing) linh hoạt, chọn nhạc "bắt mood", tư duy màu sắc tốt.
              </li>
              <li>
                <strong>Đa dạng phong cách:</strong> Từ kích thích vị giác (Food), trong trẻo (Beauty), đến hiện đại, gãy gọn (Tech) và phóng khoáng (Travel vlog).
              </li>
              <li>
                <strong>Tư duy Marketing:</strong> Hiểu sâu insight khách hàng từ kinh nghiệm quản lý fanpage mỹ phẩm và nước hoa xách tay, biết cách kể chuyện để thúc đẩy chuyển đổi.
              </li>
            </ul>
            <p
              className="font-swiss"
              style={{
                fontSize: '15px',
                lineHeight: '1.6',
                color: 'var(--color-charcoal)',
              }}
            >
              Bên cạnh đó, mình từng đồng hành cùng các kênh lớn như FoodSources và Metro Go để sản xuất ra những nội dung chất lượng cao, mang lại giá trị thực cho thương hiệu.
            </p>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          max-width: var(--page-max-width);
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1.5fr;
            gap: 64px;
          }
        }
      `}} />
    </section>
  );
}
