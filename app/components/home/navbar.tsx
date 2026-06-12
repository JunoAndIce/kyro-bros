'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import kyroLogo from '@/public/KYROANDBROS.webp'
import ThemeToggle from '@/app/components/ThemeToggle'
import { useTheme } from '@/app/components/ThemeProvider'

const lineBase: React.CSSProperties = {
  fill: 'none',
  transition: 'stroke-dasharray 400ms, stroke-dashoffset 400ms',
  stroke: 'currentColor',
  strokeWidth: 5.5,
  strokeLinecap: 'round',
}

// Pseudocode: each path has two dash states it animates between —
// "inactive" draws three bars, "active" redraws the same paths as an X
const hamStyles = {
  inactive: {
    top:    { ...lineBase, strokeDasharray: '40 82' },
    middle: { ...lineBase, strokeDasharray: '40 111' },
    bottom: { ...lineBase, strokeDasharray: '40 161' },
  },
  active: {
    top:    { ...lineBase, strokeDasharray: '17 82',  strokeDashoffset: '-62' },
    middle: { ...lineBase, strokeDasharray: '40 111', strokeDashoffset: '23' },
    bottom: { ...lineBase, strokeDasharray: '40 161', strokeDashoffset: '-83' },
  },
}

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Packages' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()

  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen(prev => !prev)
  const paths = menuOpen ? hamStyles.active : hamStyles.inactive

  // Pseudocode: on every scroll event, flag the navbar as "scrolled" once the page has moved off the top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Pseudocode: show a solid, theme-matched background once scrolled or the mobile menu is open,
  // otherwise stay transparent so it can overlay the hero. (Desktop always gets a solid navbar —
  // that's handled in CSS via a media query so it's there on first paint, with no JS delay.)
  const bg = (scrolled || menuOpen)
    ? (theme === 'dark' ? 'is-dark' : 'is-light')
    : 'navbar-transparent'

  return (
    <nav className={`navbar is-fixed-top lg:px-24 ${bg}`} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/" className="navbar-item navbar-brand-link">
          <Image
            alt="Kyro and Bros logo"
            src={kyroLogo}
            className="cursor-pointer"
            style={{ maxHeight: '3rem', width: 'auto' }}
          />
        </Link>

        <a
          role="button"
          className={`navbar-burger is-hidden-desktop${menuOpen ? ' is-active' : ''}`}
          aria-label="menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
          style={{ width: 'auto', height: 'auto', display: 'flex', alignItems: 'center' }}
        >
          <svg
            style={{
              cursor: 'pointer',
              userSelect: 'none',
              WebkitTapHighlightColor: 'transparent',
              transition: 'transform 400ms',
              transform: menuOpen ? 'rotate(45deg)' : 'none',
            }}
            viewBox="0 0 100 100"
            width="40"
          >
            <path style={paths.top}    d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013" />
            <path style={paths.middle} d="m 70,50 h -40" />
            <path style={paths.bottom} d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40" />
          </svg>
        </a>
      </div>

      <div className={`navbar-menu${menuOpen ? ' is-active' : ''}`}>
        <div className="navbar-start">
          {/* Pseudocode: render one navbar-item per entry, closing the mobile menu on tap */}
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="navbar-item" onClick={closeMenu}>
              {label}
            </Link>
          ))}
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <ThemeToggle />
          </div>
          <div className="navbar-item">
            <Link href="/bookings" onClick={closeMenu}>
              <button className="button is-link">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
