import React from 'react';
import { Layers, Scissors, Palette, Volume2, MonitorPlay } from 'lucide-react';

export default function FeatureAsymmetricGrid() {
  const skills = [
    {
      icon: <MonitorPlay size={24} style={{ color: 'var(--color-lime-spark)' }} />,
      title: 'Phần mềm thành thạo',
      desc: 'CapCut Pro (Thành thạo Keyframe, Motion Graphics cơ bản), Canva.',
    },
    {
      icon: <Scissors size={24} style={{ color: 'var(--color-lime-spark)' }} />,
      title: 'Edit video ngắn',
      desc: 'Shorts/Reels/TikTok giật tít, giữ chân người xem (Retention rate) tốt.',
    },
    {
      icon: <Palette size={24} style={{ color: 'var(--color-lime-spark)' }} />,
      title: 'Color Grading đa phong cách',
      desc: 'Kích thích thị giác (Food), Trong trẻo (Beauty), Sang xịn mịn (Tech/Travel).',
    },
    {
      icon: <Volume2 size={24} style={{ color: 'var(--color-lime-spark)' }} />,
      title: 'Sound Design',
      desc: 'Thiết kế âm thanh sống động: tiếng xèo xèo, cắt thái, bấm nút công nghệ, sóng biển...',
    },
    {
      icon: <Layers size={24} style={{ color: 'var(--color-lime-spark)' }} />,
      title: 'Beat-syncing',
      desc: 'Lựa chọn bối cảnh, cắt dựng theo nhịp nhạc mượt mà, tạo cảm xúc.',
    }
  ];

  return (
    <section
      id="capabilities"
      style={{
        backgroundColor: 'var(--color-onyx)', // #121212
        paddingTop: '96px',
        paddingBottom: '96px',
        color: '#ffffff',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container" style={{ textAlign: 'center', marginBottom: 'var(--spacing-48)' }}>
        <span
          className="font-swiss"
          style={{
            fontSize: '12px',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-lime-spark)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            border: '1px solid var(--color-lime-spark)',
            padding: '4px 8px',
            borderRadius: 'var(--radius-md)',
            display: 'inline-block',
            marginBottom: '16px',
          }}
        >
          Kỹ Năng & Công Cụ
        </span>
        <h2
          className="font-editorial"
          style={{
            fontSize: 'var(--text-display)',
            lineHeight: 'var(--leading-display)',
            letterSpacing: 'var(--tracking-display)',
            color: '#ffffff',
            maxWidth: '720px',
            margin: '0 auto',
          }}
        >
          Trang bị kỹ năng <span style={{ fontStyle: 'italic' }}>chuyên môn</span> cao
        </h2>
      </div>

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {skills.map((skill, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--color-graphite)',
                padding: '32px',
                borderRadius: 'var(--radius-cards)',
                border: '1px solid var(--color-ash)',
                transition: 'transform 0.3s ease',
                cursor: 'default',
              }}
              className="skill-card hover-lift"
            >
              <div style={{ marginBottom: '16px' }}>{skill.icon}</div>
              <h3
                className="font-swiss"
                style={{
                  fontSize: '18px',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: '#ffffff',
                  marginBottom: '12px',
                }}
              >
                {skill.title}
              </h3>
              <p
                className="font-swiss"
                style={{
                  fontSize: '14px',
                  color: 'var(--color-smoke)',
                  lineHeight: '1.5',
                }}
              >
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          border-color: var(--color-lime-spark);
        }
      `}} />
    </section>
  );
}
