'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Mail, Facebook, Instagram, Linkedin, Phone, ArrowRight } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle scroll trigger to add sticky styles and collapse the top bar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled state (for compact padding/glassmorphic background)
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // If mobile menu is open, force navbar to remain visible
      if (menuOpen) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Smart sticky visibility logic
      if (currentScrollY <= 80) {
        // Always show navbar at the very top of the page
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling DOWN -> hide navbar smoothly
        setVisible(false);
      } else {
        // Scrolling UP -> reveal navbar smoothly
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]); // Re-subscribe if menuOpen state changes to keep it in sync

  // Close menu & dropdown on route change
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

  // Close when clicking outside
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

  const closeAllMenus = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${visible ? '' : styles.hidden}`}>
      <div className={styles.floatingCard} ref={navRef}>
        
        {/* ================= TOP UTILITY BAR ================= */}
        <div className={styles.topBar}>
          <div className={styles.topBarLeft}>
            <p className={styles.announcement}>
              Ready to Scale Your Brand?{' '}
              <Link href="/contact" className={styles.announcementLink}>
                Contact Us Today
              </Link>
            </p>
          </div>
          <div className={styles.topBarRight}>
            <a href="mailto:fixyads@gmail.com" className={styles.topContactLink}>
              <Mail size={14} className={styles.contactIcon} />
              <span>fixyads@gmail.com</span>
            </a>
            <div className={styles.socialDivider} />
            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/profile.php?id=61568361441860"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://www.instagram.com/fixyads/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://www.linkedin.com/company/fixyads/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* ================= MAIN NAVIGATION BAR ================= */}
        <div className={styles.navContainer}>
          
          {/* Logo container */}
          <Link href="/" className={styles.logoLink} onClick={closeAllMenus}>
            <img src="/Logo/Newlogo.png" alt="FixyAds Logo" className={styles.logoImage} />
          </Link>

          {/* Navigation Links */}
          <nav className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
            
            <Link href="/" className={styles.navLink} onClick={closeAllMenus}>
              Home
            </Link>

            {/* SERVICES DROPDOWN */}
            <div
              className={`${styles.dropdown} ${openDropdown === 'services' ? styles.open : ''}`}
              onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown('services')}
              onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
            >
              <Link
                href="/services"
                className={styles.navLink}
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    toggleDropdown(e, 'services');
                  }
                }}
              >
                Services <span className={styles.arrow}>▾</span>
              </Link>

              <div className={styles.dropdownMenu}>
                <Link href="/services/search-engine-optimization" onClick={closeAllMenus}>
                  SEO
                </Link>
                <Link href="/services/social-media-marketing" onClick={closeAllMenus}>
                  SMM
                </Link>
                <Link href="/services/content-branding" onClick={closeAllMenus}>
                  Content & Branding
                </Link>
                <Link href="/services/web-development" onClick={closeAllMenus}>
                  Web Development
                </Link>
                <Link href="/services/influencer-marketing" onClick={closeAllMenus}>
                  Influencer Marketing
                </Link>
              </div>
            </div>

            {/* COURSES DROPDOWN */}
            <div
              className={`${styles.dropdown} ${openDropdown === 'courses' ? styles.open : ''}`}
              onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown('courses')}
              onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
            >
              <Link
                href="/courses"
                className={styles.navLink}
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    toggleDropdown(e, 'courses');
                  }
                }}
              >
                Courses <span className={styles.arrow}>▾</span>
              </Link>

              <div className={styles.dropdownMenu}>
                <Link href="/courses/digital-marketing" onClick={closeAllMenus}>
                  Digital Marketing
                </Link>
                <Link href="/courses/web-development" onClick={closeAllMenus}>
                  Web Development
                </Link>
                <Link href="/courses/placement-support" onClick={closeAllMenus}>
                  Placement Support
                </Link>
              </div>
            </div>

            <Link href="/about" className={styles.navLink} onClick={closeAllMenus}>
              About
            </Link>
            <Link href="/blog" className={styles.navLink} onClick={closeAllMenus}>
              Blogs
            </Link>

            {/* Mobile-only CTA */}
            <div className={styles.mobileCta}>
              <Link href="/contact" className="btn btn-primary" onClick={closeAllMenus}>
                Get a Quote
              </Link>
            </div>
          </nav>

          {/* Right Group: Desktop CTA & Mobile Toggle Button */}
          <div className={styles.rightGroup}>
            <Link href="/contact" className={styles.orangeCtaBtn}>
              <span>Get a Quote</span>
              <ArrowRight size={16} className={styles.btnArrow} />
            </Link>

            <button
              className={`${styles.mobileMenuBtn} ${menuOpen ? styles.btnOpen : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </div>

        </div>

      </div>
    </header>
  );
};

export default Navbar;