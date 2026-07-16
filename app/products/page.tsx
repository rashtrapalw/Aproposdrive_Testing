'use client';

import type { ReactNode } from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useSpring, useMotionValue } from 'motion/react';
import {
  Battery, Gauge, Zap, Shield, Cpu, Package,
  CheckCircle, Leaf, TrendingUp,
  Activity, Thermometer, Wifi, Wind, Weight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ImageWithFallback } from '../../src/app/components/figma/ImageWithFallback';

// ─── ORBITAL CANVAS CONSTANTS ─────────────────────────────────────────────────
const C = 460;
const CX = C / 2;
const CY = C / 2;
const R = 230;
const CW = 112;
const CH = 88;
const IMG = 400;

type Spec = {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
  angle: number;
};

type Variant = {
  name: string;
  cols: string[][];
};

type Product = {
  id: number;
  slug: string;
  num: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accent: string;
  features: { icon: LucideIcon; text: string }[];
  specs: Spec[];
  variants: Variant[];
  tableHeaders: string[];
  tableRows: string[][];
  platforms?: string[];
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const PRODUCTS: Product[] = [
  {
    id: 1, num: '01', tag: 'Powertrain',
    slug: "powertrain",
    title: 'Integrated EV Powertrain ',
    subtitle: 'Compact. Rare-earth-free. Purpose-built.',
    description: 'A single unified unit combining motor, gearbox, and controller — air-cooled, IP67-sealed, and engineered for electric scooters at scale.',
    image: '/photos/motor-removebg.png',
    accent: '#00a550',
    features: [
      { icon: Leaf, text: 'Rare Earth-Free Motor Technology' },
      { icon: Package, text: 'Motor + Controller + Gearbox in One Unit' },
      { icon: Wind, text: 'Natural Air Cooling — No Liquid Needed' },
      { icon: TrendingUp, text: '94–95% Efficiency, Extended Range' },
      { icon: Shield, text: 'IP67 Sealed — All-Weather Reliable' },
      { icon: Zap, text: 'Lower System Cost for Mass Adoption' },
    ],
    specs: [
      // { icon: Gauge, label: 'Peak Power', value: '6.5 kW', color: '#00a550', angle: 270 },
      // { icon: Activity, label: 'Peak Torque', value: '200 Nm', color: '#00a550', angle: 330 },
      // { icon: TrendingUp, label: 'Efficiency', value: '95%', color: '#0077b6', angle: 30 },
      // { icon: Weight, label: 'Weight', value: '7.5 kg', color: '#00a550', angle: 90 },
      // { icon: Shield, label: 'Protection', value: 'IP67', color: '#0077b6', angle: 150 },
      // { icon: Battery, label: 'Voltage', value: '48/60V', color: '#00a550', angle: 210 },
    ],
    variants: [
      // { name: 'Series 70', cols: [['Power', '2.5 kW'], ['Torque', '160 Nm'], ['Weight', '6.5 kg']] },
      // { name: 'Series 85', cols: [['Power', '4 kW'], ['Torque', '200 Nm'], ['Weight', '7.5 kg']] },
    ],
    tableHeaders: ['Spec', 'Series 70', 'Series 85'],
    tableRows: [
      ['Tyre Size', '12 inch', '12 inch'], ['Nominal Power', '2.5 kW', '4 kW'],
      ['Peak Power', '5.5 kW', '6.5 kW'], ['Peak Torque', '160 Nm', '200 Nm'],
      ['Efficiency', '94%', '95%'], ['Weight', '6.5 kg', '7.5 kg'],
      ['Voltage', '48/60V', '48/60V'], ['Protection', 'IP67', 'IP67'], ['Cooling', 'Air', 'Air'],
    ],
  },
  {
    id: 2, num: '02', tag: 'Controller',
    slug: "controller",
    title: 'EV Motor Controller',
    subtitle: 'Precise. Thermal-stable. Intelligent.',
    description: 'High-performance vector field-oriented motor controller for light EVs — with ride modes, hill hold, and real-time diagnostics built in.',
    image: '/photos/no-bg-controller.png',
    accent: '#0077b6',
    features: [
      { icon: Cpu, text: 'Vector Field-Oriented Control Algorithm' },
      { icon: Activity, text: 'Hall Sensor / Resolver Position Feedback' },
      { icon: Gauge, text: '3 Ride Modes + Cruise Control' },
      { icon: Shield, text: 'Hill Hold Assist + Parking Assist' },
      { icon: Wifi, text: 'CAN + USB Communication Interface' },
      { icon: CheckCircle, text: 'Real-time Fault LED Diagnostics' },
    ],
    specs: [
      // { icon: Zap, label: 'Peak Current', value: '280A', color: '#0077b6', angle: 270 },
      // { icon: Activity, label: 'Power Range', value: '3–7 kW', color: '#0077b6', angle: 330 },
      // { icon: Thermometer, label: 'Temp Range', value: '±90°C', color: '#00a550', angle: 30 },
      // { icon: Shield, label: 'Protection', value: 'IP67', color: '#0077b6', angle: 90 },
      // { icon: Wifi, label: 'Comms', value: 'CAN+USB', color: '#00a550', angle: 150 },
      // { icon: Cpu, label: 'Control', value: 'PMSM FOC', color: '#0077b6', angle: 210 },
    ],
    variants: [
      // { name: 'Variant 1', cols: [['Power', '1–4 kW'], ['Current', '160A'], ['Voltage', '48–72V']] },
      // { name: 'Variant 2', cols: [['Power', '3–7 kW'], ['Current', '280A'], ['Voltage', '48–72V']] },
    ],
    tableHeaders: ['Spec', 'Variant 1', 'Variant 2'],
    tableRows: [
      ['Power Range', '1–4 kW', '3–7 kW'], ['Peak Current', '160 Arms', '280 Arms'],
      ['Rated Current', '50 Arms', '90 Arms'], ['Voltage', '48/60/72V', '48/60/72V'],
      ['Dimensions', '165×109×45mm', '214×119×45mm'], ['Temp Range', '-20 to +90°C', '-20 to +90°C'],
      ['Protection', 'IP67', 'IP67'], ['Control', 'PMSM FOC', 'PMSM FOC'], ['Comms', 'CAN + USB', 'CAN + USB'],
    ],
    // platforms: ['2-wheelers (L2)', '3-wheelers (L3)', 'Custom EV Platforms'],
  },
];

// ─── ORBITAL SHOWCASE (kept as-is — image + circular orbit points) ────────────
function OrbitalShowcase({ product, idx }: { product: Product; idx: number }) {
  const floatY = useMotionValue(0);
  const springY = useSpring(floatY, { stiffness: 45, damping: 14 });

  useEffect(() => {
    let raf: number;
    let t0: number | null = null;
    const loop = (ts: number) => {
      if (!t0) t0 = ts;
      floatY.set(Math.sin(((ts - t0) / 1000) * 0.5 + idx) * 10);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [floatY, idx]);

  return (
    <div style={{ position: 'relative', width: C, height: C, flexShrink: 0 }}>
      {[R * 2 + 20, R * 2 + 90].map((d, i) => (
        <motion.div key={d}
          style={{
            position: 'absolute',
            width: d, height: d,
            left: CX - d / 2, top: CY - d / 2,
            borderRadius: '50%',
            border: `1px solid ${product.accent}${i === 0 ? '25' : '10'}`,
            pointerEvents: 'none',
          }}
          animate={{ rotate: i === 0 ? 360 : -360 }}
          transition={{ duration: i === 0 ? 28 : 44, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      <svg style={{ position: 'absolute', inset: 0, width: C, height: C, overflow: 'visible', pointerEvents: 'none' }}>
        {product.specs.map((s) => {
          const rad = (s.angle * Math.PI) / 180;
          const innerR = IMG / 2 + 8;
          return (
            <g key={s.label}>
              <line
                x1={CX + Math.cos(rad) * innerR} y1={CY + Math.sin(rad) * innerR}
                x2={CX + Math.cos(rad) * (R - CW / 2 - 4)}
                y2={CY + Math.sin(rad) * (R - CH / 2 - 4)}
                stroke={s.color} strokeWidth="1" strokeDasharray="4 5" strokeOpacity="0.4"
              />
              <circle
                cx={CX + Math.cos(rad) * (R + CW / 2 + 6)}
                cy={CY + Math.sin(rad) * (R + CH / 2 + 6)}
                r="3" fill={s.color} opacity="0.65"
              />
            </g>
          );
        })}
      </svg>

      <div style={{
        position: 'absolute',
        width: IMG + 80, height: IMG + 80,
        left: CX - (IMG + 80) / 2, top: CY - (IMG + 80) / 2,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${product.accent}28 0%, transparent 70%)`,
        filter: 'blur(28px)',
        pointerEvents: 'none',
      }} />

      <motion.div style={{
        position: 'absolute',
        left: CX - IMG / 2, top: CY - IMG / 2,
        width: IMG, height: IMG,
        y: springY,
        zIndex: 10,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* <motion.div style={{
          position: 'absolute', left: 0, right: 0, height: 1,
          background: `linear-gradient(90deg,transparent,${product.accent}99,transparent)`,
          zIndex: 20, pointerEvents: 'none',
        }}
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
        /> */}
        <ImageWithFallback
          src={product.image} alt={product.title}
          style={{
            width: '100%', height: '100%', objectFit: 'contain',
            filter: `drop-shadow(0 8px 32px ${product.accent}60)`,
          }}
        />
      </motion.div>

      {product.specs.map((s, i) => {
        const rad = (s.angle * Math.PI) / 180;
        const cx = CX + Math.cos(rad) * R;
        const cy = CY + Math.sin(rad) * R;
        const Icon = s.icon;
        return (
          <OrbCard key={s.label} spec={s} Icon={Icon}
            left={cx - CW / 2} top={cy - CH / 2}
            delay={i * 0.07}
          />
        );
      })}
    </div>
  );
}

// ─── ORBITAL CARD (kept as-is) ────────────────────────────────────────────────
function OrbCard({ spec, Icon, left, top, delay }: { spec: Spec; Icon: LucideIcon; left: number; top: number; delay: number }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, margin: '-10% 0px' }}
      transition={{ delay, type: 'spring', stiffness: 200, damping: 20 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      whileHover={{ scale: 1.1, y: -3 }}
      style={{
        position: 'absolute',
        left, top,
        width: CW, height: CH,
        zIndex: 20,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: 5,
        borderRadius: 16,
        background: hov ? 'rgba(79, 193, 77, 0.88)' : 'rgba(110, 184, 110, 0.88)',
        border: `1px solid ${hov ? spec.color + '65' : spec.color + '28'}`,
        backdropFilter: 'blur(18px)',
        boxShadow: hov
          ? `0 0 22px ${spec.color}30, 0 8px 28px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)`
          : `0 4px 16px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)`,
        transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s',
        cursor: 'default', userSelect: 'none',
        overflow: 'hidden',
      }}
    >
      {hov && (
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 16, pointerEvents: 'none',
          background: `radial-gradient(circle at 50% 0%, ${spec.color}18, transparent 70%)`,
        }} />
      )}
      <div style={{
        width: 30, height: 30, borderRadius: 8, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `${spec.color}1a`, border: `1px solid ${spec.color}44`,
      }}>
        <Icon style={{ width: 14, height: 14, color: spec.color }} />
      </div>
      <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 900, color: '#090606', fontSize: 13, lineHeight: 1 }}>
        {spec.value}
      </span>
      <span style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(34, 13, 13, 0.71)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1, textAlign: 'center', padding: '0 6px' }}>
        {spec.label}
      </span>
    </motion.div>
  );
}

// ─── FEATURE ROW — no box, no border, big & dark ──────────────────────────────
function FeatureRow({ icon: Icon, text, color, delay }: { icon: LucideIcon; text: string; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: '-5% 0px' }}
      transition={{ delay, duration: 0.35 }}
      style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '6px 0' }}
    >
      <div style={{
        width: 30, height: 30, borderRadius: 9, flexShrink: 0, marginTop: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `${color}14`,
      }}>
        <Icon style={{ width: 16, height: 16, color }} strokeWidth={2.3} />
      </div>
      <span style={{ fontSize: 16, fontWeight: 600, fontFamily: 'DM Sans, sans-serif', color: '#0d1b2a', lineHeight: 1.5 }}>
        {text}
      </span>
    </motion.div>
  );
}

// ─── VARIANT CARD ─────────────────────────────────────────────────────────────
function VariantCard({ variant, accent, delay }: { variant: Variant; accent: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-5% 0px' }}
      transition={{ delay, duration: 0.38 }}
      style={{
        padding: '14px 16px', borderRadius: 16,
        background: '#ffffff',
        border: `1px solid #e2eaf2`,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 900, color: '#0d1b2a', fontSize: 14 }}>{variant.name}</span>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, background: `${accent}14`, color: accent }}>Available</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
        {variant.cols.map(([k, v]) => (
          <div key={k}>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(13,27,42,0.4)', marginBottom: 3 }}>{k}</div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 700, color: '#0d1b2a' }}>{v}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── FULL-WIDTH SPECS TABLE — always visible, no accordion ───────────────────
function SpecsTable({ headers, rows, accent, delay }: { headers: string[]; rows: string[][]; accent: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-5% 0px' }}
      transition={{ delay, duration: 0.45 }}
      style={{ width: '100%', borderRadius: 20, overflow: 'hidden', border: `1px solid #e2eaf2`, background: '#ffffff', boxShadow: '0 2px 16px rgba(13,27,42,0.05)' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 20px', borderBottom: `1px solid #e2eaf2` }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: accent, flexShrink: 0 }} />
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#0d1b2a' }}>
          Full Specifications
        </span>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
          <thead>
            <tr style={{ background: '#f4f7f6' }}>
              {headers.map((h, i) => (
                <th key={i} style={{ padding: '12px 20px', textAlign: 'left', fontFamily: 'DM Sans, sans-serif', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: i === 0 ? 'rgba(13,27,42,0.5)' : accent, fontWeight: 700 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} style={{ borderTop: '1px solid #eef2f0' }}>
                {row.map((cell, ci) => (
                  <td key={ci} style={{ padding: '12px 20px', fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: ci === 0 ? 700 : 500, color: ci === 0 ? '#0d1b2a' : 'rgba(13,27,42,0.65)' }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

// ─── useWindowWidth ────────────────────────────────────────────────────────────
function useWindowWidth() {
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return w;
}

// ─── PRODUCT BLOCK ─────────────────────────────────────────────────────────────
function ProductBlock({ product, index }: { product: Product; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-6% 0px' });
  const width = useWindowWidth();
  const isMobile = width < 900;
  const isTablet = width < 1100;
  const reverseLayout = index % 2 === 1;

  const LabelRow = (
    <motion.div
      initial={{ opacity: 0, y: -10 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: isMobile ? 20 : 32 }}
    >
      <div style={{ height: 2, width: 80, background: `linear-gradient(90deg,${product.accent},transparent)` }} />
      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.28em', color: product.accent }}>
        Product {product.num}
      </span>
    </motion.div>
  );

  const TitleBlock = (fs = 22) => (
    <div>
      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.22em', color: product.accent, display: 'block', marginBottom: 8 }}>
        {product.tag}
      </span>
      <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 900, fontSize: fs, lineHeight: 1.2, color: '#0d1b2a', margin: '0 0 8px' }}>
        {product.title.split(' ').slice(0, -2).join(' ')}{' '}
        <span style={{ color: product.accent }}>{product.title.split(' ').slice(-2).join(' ')}</span>
      </h3>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontStyle: 'italic', color: product.accent, opacity: 0.85, margin: '0 0 10px' }}>{product.subtitle}</p>
      {/* <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: isMobile ? 15 : 16, lineHeight: 1.7, color: 'rgba(13,27,42,0.62)', margin: 0 }}>{product.description}</p> */}
    </div>
  );

  const FeaturesList = (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {product.features.map((f, i) => (
        <FeatureRow key={i} icon={f.icon} text={f.text} color={product.accent} delay={i * 0.04} />
      ))}
    </div>
  );

  const PlatformsBlock = product.platforms && (
    <div style={{ padding: '14px 16px', borderRadius: 14, background: '#f4f7f6', border: `1px solid #e2eaf2` }}>
      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'rgba(13,27,42,0.45)', marginBottom: 8 }}>Compatible Platforms</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {product.platforms.map(p => (
          <span key={p} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 600, padding: '5px 12px', borderRadius: 10, background: '#ffffff', border: '1px solid #e2eaf2', color: '#0d1b2a' }}>{p}</span>
        ))}
      </div>
    </div>
  );

  const ContentColumn = (
    <motion.div
      initial={{ opacity: 0, x: isMobile ? 0 : reverseLayout ? 24 : -24, y: isMobile ? 16 : 0 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: isMobile ? 0 : reverseLayout ? 24 : -24, y: isMobile ? 16 : 0 }}
      transition={{ duration: 0.5, delay: 0.05 }}
      style={{
        width: isMobile ? '100%' : isTablet ? 420 : 500,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
      }}
    >
      {TitleBlock(isMobile ? 26 : isTablet ? 22 : 26)}
      {FeaturesList}
      {PlatformsBlock}
      {product.variants.map((v, i) => (
        <VariantCard key={v.name} variant={v} accent={product.accent} delay={i * 0.08} />
      ))}
    </motion.div>
  );

  const ImageColumn = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: 0.08 }}
      style={{
        flex: isMobile ? undefined : 1,
        width: isMobile ? '100%' : undefined,
        minWidth: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ScaleBox canvasSize={C}>
        <OrbitalShowcase product={product} idx={index} />
      </ScaleBox>
    </motion.div>
  );

  return (
  <section
    id={product.id === 1 ? 'powertrain' : 'controller'}
  
    ref={ref}
    className="scroll-mt-28"
    style={{ marginBottom: isMobile ? 56 : 72 }}
  >
      {LabelRow}

      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : reverseLayout ? 'row-reverse' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: isMobile ? 24 : isTablet ? 28 : 48,
          minWidth: 0,
          marginBottom: 32,
        }}
      >
        {ContentColumn}
        {ImageColumn}
      </div>

      {/* Full-width specs table — always visible, no click needed */}
      <SpecsTable headers={product.tableHeaders} rows={product.tableRows} accent={product.accent} delay={0.1} />
    </section>
  );
}

// ─── SCALE BOX (kept as-is) ────────────────────────────────────────────────────
function ScaleBox({ canvasSize, children }: { canvasSize: number; children: ReactNode }) {
  const wrapRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new ResizeObserver(([entry]) => {
      const avail = entry.contentRect.width;
      if (avail > 0) setScale(Math.min(1, avail / canvasSize));
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [canvasSize]);

  return (
    <div ref={wrapRef} style={{ width: '100%', height: canvasSize * scale, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
      <div style={{ transform: `scale(${scale})`, transformOrigin: 'center center', flexShrink: 0 }}>
        {children}
      </div>
    </div>
  );
}

// ─── DIVIDER ──────────────────────────────────────────────────────────────────
function Divider() {
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '48px 0' }}>
      <div style={{ position: 'absolute', left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(0,165,80,0.25),transparent)' }} />
      <div style={{ position: 'relative', zIndex: 1, padding: '7px 22px', borderRadius: 20, background: '#fafcfb', border: '1px solid #e2eaf2', fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', color: 'rgba(13,27,42,0.4)' }}>
        Next Product
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function ProductsPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false, margin: '-8% 0px' });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700;9..40,900&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      <section id="products" style={{ position: 'relative', padding: '60px 0 80px', overflow: 'hidden', background: '#fafcfb', fontFamily: 'DM Sans, sans-serif' }}>

        {/* ── Background — matches site theme ── */}
        {/* <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(13,27,42,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(13,27,42,0.03) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
          <div style={{ position: 'absolute', top: -96, left: -96, width: 384, height: 384, borderRadius: '50%', background: '#00a550', filter: 'blur(128px)', opacity: 0.1 }} />
          <div style={{ position: 'absolute', top: 40, right: -60, width: 384, height: 384, borderRadius: '50%', background: '#0077b6', filter: 'blur(128px)', opacity: 0.08 }} />
        </div> */}

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto', padding: '0 16px' }}>

          {/* ── Header ── */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }} animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 64, marginTop: 20, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}
          >
           
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 900, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 12, fontSize: 'clamp(30px,4.5vw,42px)' }}>
              <span style={{ color: '#0d1b2a' }}>EV Powertrain &amp; </span>
              <span style={{ color: '#00a550' }}>Motor Controller</span>
            </h2>
            {/* <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: 'rgba(13,27,42,0.55)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Advanced electric mobility systems engineered for Indian roads — built for efficiency, reliability, and scale.
            </p> */}
          </motion.div>

          {/* ── Products ── */}
          {PRODUCTS.map((p, i) => (
            <div key={p.id}>
              <ProductBlock product={p} index={i} />
              {i < PRODUCTS.length - 1 && <Divider />}
            </div>
          ))}

        </div>
      </section>
    </>
  );
}