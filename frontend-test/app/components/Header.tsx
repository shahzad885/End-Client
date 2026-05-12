import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "Contact us", href: "#" },
];

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.headerCard}>
        <div className={styles.logoArea}>
          <Image
            src="/images/blaze-logo.png"
            alt="Blaze Writer AI"
            width={180}
            height={36}
            style={{ objectFit: "contain" }}
          />
        </div>

        <nav className={styles.navLinks}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.buttonsContainer}>
          <button className={styles.getStartedBtn}>Get Started →</button>
          <button className={styles.signInBtn}>Sign in</button>
        </div>
      </header>
    </div>
  );
};

export default Header;