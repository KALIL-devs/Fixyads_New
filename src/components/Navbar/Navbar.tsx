'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close menu & dropdown when URL changes
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Toggle dropdown (mobile only)
  const toggleDropdown = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.innerWidth > 768) return; 
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu when any dropdown item is clicked
  const closeAllMenus = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer} ref={navRef}>

        {/* LOGO */}
        <Link href="/">
          <img src="/Logo/Newlogo.png" alt="FixyAds Logo" className={styles.logoImage} />
        </Link>

        {/* NAV LINKS */}
        <nav className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>

          <Link href="/" className={styles.navLink}>Home</Link>

          {/* SERVICES */}
          <div className={`${styles.dropdown} ${openDropdown === 'services' ? styles.open : ''}`}>
            <span className={styles.navLink} onClick={(e) => toggleDropdown(e, 'services')}>
              Services ▾
            </span>

            <div className={styles.dropdownMenu}>
              <Link href="/Services/search-engine-optimization" onClick={closeAllMenus}>SEO</Link>
              <Link href="/Services/social-media-marketing" onClick={closeAllMenus}>SMM</Link>
              <Link href="/Services/content-branding" onClick={closeAllMenus}>Content & Branding</Link>
              <Link href="/Services/web-development" onClick={closeAllMenus}>Web Development</Link>
              <Link href="/Services/influencer-marketing" onClick={closeAllMenus}>Influencer Marketing</Link>
            </div>
          </div>

          {/* COURSES */}
          <div className={`${styles.dropdown} ${openDropdown === 'courses' ? styles.open : ''}`}>
            <span className={styles.navLink} onClick={(e) => toggleDropdown(e, 'courses')}>
              Courses ▾
            </span>

            <div className={styles.dropdownMenu}>
              <Link href="/courses/digital-marketing" onClick={closeAllMenus}>Digital Marketing</Link>
              <Link href="/courses/web-development" onClick={closeAllMenus}>Web Development</Link>
              <Link href="/courses/Placement-Support" onClick={closeAllMenus}>Placement Support</Link>
            </div>
          </div>

          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/blog" className={styles.navLink}>Blogs</Link>
          <Link href="/contact" className="btn btn-primary">Get Free Audit</Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </div>
    </header>
  );
};

export default Navbar;
