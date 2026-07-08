// 'use client'

// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'motion/react'
// import { Menu, X } from 'lucide-react'

// const navItems = [
//   { name: 'Home',       href: '/'          },
//   { name: 'Products',   href: '/products'  },
//   { name: 'Technology', href: '/technology' },
//   // { name: 'Vision',     href: '/vision'     },
//   { name: 'Contact',    href: '/contact'   },
//   { name: 'About Us',   href: '/about-us'  },
//   // { name: 'FAQ',        href: '/faq'       },
// ]

// export function Navigation() {
//   const [scrolled, setScrolled]     = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const pathname = usePathname()

//   if (pathname.startsWith('/admin')) {
//     return null
//   }

//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 40)
//     window.addEventListener('scroll', fn, { passive: true })
//     return () => window.removeEventListener('scroll', fn)
//   }, [])

//   // Close mobile menu on route change
//   useEffect(() => { setMobileOpen(false) }, [pathname])

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,600;9..40,700;9..40,900&display=swap');
//         @keyframes gradShift{0%{background-position:0%}100%{background-position:200%}}
//       `}</style>

//       <motion.nav
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0,   opacity: 1 }}
//         transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
//         className="fixed top-0 left-0 right-0 z-50"
//         style={{ paddingTop: 16 }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">

//           {/* ── Main pill navbar ── */}
//           <div
//             className="flex items-center justify-between px-5 lg:px-7 transition-all duration-400"
//             style={{
//               height: 64,
//               borderRadius: 100,
//               background: scrolled
//                 ? 'rgba(6,10,22,0.88)'
//                 : 'rgba(6,10,22,0.55)',
//               border: scrolled
//                 ? '1px solid rgba(0,200,83,0.22)'
//                 : '1px solid rgba(255,255,255,0.1)',
//               backdropFilter: 'blur(20px)',
//               boxShadow: scrolled
//                 ? '0 8px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(0,200,83,0.08), inset 0 1px 0 rgba(255,255,255,0.06)'
//                 : '0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)',
//             }}
//           >

//             {/* ── Logo ── */}
//             <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.2 }}>
//               <Link href="/" className="flex items-center gap-3 group" style={{ textDecoration: 'none' }}>
//                 {/* Logo image */}
//                 <motion.img
//                   src="/photos/logo2.png"
//                   alt="Aproposdrive"
//                   style={{ height: 38, objectFit: 'contain' }}
//                   whileHover={{ scale: 1.06 }}
//                   transition={{ duration: 0.2 }}
//                 />
//                 {/* Logo text */}
//                 <span
//                   className="font-black text-2xl tracking-tight leading-none"
//                   style={{ fontFamily: "'DM Sans',sans-serif" }}
//                 >
//                   <span style={{ color: '#fff' }}>Apropos</span>
//                   <span
//                     style={{
//                       background: 'linear-gradient(90deg,#00C853,#00E5FF)',
//                       WebkitBackgroundClip: 'text',
//                       WebkitTextFillColor: 'transparent',
//                     }}
//                   >
//                     drive
//                   </span>
//                 </span>
//               </Link>
//             </motion.div>

//             {/* ── Desktop nav links ── */}
//             <div className="hidden md:flex items-center gap-1">
//               {navItems.map((item) => {
//                 const isActive = pathname === item.href
//                 return (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     prefetch
//                     style={{ textDecoration: 'none' }}
//                   >
//                     <motion.div
//                       whileHover={{ scale: 1.04 }}
//                       transition={{ duration: 0.18 }}
//                       className="relative px-4 py-2 rounded-full group"
//                       style={{
//                         background: isActive ? 'rgba(0,200,83,0.1)' : 'transparent',
//                         border: isActive ? '1px solid rgba(0,200,83,0.25)' : '1px solid transparent',
//                         transition: 'background 0.2s, border-color 0.2s',
//                       }}
//                       onMouseEnter={e => {
//                         if (!isActive) {
//                           e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
//                           e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
//                         }
//                       }}
//                       onMouseLeave={e => {
//                         if (!isActive) {
//                           e.currentTarget.style.background = 'transparent'
//                           e.currentTarget.style.borderColor = 'transparent'
//                         }
//                       }}
//                     >
//                       <span
//                         className="relative font-semibold text-sm"
//                         style={{
//                           fontFamily: "'DM Sans',sans-serif",
//                           background: 'linear-gradient(90deg,#00C853,#00E5FF)',
//                           WebkitBackgroundClip: 'text',
//                           WebkitTextFillColor: 'transparent',
//                         }}
//                       >
//                         {item.name}
//                       </span>

//                       {/* Active dot */}
//                       {isActive && (
//                         <motion.div
//                           layoutId="activeNavDot"
//                           className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
//                           style={{ background: '#00C853', boxShadow: '0 0 5px #00C853' }}
//                         />
//                       )}

//                       {/* Hover underline */}
//                       <span
//                         className="absolute bottom-1 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-250"
//                         style={{ background: 'linear-gradient(90deg,#00C853,#00E5FF)' }}
//                       />
//                     </motion.div>
//                   </Link>
//                 )
//               })}
//             </div>

//             {/* ── CTA + mobile toggle ── */}
//             <div className="flex items-center gap-3">
//               {/* CTA button — desktop */}
//               <motion.button
//                 whileHover={{ scale: 1.05, boxShadow: '0 0 22px rgba(0,200,83,0.4)' }}
//                 whileTap={{ scale: 0.96 }}
//                 className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm"
//                 style={{
//                   background: 'linear-gradient(90deg,#00C853,#00E5FF)',
//                   color: '#0A0F1C',
//                   fontFamily: "'DM Sans',sans-serif",
//                   border: 'none',
//                   cursor: 'pointer',
//                   boxShadow: '0 4px 16px rgba(0,200,83,0.28)',
//                 }}
//               >
//                 Get Started
//               </motion.button>

//               {/* Mobile hamburger */}
//               <motion.button
//                 className="md:hidden flex items-center justify-center w-9 h-9 rounded-full"
//                 style={{
//                   background: 'rgba(255,255,255,0.07)',
//                   border: '1px solid rgba(255,255,255,0.12)',
//                   cursor: 'pointer',
//                   color: '#fff',
//                 }}
//                 whileTap={{ scale: 0.92 }}
//                 onClick={() => setMobileOpen(v => !v)}
//               >
//                 <AnimatePresence mode="wait">
//                   {mobileOpen
//                     ? <motion.div key="x"   initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}><X    size={18} /></motion.div>
//                     : <motion.div key="mnu" initial={{ rotate: 90, opacity: 0 }}  animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}><Menu size={18} /></motion.div>
//                   }
//                 </AnimatePresence>
//               </motion.button>
//             </div>
//           </div>

//           {/* ── Mobile dropdown ── */}
//           <AnimatePresence>
//             {mobileOpen && (
//               <motion.div
//                 initial={{ opacity: 0, y: -12, scale: 0.97 }}
//                 animate={{ opacity: 1,  y: 0,   scale: 1    }}
//                 exit={{   opacity: 0,  y: -12, scale: 0.97 }}
//                 transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
//                 className="md:hidden mt-3 overflow-hidden"
//                 style={{
//                   borderRadius: 20,
//                   background: 'rgba(6,10,22,0.94)',
//                   border: '1px solid rgba(0,200,83,0.18)',
//                   backdropFilter: 'blur(20px)',
//                   boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
//                 }}
//               >
//                 {/* Top shimmer */}
//                 <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(0,200,83,0.5),rgba(0,229,255,0.35),transparent)' }} />

//                 <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 4 }}>
//                   {navItems.map((item, i) => {
//                     const isActive = pathname === item.href
//                     return (
//                       <motion.div
//                         key={item.name}
//                         initial={{ opacity: 0, x: -10 }}
//                         animate={{ opacity: 1,  x: 0   }}
//                         transition={{ delay: i * 0.05, duration: 0.25 }}
//                       >
//                         <Link
//                           href={item.href}
//                           prefetch
//                           onClick={() => setMobileOpen(false)}
//                           style={{ textDecoration: 'none', display: 'block' }}
//                         >
//                           <div
//                             style={{
//                               padding: '10px 14px',
//                               borderRadius: 12,
//                               background: isActive ? 'rgba(0,200,83,0.1)' : 'transparent',
//                               border: `1px solid ${isActive ? 'rgba(0,200,83,0.22)' : 'transparent'}`,
//                               display: 'flex',
//                               alignItems: 'center',
//                               justifyContent: 'space-between',
//                               transition: 'all 0.18s',
//                             }}
//                             onMouseEnter={e => {
//                               if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
//                             }}
//                             onMouseLeave={e => {
//                               if (!isActive) e.currentTarget.style.background = 'transparent'
//                             }}
//                           >
//                             <span
//                               style={{
//                                 fontFamily: "'DM Sans',sans-serif",
//                                 fontWeight: 700,
//                                 fontSize: 14,
//                                 background: 'linear-gradient(90deg,#00C853,#00E5FF)',
//                                 WebkitBackgroundClip: 'text',
//                                 WebkitTextFillColor: 'transparent',
//                               }}
//                             >
//                               {item.name}
//                             </span>
//                             {isActive && (
//                               <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00C853', boxShadow: '0 0 5px #00C853' }} />
//                             )}
//                           </div>
//                         </Link>
//                       </motion.div>
//                     )
//                   })}

//                   {/* Mobile CTA */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 6 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: navItems.length * 0.05 + 0.05, duration: 0.25 }}
//                     style={{ marginTop: 8 }}
//                   >
//                     <button
//                       style={{
//                         width: '100%',
//                         height: 44,
//                         borderRadius: 12,
//                         background: 'linear-gradient(90deg,#00C853,#00E5FF)',
//                         border: 'none',
//                         color: '#0A0F1C',
//                         fontFamily: "'DM Sans',sans-serif",
//                         fontWeight: 900,
//                         fontSize: 14,
//                         cursor: 'pointer',
//                         boxShadow: '0 4px 16px rgba(0,200,83,0.28)',
//                       }}
//                     >
//                       Get Started
//                     </button>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>

//         </div>
//       </motion.nav>
//     </>
//   )
// }



'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home',       href: '/'           },
  { name: 'Products',   href: '/products'   },
  { name: 'Technology', href: '/technology' },
  { name: 'Blogs',      href: '/blogs'      },
  // { name: 'About Us',   href: '/contact'    },
  { name: 'About Us',   href: '/about-us'   },
]

export function Navigation() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  if (pathname.startsWith('/admin')) return null

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{ paddingTop: 12 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* ── Main pill ── */}
          <div
            className="flex items-center justify-between px-4 sm:px-6 transition-all duration-300"
            style={{
              height: 60,
              borderRadius: 100,
              background: scrolled
                ? 'rgba(255,255,255,0.97)'
                : 'rgba(255,255,255,0.82)',
              border: scrolled
                ? '1px solid #e2eaf2'
                : '1px solid rgba(226,234,242,0.7)',
              backdropFilter: 'blur(20px)',
              boxShadow: scrolled
                ? '0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)'
                : '0 2px 12px rgba(0,0,0,0.06)',
            }}
          >

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" style={{ textDecoration: 'none' }}>
              <motion.img
                src="/photos/logo2.png"
                alt="AproposDrive"
                style={{ height: 34, objectFit: 'contain' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <span className="font-black text-base sm:text-xl tracking-tight leading-none block whitespace-nowrap">
                <span style={{ color: '#0d1b2a' }}>Apropos</span>
                <span style={{ color: '#00a550' }}>drive</span>
              </span>
            </Link>

            {/* ── Desktop nav links ── */}
            <div className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    prefetch
                    style={{ textDecoration: 'none' }}
                  >
                    <motion.div
                      className="relative px-4 py-2 rounded-full cursor-pointer"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.18 }}
                      style={{
                        background: isActive ? 'rgba(0,165,80,0.08)' : 'transparent',
                        border: isActive
                          ? '1px solid rgba(0,165,80,0.2)'
                          : '1px solid transparent',
                      }}
                      onMouseEnter={e => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'rgba(0,165,80,0.05)'
                          e.currentTarget.style.borderColor = 'rgba(0,165,80,0.12)'
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'transparent'
                          e.currentTarget.style.borderColor = 'transparent'
                        }
                      }}
                    >
                      <span
                        className="text-sm font-semibold"
                        style={{ color: isActive ? '#00a550' : '#0d1b2a' }}
                      >
                        {item.name}
                      </span>

                      {/* Active dot */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavDot"
                          className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                          style={{ background: '#00a550' }}
                        />
                      )}
                    </motion.div>
                  </Link>
                )
              })}
            </div>

            {/* ── CTA + mobile toggle ── */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* CTA — desktop */}
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <motion.div
                  className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white cursor-pointer"
                  style={{
                    background: '#00a550',
                    boxShadow: '0 2px 12px rgba(0,165,80,0.25)',
                  }}
                  whileHover={{
                    scale: 1.04,
                    boxShadow: '0 4px 20px rgba(0,165,80,0.38)',
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                >
                  Contact Us
                </motion.div>
              </Link>

              {/* Hamburger — mobile */}
              <motion.button
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-full cursor-pointer"
                style={{
                  background: 'rgba(0,165,80,0.07)',
                  border: '1px solid rgba(0,165,80,0.18)',
                  color: '#0d1b2a',
                }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setMobileOpen(v => !v)}
              >
                <AnimatePresence mode="wait">
                  {mobileOpen
                    ? <motion.div key="x"   initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90,  opacity: 0 }} transition={{ duration: 0.16 }}><X    size={17} /></motion.div>
                    : <motion.div key="mnu" initial={{ rotate: 90,  opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.16 }}><Menu size={17} /></motion.div>
                  }
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* ── Mobile dropdown ── */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1,  y: 0,   scale: 1    }}
                exit={{   opacity: 0,  y: -10, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="md:hidden mt-2 overflow-hidden"
                style={{
                  borderRadius: 20,
                  background: 'rgba(255,255,255,0.97)',
                  border: '1px solid #e2eaf2',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)',
                }}
              >
                {/* Top green accent line */}
                <div
                  style={{
                    height: 2,
                    background: 'linear-gradient(90deg, transparent, #00a550, transparent)',
                    borderRadius: '20px 20px 0 0',
                  }}
                />

                <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {navItems.map((item, i) => {
                    const isActive = pathname === item.href
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1,  x: 0  }}
                        transition={{ delay: i * 0.04, duration: 0.22 }}
                      >
                        <Link
                          href={item.href}
                          prefetch
                          onClick={() => setMobileOpen(false)}
                          style={{ textDecoration: 'none', display: 'block' }}
                        >
                          <div
                            style={{
                              padding: '10px 14px',
                              borderRadius: 12,
                              background: isActive ? 'rgba(0,165,80,0.08)' : 'transparent',
                              border: `1px solid ${isActive ? 'rgba(0,165,80,0.2)' : 'transparent'}`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              transition: 'all 0.16s',
                            }}
                            onMouseEnter={e => {
                              if (!isActive) e.currentTarget.style.background = 'rgba(0,165,80,0.04)'
                            }}
                            onMouseLeave={e => {
                              if (!isActive) e.currentTarget.style.background = 'transparent'
                            }}
                          >
                            <span
                              style={{
                                fontWeight: 600,
                                fontSize: 14,
                                color: isActive ? '#00a550' : '#0d1b2a',
                              }}
                            >
                              {item.name}
                            </span>
                            {isActive && (
                              <div
                                style={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: '50%',
                                  background: '#00a550',
                                  boxShadow: '0 0 6px rgba(0,165,80,0.5)',
                                }}
                              />
                            )}
                          </div>
                        </Link>
                      </motion.div>
                    )
                  })}

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1,  y: 0 }}
                    transition={{ delay: navItems.length * 0.04 + 0.04, duration: 0.22 }}
                    style={{ marginTop: 6 }}
                  >
                    <Link href="/contact" onClick={() => setMobileOpen(false)} style={{ textDecoration: 'none' }}>
                      <div
                        style={{
                          width: '100%',
                          height: 44,
                          borderRadius: 12,
                          background: '#00a550',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: 14,
                          cursor: 'pointer',
                          boxShadow: '0 2px 12px rgba(0,165,80,0.25)',
                        }}
                      >
                        Contact Us
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.nav>
    </>
  )
}