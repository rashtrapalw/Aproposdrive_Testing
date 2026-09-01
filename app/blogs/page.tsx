'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../src/app/components/figma/ImageWithFallback';
import { BreadcrumbSchema } from '../../src/app/components/seo/BreadcrumbSchema';

type BlogPost = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  accent: string;
  link: string;
};

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    category: 'Technology',
    title: 'Rare-Earth-Free Technology: Building a More Sustainable Future',
    excerpt:
      'As the world moves rapidly toward electric mobility, renewable energy, and cleaner technologies, one challenge is becoming increasingly important: how do we build the technologies of tomorrow without depending heavily on scarce and geopolitically concentrated materials? ',
    image: '/photos/RareEarth_Technology.webp',
    date: 'Jun 12, 2026',
    readTime: '7 min read',
    accent: '#00a550',
    link: 'https://medium.com/@vedika.capt/rare-earth-free-technology-building-a-more-sustainable-future-8740d8888a2f',
  },
  {
    id: 2,
    category: 'Engineering',
    title: 'Why India Needs Rare-Earth-Free Motor Technology',
    excerpt:
      'Electric motors sit at the heart of India’s clean-mobility and industrial ambitions — from two-wheelers and passenger EVs to wind turbines, robotics, and defence systems. Most high-performance motors built today rely on permanent magnets made from neodymium, dysprosium, and terbium: ',
    image: '/photos/Blog2.webp',
    date: 'May 28, 2026',
    readTime: '8 min read',
    accent: '#0077b6',
    link: 'https://medium.com/@vedika.capt/why-india-needs-rare-earth-free-motor-technology-f836490b17d1',
  },
  {
  //   id: 3,
  //   category: 'Industry',
  //   title: "India's EV Adoption Curve: What the Next Five Years Look Like",
  //   excerpt:
  //     'From policy incentives to charging infrastructure , we break down the trends shaping electric two- and three-wheeler adoption across urban and rural markets.',
  //   image: '/photos/RareEarth_Technology.webp',
  //   date: 'May 14, 2026',
  //   readTime: '5 min read',
  //   accent: '#00a550',
  //   link: 'https://medium.com/@vedika.capt/indias-ev-adoption-curve-what-the-next-five-years-look-like-8b8b8b8b8b8b',
  // },
 
];

// ─── Blog Card ─────────────────────────────────────────────────────────────────
function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-8% 0px' }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-2xl overflow-hidden min-w-0"
      style={{
        background: '#ffffff',
        border: '1px solid #e2eaf2',
        boxShadow: '0 2px 16px rgba(13,27,42,0.05)',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 12px 32px ${post.accent}22`
        e.currentTarget.style.borderColor = `${post.accent}45`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 16px rgba(13,27,42,0.05)'
        e.currentTarget.style.borderColor = '#e2eaf2'
      }}
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 10', background: '#f4f7f6' }}>
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>
        <span
          className="absolute top-3 left-3 px-3 py-1 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.94)',
            border: `1px solid ${post.accent}40`,
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.06em',
            color: post.accent,
          }}
        >
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 900,
            fontSize: 18,
            lineHeight: 1.35,
            color: '#00a550',
            margin: 0,
          }}
        >
          {post.title}
        </h3>

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 14,
            lineHeight: 1.65,
            color: 'rgba(1, 7, 14, 0.99)',
            margin: 0,
            flex: 1,
          }}
        >
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid #eef2f0' }}>
          <div className="flex items-center gap-3" style={{ marginTop: 12 }}>
            <span className="flex items-center gap-1.5" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'rgba(13,27,42,0.45)' }}>
              <Calendar style={{ width: 13, height: 13 }} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'rgba(13,27,42,0.45)' }}>
              <Clock style={{ width: 13, height: 13 }} />
              {post.readTime}
            </span>
          </div>
          <div
            className="flex items-center justify-center rounded-full flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
            style={{
              width: 28, height: 28, marginTop: 12,
              background: `${post.accent}14`,
              border: `1px solid ${post.accent}35`,
            }}
          >
            <ArrowRight style={{ width: 13, height: 13, color: post.accent }} />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
export default function BlogsPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false, margin: '-8% 0px' });

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Blogs', path: '/blogs/' },
        ]}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700;9..40,900&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      <main
        className="relative overflow-hidden w-full"
        style={{ background: '#fafcfb', fontFamily: 'DM Sans, sans-serif', padding: '80px 0 96px' }}
      >
        {/* ── Background — matches site theme ── */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(13,27,42,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(13,27,42,0.03) 1px,transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full" style={{ background: '#00a550', filter: 'blur(128px)', opacity: 0.1 }} />
          <div className="absolute top-10 right-[-60px] w-96 h-96 rounded-full" style={{ background: '#0077b6', filter: 'blur(128px)', opacity: 0.08 }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* ── Header ── */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.55 }}
            className="text-center mb-14 sm:mb-16"
          >
            
            <h1 className="font-black leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(32px,5vw,52px)' }}>
              <span style={{ color: '#0d1b2a' }}>Insights &amp; </span>
              <span style={{ color: '#00a550' }}>Updates</span>
            </h1>
            <p style={{ color: 'rgba(13,27,42,0.55)', fontSize: 16, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Perspectives on EV powertrain engineering, sustainability, and the road ahead for electric mobility in India.
            </p>
          </motion.div>

          {/* ── Blog grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
