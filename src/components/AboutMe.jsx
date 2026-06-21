import React from 'react';
import { Film } from 'lucide-react';

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
                <Film size={28} style={{ color: 'var(--color-forest-ink)' }} />
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
                fontSize: '12px',
                color: 'var(--color-charcoal)',
              }}
            >
              <div>
                <strong style={{ display: 'block', fontSize: '14px', color: 'var(--color-carbon)' }}>1 Năm</strong>
                Kinh nghiệm
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '14px', color: 'var(--color-carbon)' }}>100%</strong>
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
            
            <p
              className="font-swiss"
              style={{
                fontSize: '15px',
                lineHeight: '1.6',
                color: 'var(--color-charcoal)',
              }}
            >
              Dù thời gian vào nghề chưa quá lâu, mình tự tin sở hữu tư duy nhịp điệu (pacing) linh hoạt, gu chọn nhạc bắt mood và tư duy màu sắc tốt. Mình có thể biến hóa đa dạng từ phong cách kích thích vị giác của mảng Food, sự trong trẻo của Beauty, cho đến nét hiện đại, gãy gọn của Tech hay sự phóng khoáng của Vlog du lịch. Mình từng đồng hành cùng các kênh lớn như FoodSources và Metro Go để sản xuất ra những nội dung chất lượng cao, mang lại giá trị thực cho thương hiệu.
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
