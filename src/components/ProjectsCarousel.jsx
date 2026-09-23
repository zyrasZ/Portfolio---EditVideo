import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── SVG Icons ─── */
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const PlayIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3"/>
  </svg>
);

/* ─── Project Data ─── */
const projects = [
  {
    id: 1,
    platform: 'Facebook',
    platformColor: '#1877f2',
    platformBg: 'linear-gradient(135deg, #1877f2 0%, #003da5 100%)',
    channelName: 'FoodSource VN',
    channelHandle: '@Foodsource.vn',
    channelUrl: 'https://www.facebook.com/Foodsource.vn',
    title: 'Ẩm thực & Đời sống Reels',
    desc: 'Video Reels nổi bật – khám phá văn hoá ẩm thực Việt Nam qua những thước phim chân thực và sáng tạo.',
    videoUrl: 'https://www.facebook.com/share/r/17m6nNWZCt/',
    embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fr%2F17m6nNWZCt%2F&show_text=false&t=0',
    youtubeId: null,
    icon: <FacebookIcon />,
  },
  {
    id: 2,
    platform: 'YouTube',
    platformColor: '#ff0000',
    platformBg: 'linear-gradient(135deg, #ff0000 0%, #8b0000 100%)',
    channelName: 'FoodSource VN',
    channelHandle: '@Foodsource-vn',
    channelUrl: 'https://www.youtube.com/@Foodsource-vn/shorts',
    title: 'Khám phá Ẩm thực Việt',
    desc: 'Short film ngắn ghi lại vẻ đẹp văn hoá ẩm thực đường phố – một trong những video nổi bật nhất kênh.',
    videoUrl: 'https://youtube.com/shorts/CbwTxRisPeU',
    youtubeId: 'CbwTxRisPeU',
    icon: <YoutubeIcon />,
  },
  {
    id: 3,
    platform: 'YouTube',
    platformColor: '#ff0000',
    platformBg: 'linear-gradient(135deg, #0c0a09 0%, #1e1b18 100%)',
    channelName: 'FoodSource VN',
    channelHandle: '@Foodsource-vn',
    channelUrl: 'https://www.youtube.com/@Foodsource-vn/shorts',
    title: 'Hương vị Đường phố',
    desc: 'Video short nổi bật – khai thác chiều sâu văn hoá ẩm thực địa phương với góc nhìn điện ảnh độc đáo.',
    videoUrl: 'https://youtube.com/shorts/d2Y4u0qU-KM',
    youtubeId: 'd2Y4u0qU-KM',
    isAccent: true,
    icon: <YoutubeIcon />,
  },
  {
    id: 4,
    platform: 'YouTube',
    platformColor: '#ff5e00',
    platformBg: 'linear-gradient(135deg, #ff5e00 0%, #7a0000 100%)',
    channelName: 'Metro Go Official',
    channelHandle: '@MetroGoOfficial',
    channelUrl: 'https://www.youtube.com/@MetroGoOfficial',
    title: 'Metro Go Editorial Reel',
    desc: 'Video Short thương hiệu cho Metro Go – phong cách editorial mạnh mẽ với nhịp cắt dứt khoát.',
    videoUrl: 'https://youtube.com/shorts/ezOO1UyGnCA',
    youtubeId: 'ezOO1UyGnCA',
    icon: <YoutubeIcon />,
  },
];

/* ─── Single Card ─── */
function ProjectCard({ proj, index, onPlay }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const thumbnailUrl = proj.youtubeId
    ? `https://i.ytimg.com/vi/${proj.youtubeId}/hqdefault.jpg`
    : null;

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.12,
        ease: 'power3.out',
      }
    );
  }, [index]);

  const isFacebook = !proj.youtubeId;

  const handlePlay = () => {
    if (isFacebook) {
      window.open(proj.videoUrl, '_blank', 'noopener,noreferrer');
    } else {
      onPlay(proj);
    }
  };

  return (
    <div
      ref={cardRef}
      className="proj-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '20px',
        background: proj.isAccent
          ? 'linear-gradient(135deg, #0c0a09 0%, #1a1a1a 100%)'
          : proj.platformBg,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        border: proj.isAccent
          ? '1.5px solid var(--color-lime-spark)'
          : '1px solid rgba(255,255,255,0.08)',
        transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered
          ? proj.isAccent
            ? '0 20px 50px rgba(150,255,26,0.2), 0 0 0 1px rgba(150,255,26,0.3)'
            : '0 20px 50px rgba(0,0,0,0.45)'
          : '0 4px 20px rgba(0,0,0,0.15)',
      }}
    >
      {/* ── Video / Thumbnail Area ── */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '65%',
          overflow: 'hidden',
          borderRadius: '20px 20px 0 0',
          backgroundColor: '#000',
          transition: 'padding-top 0.4s ease',
        }}
      >
        /* ── Thumbnail + Play Button ── */
        <>
          {thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                alt={proj.title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  transform: hovered ? 'scale(1.06)' : 'scale(1)',
                }}
              />
            ) : (
              /* Facebook fallback */
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, #1877f2 0%, #003da5 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ opacity: 0.12, transform: 'scale(6)' }}>
                  <FacebookIcon />
                </div>
              </div>
            )}

            {/* Dark overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: hovered
                  ? 'rgba(0,0,0,0.55)'
                  : 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6) 100%)',
                transition: 'background 0.3s ease',
              }}
            />

            {/* Big Play Button */}
            <button
              onClick={handlePlay}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: hovered
                  ? 'translate(-50%, -50%) scale(1.1)'
                  : 'translate(-50%, -50%) scale(1)',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: proj.isAccent ? 'var(--color-lime-spark)' : '#ffffff',
                color: proj.isAccent ? 'var(--color-forest-ink)' : '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
                transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease',
                opacity: hovered ? 1 : 0.85,
                paddingLeft: '4px',
                zIndex: 3,
              }}
            >
              <PlayIcon size={24} />
            </button>

            {/* Platform badge */}
            <div
              style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                backgroundColor: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: '600',
                padding: '5px 12px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                border: '1px solid rgba(255,255,255,0.1)',
                zIndex: 2,
              }}
            >
              <span style={{ color: proj.platformColor }}>{proj.icon}</span>
              {proj.platform}
            </div>

            {proj.isAccent && (
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: 'var(--color-lime-spark)',
                  color: 'var(--color-forest-ink)',
                  fontSize: '9px',
                  fontWeight: '800',
                  padding: '3px 10px',
                  borderRadius: '20px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  zIndex: 2,
                }}
              >
                ★ Featured
              </div>
            )}
          </>
      </div>

      {/* ── Card Body ── */}
      <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* Channel row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: proj.platformColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                flexShrink: 0,
              }}
            >
              {proj.icon}
            </div>
            <div>
              <div style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', lineHeight: 1.2 }}>
                {proj.channelName}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', lineHeight: 1.2 }}>
                {proj.channelHandle}
              </div>
            </div>
          </div>
          <a
            href={proj.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="channel-link-btn"
            style={{
              color: 'rgba(255,255,255,0.6)',
              backgroundColor: 'rgba(255,255,255,0.08)',
              borderRadius: '8px',
              padding: '6px 10px',
              fontSize: '10px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'all 0.2s ease',
              border: '1px solid rgba(255,255,255,0.1)',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
            }}
          >
            Xem kênh <ExternalLinkIcon />
          </a>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.08)' }} />

        {/* Title */}
        <h3
          style={{
            color: proj.isAccent ? 'var(--color-lime-spark)' : '#ffffff',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '1.3',
            margin: 0,
            fontFamily: 'var(--font-swissnow)',
          }}
        >
          {proj.title}
        </h3>

        {/* Description */}
        <p
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '12px',
            lineHeight: '1.55',
            margin: 0,
            flex: 1,
            fontFamily: 'var(--font-swissnow)',
          }}
        >
          {proj.desc}
        </p>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
          <button
            onClick={handlePlay}
            className="watch-btn"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '11px 16px',
              borderRadius: '12px',
              backgroundColor: proj.isAccent ? 'var(--color-lime-spark)' : 'rgba(255,255,255,0.12)',
              color: proj.isAccent ? 'var(--color-forest-ink)' : '#ffffff',
              fontSize: '12px',
              fontWeight: '700',
              border: proj.isAccent ? 'none' : '1px solid rgba(255,255,255,0.1)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
          >
            <PlayIcon size={14} /> Xem video ngay
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export default function ProjectsCarousel() {
  const sectionRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeVideo]);

  const getEmbedSrc = (proj) => {
    if (proj.youtubeId) {
      return `https://www.youtube-nocookie.com/embed/${proj.youtubeId}?autoplay=1&rel=0&modestbranding=1&controls=1&fs=1`;
    }
    return proj.embedUrl || '';
  };

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            sectionRef.current.querySelectorAll('.section-header-anim'),
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out' }
          );
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="showcase"
      ref={sectionRef}
      style={{
        paddingTop: '96px',
        paddingBottom: '96px',
        position: 'relative',
        zIndex: 1,
        backgroundColor: 'var(--color-paper)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span
            className="font-swiss section-header-anim"
            style={{
              fontSize: '11px',
              fontWeight: '700',
              color: 'var(--color-forest-ink)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              backgroundColor: 'var(--color-spring-wash)',
              padding: '5px 14px',
              borderRadius: '20px',
              display: 'inline-block',
              marginBottom: '16px',
            }}
          >
            🎬 Creative Work
          </span>
          <h2
            className="font-swiss section-header-anim"
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              lineHeight: '1.1',
              color: 'var(--color-carbon)',
              fontWeight: '700',
              margin: '0 0 10px',
            }}
          >
            Video nổi bật đã thực hiện
          </h2>
          <p
            className="font-swiss section-header-anim"
            style={{
              color: 'var(--color-smoke)',
              fontSize: '16px',
              lineHeight: '1.5',
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            Những video được tạo ra cho các kênh thương hiệu thực tế — nhấn play để xem trực tiếp
          </p>
        </div>

        {/* ── Grid of 4 Cards ── */}
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
        >
          {projects.map((proj, index) => (
            <ProjectCard key={proj.id} proj={proj} index={index} onPlay={setActiveVideo} />
          ))}
        </div>
      </div>

      {/* ── Video Modal ── */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(10px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              onClick={() => setActiveVideo(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                color: '#fff',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10000,
                transition: 'background 0.2s',
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              ✕
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: activeVideo.youtubeId ? '450px' : '900px',
                height: activeVideo.youtubeId ? '80vh' : '60vh',
                aspectRatio: activeVideo.youtubeId ? '9/16' : '16/9',
                maxHeight: '90vh',
                backgroundColor: '#000',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              }}
              onClick={(e) => e.stopPropagation()} 
            >
              <iframe
                src={getEmbedSrc(activeVideo)}
                title={activeVideo.title}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  display: 'block',
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .channel-link-btn:hover {
          background-color: rgba(255,255,255,0.18) !important;
          color: #ffffff !important;
        }
        .watch-btn:hover {
          filter: brightness(1.15);
          transform: translateY(-1px);
        }

        /* Responsive grid */
        @media (max-width: 1100px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            max-width: 380px;
            margin: 0 auto;
          }
        }
      `}} />
    </section>
  );
}
