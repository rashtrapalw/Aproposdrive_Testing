"use client";

import type { ReactNode } from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useSpring, useMotionValue } from "motion/react";
import {
  Battery, Gauge, Zap, Shield, Cpu, Package,
  CheckCircle, Leaf, TrendingUp, ChevronDown,
  Activity, Thermometer, Wifi, Wind, Weight, ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ImageWithFallback } from "../../src/app/components/figma/ImageWithFallback";

// ─── ORBITAL CANVAS CONSTANTS ─────────────────────────────────────────────────
// Everything is drawn inside a fixed 560×560 square.
// Orbital cards are placed at exact pixel positions using trigonometry.
const C   = 560;          // canvas size
const CX  = C / 2;        // center x = 280
const CY  = C / 2;        // center y = 280
const R   = 230;          // orbit radius (center → card center)
const CW  = 112;          // card width
const CH  = 88;           // card height
const IMG = 400;          // product image size

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
const PRODUCTS = [
  {
    id: 1, num: "01", tag: "Powertrain",
    title: "Integrated EV Powertrain Platform",
    subtitle: "Compact. Rare-earth-free. Purpose-built.",
    description: "A single unified unit combining motor, gearbox, and controller — air-cooled, IP67-sealed, and engineered for electric scooters at scale.",
    image: "/photos/no-bg-controller.png",
    accent: "#00C853",
    features: [
      { icon: Leaf,       text: "Rare Earth-Free Motor Technology" },
      { icon: Package,    text: "Motor + Controller + Gearbox in One Unit" },
      { icon: Wind,       text: "Natural Air Cooling — No Liquid Needed" },
      { icon: TrendingUp, text: "94–95% Efficiency, Extended Range" },
      { icon: Shield,     text: "IP67 Sealed — All-Weather Reliable" },
      { icon: Zap,        text: "Lower System Cost for Mass Adoption" },
    ],
    specs: [
      { icon: Gauge,      label: "Peak Power",  value: "6.5 kW",  color: "#00C853", angle: 270 },
      { icon: Activity,   label: "Peak Torque", value: "200 Nm",  color: "#00C853", angle: 330 },
      { icon: TrendingUp, label: "Efficiency",  value: "95%",     color: "#00E5FF", angle: 30  },
      { icon: Weight,     label: "Weight",      value: "7.5 kg",  color: "#00C853", angle: 90  },
      { icon: Shield,     label: "Protection",  value: "IP67",    color: "#00E5FF", angle: 150 },
      { icon: Battery,    label: "Voltage",     value: "48/60V",  color: "#00C853", angle: 210 },
    ],
    variants: [
      { name: "Series 70", cols: [["Power","2.5 kW"],["Torque","160 Nm"],["Weight","6.5 kg"]] },
      { name: "Series 85", cols: [["Power","4 kW"],  ["Torque","200 Nm"],["Weight","7.5 kg"]] },
    ],
    tableHeaders: ["Spec", "Series 70", "Series 85"],
    tableRows: [
      ["Tyre Size","12 inch","12 inch"],["Nominal Power","2.5 kW","4 kW"],
      ["Peak Power","5.5 kW","6.5 kW"],["Peak Torque","160 Nm","200 Nm"],
      ["Efficiency","94%","95%"],["Weight","6.5 kg","7.5 kg"],
      ["Voltage","48/60V","48/60V"],["Protection","IP67","IP67"],["Cooling","Air","Air"],
    ],
  },
  {
    id: 2, num: "02", tag: "Controller",
    title: "EV Motor Controller",
    subtitle: "Precise. Thermal-stable. Intelligent.",
    description: "High-performance vector field-oriented motor controller for light EVs — with ride modes, hill hold, and real-time diagnostics built in.",
    image: "/photos/motor-removebg.png",
    accent: "#00E5FF",
    features: [
      { icon: Cpu,         text: "Vector Field-Oriented Control Algorithm" },
      { icon: Activity,    text: "Hall Sensor / Resolver Position Feedback" },
      { icon: Gauge,       text: "3 Ride Modes + Cruise Control" },
      { icon: Shield,      text: "Hill Hold Assist + Parking Assist" },
      { icon: Wifi,        text: "CAN + USB Communication Interface" },
      { icon: CheckCircle, text: "Real-time Fault LED Diagnostics" },
    ],
    specs: [
      { icon: Zap,         label: "Peak Current", value: "280A",     color: "#00E5FF", angle: 270 },
      { icon: Activity,    label: "Power Range",  value: "3–7 kW",   color: "#00E5FF", angle: 330 },
      { icon: Thermometer, label: "Temp Range",   value: "±90°C",    color: "#00C853", angle: 30  },
      { icon: Shield,      label: "Protection",   value: "IP67",     color: "#00E5FF", angle: 90  },
      { icon: Wifi,        label: "Comms",        value: "CAN+USB",  color: "#00C853", angle: 150 },
      { icon: Cpu,         label: "Control",      value: "PMSM FOC", color: "#00E5FF", angle: 210 },
    ],
    variants: [
      { name: "Variant 1", cols: [["Power","1–4 kW"],["Current","160A"],["Voltage","48–72V"]] },
      { name: "Variant 2", cols: [["Power","3–7 kW"],["Current","280A"],["Voltage","48–72V"]] },
    ],
    tableHeaders: ["Spec", "Variant 1", "Variant 2"],
    tableRows: [
      ["Power Range","1–4 kW","3–7 kW"],["Peak Current","160 Arms","280 Arms"],
      ["Rated Current","50 Arms","90 Arms"],["Voltage","48/60/72V","48/60/72V"],
      ["Dimensions","165×109×45mm","214×119×45mm"],["Temp Range","-20 to +90°C","-20 to +90°C"],
      ["Protection","IP67","IP67"],["Control","PMSM FOC","PMSM FOC"],["Comms","CAN + USB","CAN + USB"],
    ],
    platforms: ["2-wheelers (L2)", "3-wheelers (L3)", "Custom EV Platforms"],
  },
];

// ─── ORBITAL SHOWCASE ─────────────────────────────────────────────────────────
// Fixed C×C canvas. Image is IMG×IMG centered. Cards orbit at radius R.
// Canvas is CSS-scaled on smaller screens via the wrapper.
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
    // The canvas is always C×C. The parent scales it.
    <div style={{ position: "relative", width: C, height: C, flexShrink: 0 }}>

      {/* ── Orbit rings ── */}
      {[R * 2 + 20, R * 2 + 90].map((d, i) => (
        <motion.div key={d}
          style={{
            position: "absolute",
            width: d, height: d,
            left: CX - d / 2, top: CY - d / 2,
            borderRadius: "50%",
            border: `1px solid ${product.accent}${i === 0 ? "25" : "10"}`,
            pointerEvents: "none",
          }}
          animate={{ rotate: i === 0 ? 360 : -360 }}
          transition={{ duration: i === 0 ? 28 : 44, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* ── SVG: connector lines + tick dots ── */}
      <svg
        style={{ position: "absolute", inset: 0, width: C, height: C, overflow: "visible", pointerEvents: "none" }}
      >
        {product.specs.map((s) => {
          const rad = (s.angle * Math.PI) / 180;
          const innerR = IMG / 2 + 8; // starts just outside image edge
          return (
            <g key={s.label}>
              {/* Dashed connector */}
              <line
                x1={CX + Math.cos(rad) * innerR}   y1={CY + Math.sin(rad) * innerR}
                x2={CX + Math.cos(rad) * (R - CW / 2 - 4)}
                y2={CY + Math.sin(rad) * (R - CH / 2 - 4)}
                stroke={s.color} strokeWidth="1" strokeDasharray="4 5" strokeOpacity="0.4"
              />
              {/* Tick dot on orbit ring */}
              <circle
                cx={CX + Math.cos(rad) * (R + CW / 2 + 6)}
                cy={CY + Math.sin(rad) * (R + CH / 2 + 6)}
                r="3" fill={s.color} opacity="0.65"
              />
            </g>
          );
        })}
      </svg>

      {/* ── Center halo glow ── */}
      <div style={{
        position: "absolute",
        width: IMG + 80, height: IMG + 80,
        left: CX - (IMG + 80) / 2, top: CY - (IMG + 80) / 2,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${product.accent}28 0%, transparent 70%)`,
        filter: "blur(28px)",
        pointerEvents: "none",
      }} />

      {/* ── Product image (centered, floats) ── */}
      <motion.div style={{
        position: "absolute",
        left: CX - IMG / 2, top: CY - IMG / 2,
        width: IMG, height: IMG,
        y: springY,
        zIndex: 10,
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        {/* Scan line */}
        <motion.div style={{
          position: "absolute", left: 0, right: 0, height: 1,
          background: `linear-gradient(90deg,transparent,${product.accent}99,transparent)`,
          zIndex: 20, pointerEvents: "none",
        }}
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
        <ImageWithFallback
          src={product.image} alt={product.title}
          style={{
            width: "100%", height: "100%", objectFit: "contain",
            filter: `drop-shadow(0 8px 32px ${product.accent}60)`,
          }}
        />
      </motion.div>

      {/* ── Orbital spec cards ── */}
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

// ─── ORBITAL CARD ─────────────────────────────────────────────────────────────
function OrbCard({ spec, Icon, left, top, delay }: { spec: Spec; Icon: LucideIcon; left: number; top: number; delay: number }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, margin: "-10% 0px" }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 20 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      whileHover={{ scale: 1.1, y: -3 }}
      style={{
        position: "absolute",
        left, top,
        width: CW, height: CH,
        zIndex: 20,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 5,
        borderRadius: 16,
        background: hov ? "rgba(6,12,24,0.98)" : "rgba(6,12,24,0.88)",
        border: `1px solid ${hov ? spec.color + "65" : spec.color + "28"}`,
        backdropFilter: "blur(18px)",
        boxShadow: hov
          ? `0 0 22px ${spec.color}30, 0 8px 28px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)`
          : `0 4px 16px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)`,
        transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
        cursor: "default", userSelect: "none",
        overflow: "hidden",
      }}
    >
      {/* Hover inner glow */}
      {hov && (
        <div style={{
          position: "absolute", inset: 0, borderRadius: 16, pointerEvents: "none",
          background: `radial-gradient(circle at 50% 0%, ${spec.color}18, transparent 70%)`,
        }} />
      )}
      <div style={{
        width: 30, height: 30, borderRadius: 8, flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: `${spec.color}1a`, border: `1px solid ${spec.color}44`,
      }}>
        <Icon style={{ width: 14, height: 14, color: spec.color }} />
      </div>
      <span style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 900, color: "#fff", fontSize: 13, lineHeight: 1 }}>
        {spec.value}
      </span>
      <span style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(255,255,255,0.42)", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", lineHeight: 1, textAlign: "center", padding: "0 6px" }}>
        {spec.label}
      </span>
    </motion.div>
  );
}

// ─── FEATURE PILL ─────────────────────────────────────────────────────────────
function FeaturePill({ icon: Icon, text, color, delay, mobile = false }: { icon: LucideIcon; text: string; color: string; delay: number; mobile?: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-5% 0px" }}
      transition={{ delay, duration: 0.35 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: mobile ? "10px 14px" : "8px 12px",
        borderRadius: 12, cursor: "default",
        background: hov ? `${color}0d` : "rgba(255,255,255,0.025)",
        border: `1px solid ${hov ? color + "30" : "rgba(255,255,255,0.06)"}`,
        transform: hov ? "translateX(4px)" : "translateX(0)",
        transition: "all 0.2s ease",
      }}
    >
      <div style={{
        width: mobile ? 30 : 26, height: mobile ? 30 : 26,
        borderRadius: 8, flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: `${color}18`, border: `1px solid ${color}38`,
      }}>
        <Icon style={{ width: mobile ? 14 : 12, height: mobile ? 14 : 12, color }} />
      </div>
      <span style={{
        fontSize: mobile ? 13 : 12, fontFamily: "'DM Sans',sans-serif",
        color: hov ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.45)",
        transition: "color 0.2s",
      }}>{text}</span>
    </motion.div>
  );
}

// ─── VARIANT CARD ─────────────────────────────────────────────────────────────
function VariantCard({ variant, accent, delay }: { variant: Variant; accent: string; delay: number }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-5% 0px" }}
      transition={{ delay, duration: 0.38 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "12px 14px", borderRadius: 16, cursor: "default",
        background: hov ? `${accent}0e` : `${accent}06`,
        border: `1px solid ${hov ? accent + "30" : accent + "18"}`,
        transform: hov ? "translateY(-3px)" : "none",
        boxShadow: hov ? `0 8px 20px ${accent}14` : "none",
        transition: "all 0.2s ease",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <span style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 900, color: "#fff", fontSize: 12 }}>{variant.name}</span>
        <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, padding: "2px 8px", borderRadius: 20, background: `${accent}14`, color: accent }}>Available</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
        {variant.cols.map(([k, v]) => (
          <div key={k}>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.28)", marginBottom: 2 }}>{k}</div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.75)" }}>{v}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── SPECS ACCORDION ──────────────────────────────────────────────────────────
function SpecsAccordion({ headers, rows, accent, delay }: { headers: string[]; rows: string[][]; accent: string; delay: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-5% 0px" }}
      transition={{ delay }}
      style={{ borderRadius: 16, overflow: "hidden", border: `1px solid ${accent}20`, background: "rgba(6,10,22,0.8)", backdropFilter: "blur(14px)" }}
    >
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 16px", background: "none", border: "none", cursor: "pointer",
          borderBottom: open ? `1px solid ${accent}18` : "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <motion.div style={{ width: 7, height: 7, borderRadius: "50%", background: accent, boxShadow: `0 0 6px ${accent}` }}
            animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.7)" }}>
            View Full Specifications
          </span>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.28 }}>
          <ChevronDown style={{ width: 14, height: 14, color: "rgba(255,255,255,0.35)" }} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.025)" }}>
                    {headers.map((h, i) => (
                      <th key={i} style={{ padding: "8px 14px", textAlign: "left", fontFamily: "'DM Sans',sans-serif", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.15em", color: i === 0 ? "rgba(255,255,255,0.35)" : accent, fontWeight: 700 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, ri) => (
                    <motion.tr key={ri} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: ri * 0.025 }}
                      style={{ borderTop: "1px solid rgba(255,255,255,0.035)" }}>
                      {row.map((cell, ci) => (
                        <td key={ci} style={{ padding: "8px 14px", fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: ci === 0 ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.38)" }}>{cell}</td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── useWindowWidth ────────────────────────────────────────────────────────────
function useWindowWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return w;
}

// ─── PRODUCT BLOCK ─────────────────────────────────────────────────────────────
function ProductBlock({ product, index }: { product: Product; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-6% 0px" });
  const width = useWindowWidth();
  const isMobile = width < 900;   // < 900px → stacked
  const isTablet = width < 1100;  // 900–1100px → tighter cols

  // Shared: product label row
  const LabelRow = (
    <motion.div
      initial={{ opacity: 0, y: -10 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: isMobile ? 20 : 32 }}
    >
      <div style={{ height: 1, width: 80, background: `linear-gradient(90deg,${product.accent}55,transparent)` }} />
      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.28em", color: product.accent }}>
        Product {product.num}
      </span>
    </motion.div>
  );

  // Shared: title block
  const TitleBlock = (fs = 18) => (
    <div>
      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: product.accent, display: "block", marginBottom: 6 }}>
        {product.tag}
      </span>
      <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 900, fontSize: fs, lineHeight: 1.25, color: "#fff", margin: "0 0 6px" }}>
        {product.title.split(" ").slice(0, -2).join(" ")}{" "}
        <span style={{ color: product.accent }}>{product.title.split(" ").slice(-2).join(" ")}</span>
      </h3>
      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, fontStyle: "italic", color: product.accent + "80", margin: "0 0 6px" }}>{product.subtitle}</p>
      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: isMobile ? 13 : 11, lineHeight: 1.65, color: "rgba(255,255,255,0.38)", margin: 0 }}>{product.description}</p>
    </div>
  );

  // Shared: features list
  const FeaturesList = (
    <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 6 : 3 }}>
      {product.features.map((f, i) => (
        <FeaturePill key={i} icon={f.icon} text={f.text} color={product.accent} delay={i * 0.04} mobile={isMobile} />
      ))}
    </div>
  );

  // Shared: platforms
  const PlatformsBlock = product.platforms && (
    <div style={{ padding: "10px 12px", borderRadius: 12, background: `${product.accent}06`, border: `1px solid ${product.accent}14` }}>
      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,0.28)", marginBottom: 6 }}>Compatible Platforms</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {product.platforms.map(p => (
          <span key={p} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, padding: "3px 8px", borderRadius: 8, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}>{p}</span>
        ))}
      </div>
    </div>
  );

  // Shared: right panel content
  const RightPanel = (
    <>
      {product.variants.map((v, i) => <VariantCard key={v.name} variant={v} accent={product.accent} delay={i * 0.08} />)}
      <SpecsAccordion headers={product.tableHeaders} rows={product.tableRows} accent={product.accent} delay={0.16} />
      <a href="/products" style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12, fontWeight: 700, color: product.accent, fontFamily: "'DM Sans',sans-serif", textDecoration: "none" }}>
        Explore Full Details
        <div style={{ width: 22, height: 22, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: `${product.accent}14`, border: `1px solid ${product.accent}30` }}>
          <ArrowRight style={{ width: 11, height: 11 }} />
        </div>
      </a>
    </>
  );

  // ── MOBILE LAYOUT (< 900px): fully stacked, full-width showcase ──
  if (isMobile) {
    return (
      <div ref={ref} style={{ marginBottom: 60 }}>
        {LabelRow}

        {/* Title + description */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 20 }}
        >
          {TitleBlock(22)}
        </motion.div>

        {/* Orbital showcase — full width, ScaleBox handles sizing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          style={{ width: "100%", marginBottom: 20 }}
        >
          <ScaleBox canvasSize={C}>
            <OrbitalShowcase product={product} idx={index} />
          </ScaleBox>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          style={{ marginBottom: 16 }}
        >
          {FeaturesList}
        </motion.div>

        {/* Platforms */}
        {PlatformsBlock && (
          <div style={{ marginBottom: 16 }}>{PlatformsBlock}</div>
        )}

        {/* Variants + accordion */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          {RightPanel}
        </motion.div>
      </div>
    );
  }

  // ── DESKTOP LAYOUT (≥ 900px): 3-column flex, unchanged ──
//   const sideW = isTablet ? 220 : 260;
//   return (
//     <div ref={ref} style={{ marginBottom: 80 }}>
//       {LabelRow}

//       <div style={{ display: "flex", gap: isTablet ? 16 : 24, alignItems: "center", minWidth: 0 }}>

//         {/* LEFT */}
//         <motion.div
//           initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
//           transition={{ duration: 0.5, delay: 0.05 }}
//           style={{ width: sideW, flexShrink: 0, display: "flex", flexDirection: "column", gap: 10 }}
//         >
//           {TitleBlock(isTablet ? 16 : 18)}
//           {FeaturesList}
//           {PlatformsBlock}
//         </motion.div>

//         {/* CENTER */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
//           transition={{ duration: 0.6, delay: 0.08 }}
//           style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
//         >
//           <ScaleBox canvasSize={C}>
//             <OrbitalShowcase product={product} idx={index} />
//           </ScaleBox>
//         </motion.div>

//         {/* RIGHT */}
//         <motion.div
//           initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
//           transition={{ duration: 0.5, delay: 0.05 }}
//           style={{ width: sideW, flexShrink: 0, display: "flex", flexDirection: "column", gap: 10 }}
//         >
//           {RightPanel}
//         </motion.div>
//       </div>
//     </div>
//   );
// }








// ── DESKTOP LAYOUT (≥ 900px)
// Zig-Zag Layout Version

const reverseLayout = index % 2 === 1;

const DetailsSection = (
  <motion.div
    initial={{ opacity: 0, x: reverseLayout ? 24 : -24 }}
    animate={
      inView
        ? { opacity: 1, x: 0 }
        : { opacity: 0, x: reverseLayout ? 24 : -24 }
    }
    transition={{ duration: 0.5, delay: 0.05 }}
    style={{
      width: isTablet ? 420 : 500,
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      gap: 14,
    }}
  >
    {TitleBlock(isTablet ? 16 : 18)}

    {FeaturesList}

    {PlatformsBlock}

    {product.variants.map((v, i) => (
      <VariantCard
        key={v.name}
        variant={v}
        accent={product.accent}
        delay={i * 0.08}
      />
    ))}

    <SpecsAccordion
      headers={product.tableHeaders}
      rows={product.tableRows}
      accent={product.accent}
      delay={0.16}
    />

    <a
      href="/products"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontSize: 12,
        fontWeight: 700,
        color: product.accent,
        fontFamily: "'DM Sans',sans-serif",
        textDecoration: "none",
        marginTop: 4,
      }}
    >
      Explore Full Details

      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `${product.accent}14`,
          border: `1px solid ${product.accent}30`,
        }}
      >
        <ArrowRight style={{ width: 11, height: 11 }} />
      </div>
    </a>
  </motion.div>
);

const ImageSection = (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={
      inView
        ? { opacity: 1, scale: 1 }
        : { opacity: 0, scale: 0.9 }
    }
    transition={{ duration: 0.6, delay: 0.08 }}
    style={{
      flex: 1,
      minWidth: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <ScaleBox canvasSize={C}>
      <OrbitalShowcase product={product} idx={index} />
    </ScaleBox>
  </motion.div>
);

return (
  <div ref={ref} style={{ marginBottom: 90 }}>
    {LabelRow}

    <div
      style={{
        display: "flex",
        flexDirection: reverseLayout ? "row-reverse" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: isTablet ? 28 : 48,
        minWidth: 0,
      }}
    >
      {DetailsSection}

      {ImageSection}
    </div>
  </div>
);
}



































// ─── SCALE BOX ────────────────────────────────────────────────────────────────
// Measures available width, scales the fixed canvas down to fit.
// No breakpoints needed — purely math-based.
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
    // Outer: fills available width, height = canvas × scale
    <div ref={wrapRef} style={{ width: "100%", height: canvasSize * scale, display: "flex", alignItems: "center", justifyContent: "center", overflow: "visible" }}>
      {/* Inner: fixed canvas size, scaled down */}
      <div style={{ transform: `scale(${scale})`, transformOrigin: "center center", flexShrink: 0 }}>
        {children}
      </div>
    </div>
  );
}

// ─── DIVIDER ──────────────────────────────────────────────────────────────────
function Divider() {
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", margin: "48px 0" }}>
      <div style={{ position: "absolute", left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(0,229,255,0.18),transparent)" }} />
      <div style={{ position: "relative", zIndex: 1, padding: "6px 20px", borderRadius: 20, background: "#0A0F1C", border: "1px solid rgba(255,255,255,0.07)", fontFamily: "'DM Sans',sans-serif", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.25em", color: "rgba(255,255,255,0.18)" }}>
        Next Product
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function ProductsPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false, margin: "-8% 0px" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700;9..40,900&display=swap');
        @keyframes gradShift { 0%{background-position:0%} 100%{background-position:200%} }
        * { box-sizing: border-box; }
      `}</style>

      <section id="products" style={{ position: "relative", padding: "60px 0 80px", overflow: "hidden", background: "#0A0F1C", fontFamily: "'DM Sans',sans-serif" }}>

        {/* ── Background — same as site ── */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "64px 64px" }} />
          <div style={{ position: "absolute", top: -96, left: -96, width: 384, height: 384, borderRadius: "50%", background: "#00C853", filter: "blur(128px)", opacity: 0.15 }} />
          <div style={{ position: "absolute", top: 40, right: -60, width: 384, height: 384, borderRadius: "50%", background: "#00E5FF", filter: "blur(128px)", opacity: 0.1 }} />
          <div style={{ position: "absolute", bottom: -64, left: "50%", transform: "translateX(-50%)", width: 384, height: 384, borderRadius: "50%", background: "#00C853", filter: "blur(128px)", opacity: 0.08 }} />
        </div>

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: "0 16px" }}>

          {/* ── Header ── */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }} animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", borderRadius: 40, background: "rgba(0,200,83,0.08)", border: "1px solid rgba(0,200,83,0.22)", marginBottom: 16 }}>
              <motion.span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00C853", boxShadow: "0 0 6px #00C853", display: "block" }} animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.25em", color: "#00C853" }}>Our Solutions</span>
            </div>
            <h2 style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 900, letterSpacing: "-1px", lineHeight: 1, marginBottom: 5,fontSize: "clamp(24px,3.5vw,40px)" }}>
              <span style={{ color: "#fff" }}>EV Powertrain & </span>
              <span style={{ background: "linear-gradient(90deg,#00C853,#00E5FF,#00C853)", backgroundSize: "200% 100%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "gradShift 4s linear infinite" }}>
                Motor Controller
              </span>
            </h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.38)", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
              Advanced electric mobility systems engineered for Indian roads — built for efficiency, reliability, and scale.
            </p>
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
