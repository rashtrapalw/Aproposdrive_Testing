'use client';

import type { ReactNode } from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useSpring, useMotionValue } from 'motion/react';
import {
  Gauge, Zap, Shield, Cpu, Package,
  CheckCircle, Leaf, TrendingUp,
  Activity, Wifi, Wind, Cog, IndianRupee,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ImageWithFallback } from '../../src/app/components/figma/ImageWithFallback';

// ─── ORBITAL CANVAS CONSTANTS ─────────────────────────────────────────────────
const C = 1000;
const CX = C / 2;
const CY = C / 2-150;
const R = 450;
const CW = 300;
const CH = 130;
const IMG = 500;

type Spec = {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
  angle: number;
  description?: string;
};

// KeyFeaturePoint — separate, simpler data for the Key Features panel next
// to the specs table. Just an icon + a one-liner, independent of the
// specs shown around the hero image.
type KeyFeaturePoint = {
  icon: LucideIcon;
  text: string;
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
  keyFeatures: KeyFeaturePoint[];
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
    image: '/photos/EvPowertrain.png',
    accent: '#00a550',
    keyFeatures: [
      { icon: Leaf, text: 'Rare Earth-Free Motor' },
      { icon: Package, text: 'All-in-One Unit' },
      { icon: Wind, text: 'Air Cooled' },
      { icon: TrendingUp, text: '95% Efficiency' },
      { icon: Shield, text: 'IP67 Sealed' },
      { icon: Zap, text: 'Lower System Cost' },
    ],
    specs: [
      { icon: TrendingUp, label: 'Efficiency\nExtended Range', value: '94–95%', color: '#00a550', angle: 0, description: 'High system efficiency translates directly into longer rides per charge and lower running costs.' },
      { icon: Shield, label: 'All-Weather\nReliable', value: 'IP67 Sealed', color: '#00a550', angle: 30, description: 'Fully sealed against dust and water, built to perform through monsoons, heat, and rough terrain.' },
      { icon: IndianRupee, label: 'Mass\nAdoption', value: 'Lower Cost', color: '#00a550', angle: 150, description: 'Simplified architecture reduces bill-of-materials cost, making EVs more accessible at scale.' },
      { icon: Cog, label: 'Motor + Controller\n+ Gearbox', value: 'All-in-One Unit', color: '#00a550', angle: 180, description: 'A single integrated housing replaces three separate components, saving space, weight, and assembly cost.' },
      { icon: Wind, label: 'No Liquid\nNeeded', value: 'Air Cooling', color: '#00a550', angle: 210, description: 'Passive air cooling keeps temperatures stable without pumps, hoses, or coolant maintenance.' },
      { icon: Leaf, label: 'Motor\nTechnology', value: 'Rare Earth-Free', color: '#00a550', angle: 330, description: 'Engineered without rare-earth magnets, cutting supply-chain risk while delivering reliable, consistent torque.' },
    ],
    variants: [
      // { name: 'Series 70', cols: [['Power', '2.5 kW'], ['Torque', '160 Nm'], ['Weight', '6.5 kg']] },
      // { name: 'Series 85', cols: [['Power', '4 kW'], ['Torque', '200 Nm'], ['Weight', '7.5 kg']] },
    ],
   tableHeaders: ['Spec', '70', '85'],

    tableRows: [
      ['Tyre Size', '12 Inch', '12 Inch'],
      ['Nominal Power', '2.5 kW', '4 kW'],
      ['Peak Power', '5.5 kW', '6.5 kW'],
      ['Peak Torque', '160 Nm', '200 Nm'],
      ['Peak Motor Efficiency', '94%', '95%'],
      ['System Weight', '6.5 kg', '7.5 kg'],
      ['System Voltage', '48 / 60 V', '48 / 60 V'],
      ['Ingress Protection', 'IP67', 'IP67'],
      ['Cooling', 'Natural Air', 'Natural Air'],
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
    keyFeatures: [
      { icon: Cpu, text: 'Vector FOC Algorithm' },
      { icon: Activity, text: 'Precise Position Feedback' },
      { icon: Gauge, text: '3 Ride Modes + Cruise' },
      { icon: Shield, text: 'Hill Hold + Parking Assist' },
      { icon: Wifi, text: 'CAN + USB Interface' },
      { icon: CheckCircle, text: 'Real-time Diagnostics' },
    ],
    specs: [
      { icon: Cpu, label: 'Control Algorithm', value: 'Vector FOC', color: '#0077b6', angle: 0, description: 'Advanced FOC delivers smoother acceleration, better torque control, and higher overall efficiency.' },
      { icon: Activity, label: 'Hall Sensor / Resolver', value: 'Position Feedback', color: '#0077b6', angle: 30, description: 'Precise rotor position sensing enables accurate, responsive control across every ride mode.' },
      { icon: Gauge, label: '+ Cruise Control', value: '3 Ride Modes', color: '#0077b6', angle: 150, description: 'Switch between Eco, Normal, and Sport modes, plus cruise control for long, comfortable rides.' },
      { icon: Shield, label: '+ Parking Assist', value: 'Hill Hold Assist', color: '#0077b6', angle: 180, description: 'Prevents rollback on inclines and simplifies parking with dedicated assist functions.' },
      { icon: Wifi, label: 'Communication Interface', value: 'CAN + USB', color: '#0077b6', angle: 210, description: 'Seamless integration with vehicle dashboards and diagnostic tools via industry-standard protocols.' },
      { icon: CheckCircle, label: 'Fault LED Diagnostics', value: 'Real-time', color: '#0077b6', angle: 330, description: 'Instant visual fault indication makes troubleshooting and servicing faster and easier.' },
    ],
    variants: [
      // { name: 'Variant 1', cols: [['Power', '1–4 kW'], ['Current', '160A'], ['Voltage', '48–72V']] },
      // { name: 'Variant 2', cols: [['Power', '3–7 kW'], ['Current', '280A'], ['Voltage', '48–72V']] },
    ],
   tableHeaders: ['Series', '1kW - 4kW', '3kW - 7kW'],

    tableRows: [
      ['Peak Output Current', '160 Arms', '280 Arms'],
      ['Rated Output Current', '50 Arms', '90 Arms'],
      ['Voltage', '48/60/72 V', '48/60/72 V'],
      ['Dimension', '165 × 109 × 45', '214 × 119 × 45'],
      ['Max Operating Temperature', '-20°C to +90°C', '-20°C to +90°C'],
      ['IP Rating', 'IP67', 'IP67'],
      ['Control Type', 'PMSM', 'PMSM'],
      ['Control Algorithm', 'Vector Field-Oriented Control', 'Vector Field-Oriented Control'],
      ['Position Feedback', 'Hall Sensor / Resolver', 'Hall Sensor / Resolver'],
      ['Functions', '3 Ride Modes, Cruise Mode, Parking Assist, Hill Hold Assist', '3 Ride Modes, Cruise Mode, Parking Assist, Hill Hold Assist'],
      ['Communication', 'CAN, USB Interface for GUI Tool', 'CAN, USB Interface for GUI Tool'],
      ['LED Indicator', 'Fault State', 'Fault State'],
    ],
    // platforms: ['2-wheelers (L2)', '3-wheelers (L3)', 'Custom EV Platforms'],
  },
];

// Rounds trig-derived coordinates to a fixed precision so the server-rendered
// and client-rendered numbers always serialize identically — Math.cos/sin can
// differ in their last decimal place between Node and the browser, which was
// causing an SVG path hydration mismatch.
const round = (n: number) => Math.round(n * 100) / 100;

// ─── ORBITAL SHOWCASE — product image with specs arranged around it (DESKTOP/TABLET) ──
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

  // Connector midpoint angle between each adjacent pair of spec cards —
  // this is where the small dot + short dashed arc sits, matching the
  // reference layout (arcs run along the circle, not from the center out).
  const connectors = product.specs.map((s, i) => {
    const next = product.specs[(i + 1) % product.specs.length];
    const nextAngle = i === product.specs.length - 1 ? next.angle + 360 : next.angle;
    return (s.angle + nextAngle) / 2;
  });

  return (
    <div style={{ position: 'relative', width: C, height: C, flexShrink: 0 }}>
      {/* Subtle ring hugging the product image */}
      <div style={{
        position: 'absolute',
        width: IMG + 60, height: IMG + 60,
        left: CX - (IMG + 60) / 2, top: CY - (IMG + 60) / 2,
        borderRadius: '50%',
        border: `1px solid ${product.accent}22`,
        pointerEvents: 'none',
      }} />

      {/* Dashed arc connectors + dot markers between adjacent cards */}
      <svg style={{ position: 'absolute', inset: 0, width: C, height: C, overflow: 'visible', pointerEvents: 'none' }}>
        {connectors.map((m, i) => {
           if (i === 1 || i === 4) return null;
          const pad = 16;
          const a1 = ((m - pad) * Math.PI) / 180;
          const a2 = ((m + pad) * Math.PI) / 180;
          const sx = round(CX + Math.cos(a1) * R);
          const sy = round(CY + Math.sin(a1) * R);
          const ex = round(CX + Math.cos(a2) * R);
          const ey = round(CY + Math.sin(a2) * R);
          const dRad = (m * Math.PI) / 180;
          const dx = round(CX + Math.cos(dRad) * R);
          const dy = round(CY + Math.sin(dRad) * R);
          return (
            <g key={i}>
              <path
                d={`M ${sx} ${sy} A ${R} ${R} 0 0 1 ${ex} ${ey}`}
                fill="none"
                stroke={product.accent}
                strokeWidth="1.4"
                strokeDasharray="4 6"
                strokeOpacity="0.5"
              />
              <circle cx={dx} cy={dy} r="4.5" fill={product.accent} opacity="0.8" />
            </g>
          );
        })}
      </svg>

        <div style={{
          position: 'absolute',
          width: IMG + 90, height: IMG + 90,
          left: CX - (IMG + 90) / 2, top: CY - (IMG + 90) / 2,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${product.accent}22 0%, transparent 70%)`,
          filter: 'blur(30px)',
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

          <ImageWithFallback
            src={product.image} alt={product.title}
            style={{
              width: '100%', height: '100%', objectFit: 'contain',
              // filter: `drop-shadow(0 8px 32px ${product.accent}60)`,
            }}
          />
        </motion.div>

      {product.specs.map((s, i) => {
        const rad = (s.angle * Math.PI) / 180;
        const cx = round(CX + Math.cos(rad) * R);
        const cy = round(CY + Math.sin(rad) * R);
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

// ─── ORBITAL CARD — white rectangular card, icon chip, single combined heading ─
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
      whileHover={{ scale: 1.05, y: -3 }}
      style={{
        position: 'absolute',
        left, top,
        width: CW, height: CH,
        zIndex: 20,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 20,
        background: '#ffffff',
        border: `1px solid ${hov ? spec.color + '55' : '#c7d2da'}`,
        boxShadow: hov
          ? `0 14px 30px ${spec.color}20, 0 2px 10px rgba(13,27,42,0.06)`
          : `0 2px 14px rgba(13,27,42,0.06)`,
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        cursor: 'default', userSelect: 'none',
        padding: '0 14px 14px',
        textAlign: 'center',
        overflow: 'visible',
      }}
    >
      {/* Icon badge — half overlaps the top edge of the card */}
      <div style={{
        position: 'absolute',
        top: -26, left: '50%', transform: 'translateX(-50%)',
        width: 52, height: 52, borderRadius: '50%', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#ffffff', border: `1px solid ${spec.color}35`,
        boxShadow: '0 6px 16px rgba(13,27,42,0.10)',
        zIndex: 2,
      }}>
        <Icon style={{ width: 20, height: 20, color: spec.color }} strokeWidth={2.3} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, paddingTop: 30, justifyContent: 'center', flex: 1 }}>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 800, color: '#0d1b2a', fontSize: 14, lineHeight: 1.35 }}>
          {spec.value}{spec.label ? ` ${spec.label.replace(/\n/g, ' ')}` : ''}
        </span>
        {spec.description && (
          <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(13,27,42,0.72)', fontWeight: 500, fontSize: 11.5, lineHeight: 1.5, margin: '2px 0 0' }}>
            {spec.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

// ─── MOBILE SPEC CARD — compact card used in the mobile grid layout ──────────
// The orbital layout depends on a fixed 1000×1000 canvas that is scaled down
// with a CSS transform to fit the screen. On phones that scale factor gets
// so small (≈0.3×) that the card text becomes unreadable. Below the `isMobile`
// breakpoint we swap to this simple, readable stacked grid instead.
function MobileSpecCard({ spec, Icon, accent, delay }: { spec: Spec; Icon: LucideIcon; accent: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-5% 0px' }}
      transition={{ delay, duration: 0.35 }}
      style={{
        display: 'flex', flexDirection: 'column', gap: 8,
        padding: '14px 12px',
        borderRadius: 16,
        background: '#ffffff',
        border: '1px solid #e2eaf2',
        boxShadow: '0 2px 12px rgba(13,27,42,0.05)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
        <div style={{
          width: 34, height: 34, borderRadius: 10, flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: `${accent}14`, border: `1px solid ${accent}35`,
        }}>
          <Icon style={{ width: 15, height: 15, color: accent }} strokeWidth={2.3} />
        </div>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 800, color: '#0d1b2a', fontSize: 12.5, lineHeight: 1.3 }}>
          {spec.value}{spec.label ? ` ${spec.label.replace(/\n/g, ' ')}` : ''}
        </span>
      </div>
      {spec.description && (
        <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(13,27,42,0.7)', fontWeight: 500, fontSize: 11, lineHeight: 1.5, margin: 0 }}>
          {spec.description}
        </p>
      )}
    </motion.div>
  );
}

// ─── MOBILE HERO — product image + spec grid, replaces the orbital showcase on phones ─
function MobileHero({ product, width }: { product: Product; width: number }) {
  const columns = width < 420 ? 1 : 2;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22, width: '100%' }}>
      <div style={{ position: 'relative', width: '100%', maxWidth: 320, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          position: 'absolute', inset: -10,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${product.accent}22 0%, transparent 70%)`,
          filter: 'blur(24px)',
          pointerEvents: 'none',
        }} />
        <ImageWithFallback
          src={product.image} alt={product.title}
          style={{
            position: 'relative',
            width: '100%', maxHeight: 260,
            objectFit: 'contain',
            filter: `drop-shadow(0 8px 24px ${product.accent}55)`,
          }}
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 12 }}>
        {product.specs.map((s, i) => (
          <MobileSpecCard key={s.label} spec={s} Icon={s.icon} accent={product.accent} delay={i * 0.05} />
        ))}
      </div>
    </div>
  );
}

// ─── KEY FEATURE ROW — simple icon + one-liner, used only in the panel ───────
function KeyFeatureRow({ icon: Icon, text, accent, delay = 0 }: { icon: LucideIcon; text: string; accent: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: '-5% 0px' }}
      transition={{ delay, duration: 0.35 }}
      style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0' }}
    >
      <div style={{
        width: 32, height: 32, borderRadius: 9, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `${accent}16`, border: `1px solid ${accent}35`,
      }}>
        <Icon style={{ width: 15, height: 15, color: accent }} strokeWidth={2.3} />
      </div>
      <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 14.5, color: '#0d1b2a' }}>
        {text}
      </span>
    </motion.div>
  );
}

// ─── KEY FEATURES PANEL — right column (40%) next to the specs table ─────────
function KeyFeaturesPanel({ points, accent }: { points: KeyFeaturePoint[]; accent: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-5% 0px' }}
      transition={{ duration: 0.45, delay: 0.12 }}
      style={{
        width: '100%',
        borderRadius: 20,
        border: '1px solid #e2eaf2',
        background: '#ffffff',
        boxShadow: '0 2px 16px rgba(13,27,42,0.05)',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: accent, flexShrink: 0 }} />
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#0d1b2a' }}>
          Key Features
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {points.map((p, i) => (
          <KeyFeatureRow key={p.text} icon={p.icon} text={p.text} accent={accent} delay={i * 0.05} />
        ))}
      </div>
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

// ─── FULL-WIDTH SPECS TABLE — now with row + column grid lines, slightly ─────
// smaller/tighter on all breakpoints, and an extra-compact mode on mobile.
function SpecsTable({ headers, rows, accent, delay, compact }: { headers: string[]; rows: string[][]; accent: string; delay: number; compact?: boolean }) {
  const cellPadding = compact ? '8px 10px' : '10px 16px';
  const bodyFontSize = compact ? 12 : 13.5;
  const headerFontSize = compact ? 9.5 : 10.5;
  const tableMinWidth = compact ? 340 : 480;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-5% 0px' }}
      transition={{ delay, duration: 0.45 }}
      style={{ width: '100%', borderRadius: 20, overflow: 'hidden', border: `1px solid #e2eaf2`, background: '#ffffff', boxShadow: '0 2px 16px rgba(13,27,42,0.05)' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: compact ? '13px 16px' : '16px 20px', borderBottom: `1px solid #e2eaf2` }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: accent, flexShrink: 0 }} />
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#0d1b2a' }}>
          Full Specifications
        </span>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: tableMinWidth }}>
          <thead>
            <tr style={{ background: `${accent}0d` }}>
              {headers.map((h, i) => (
                <th key={i} style={{
                  padding: cellPadding, textAlign: 'left', fontFamily: 'DM Sans, sans-serif',
                  fontSize: headerFontSize, textTransform: 'uppercase', letterSpacing: '0.12em',
                  color: i === 0 ? 'rgba(13,27,42,0.55)' : accent, fontWeight: 700,
                  border: '1px solid #e2eaf2',
                  whiteSpace: 'nowrap',
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} style={{ background: ri % 2 === 1 ? '#f8faf9' : 'transparent' }}>
                {row.map((cell, ci) => (
                  <td key={ci} style={{
                    padding: cellPadding, fontFamily: 'DM Sans, sans-serif',
                    fontSize: bodyFontSize, fontWeight: 700, color: '#0d1b2a',
                    border: '1px solid #eef2f0',
                  }}>{cell}</td>
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

  // Below this breakpoint the orbital canvas scales down so far that its
  // text becomes unreadable, so we swap to a stacked mobile-friendly layout.
  // Desktop/tablet (>=700) keeps the original orbital showcase untouched.
  const isMobile = width < 700;

  // Specs (60%) + Key Features (40%) row — stacks below a comfortable width,
  // matching the existing table's own responsive/scroll behavior.
  const specsStacked = width < 1100;

  // Title block — left-aligned, sits above the hero showcase.
  const CenterTitle = (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay: 0.05 }}
      style={{ textAlign: 'left', maxWidth: 640, margin: `0 0 ${isMobile ? 28 : 40}px` }}
    >
      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.22em', color: product.accent, display: 'block', marginBottom: 10 }}>
        {product.tag}
      </span>
      <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 900, fontSize: isMobile ? 26 : 32, lineHeight: 1.2, color: '#0d1b2a', margin: '0 0 10px' }}>
        {product.title.split(' ').slice(0, -2).join(' ')}{' '}
        <span style={{ color: product.accent }}>{product.title.split(' ').slice(-2).join(' ')}</span>
      </h3>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14.5, fontStyle: 'italic', color: product.accent, opacity: 0.85, margin: 0 }}>
        {product.subtitle}
      </p>
    </motion.div>
  );

  const CenterImage = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: 0.08 }}
      style={{ width: '100%', maxWidth: C, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <ScaleBox canvasSize={C}>
        <OrbitalShowcase product={product} idx={index} />
      </ScaleBox>
    </motion.div>
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

  return (
    <section
      id={product.id === 1 ? 'powertrain' : 'controller'}
      ref={ref}
      className="scroll-mt-28"
      style={{ marginBottom: isMobile ? 56 : 72 }}
    >
      {CenterTitle}

      {/* ── Hero: orbital layout on desktop/tablet, stacked grid on mobile ── */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: isMobile ? 32 : 48 }}>
        {isMobile ? <MobileHero product={product} width={width} /> : CenterImage}
      </div>

      {/* ── Specs table (60%) + Key Features (40%) ── */}
      <div
        style={{
          display: specsStacked ? 'flex' : 'grid',
          flexDirection: specsStacked ? 'column' : undefined,
          gridTemplateColumns: specsStacked ? undefined : '3fr 2fr',
          gap: 20,
          alignItems: 'start',
          width: '100%',
        }}
      >
        <SpecsTable headers={product.tableHeaders} rows={product.tableRows} accent={product.accent} delay={0.1} compact={isMobile} />
        <KeyFeaturesPanel points={product.keyFeatures} accent={product.accent} />
      </div>

      {/* ── Platforms + Variants (only rendered if present) ── */}
      {(product.platforms || product.variants.length > 0) && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 24 }}>
          {PlatformsBlock}
          {product.variants.map((v, i) => (
            <VariantCard key={v.name} variant={v} accent={product.accent} delay={i * 0.08} />
          ))}
        </div>
      )}
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

          </motion.div>

          {/* ── Products ── */}
          {PRODUCTS.map((p, i) => (
            <div key={p.id}>
              <ProductBlock product={p} index={i} />
            </div>
          ))}

        </div>
      </section>
    </>
  );
}