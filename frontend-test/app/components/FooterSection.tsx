import React from 'react';
import Image from 'next/image';
import styles from './FooterSection.module.css';

const FooterSection = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/blaze-logo.png"
            alt="Blaze Writer AI Logo"
            width={200}
            height={40}
          />
        </div>
         <nav className={styles.navLinks}>
          <a href="#" className={styles.link}>Home</a>
          <a href="#" className={styles.link}>Pricing</a>
          <a href="#" className={styles.link}>Contact Us</a>
          <a href="#" className={styles.link}>Privacy Policy</a>
        </nav>

        <div className={styles.subscribeSection}>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Enter your email" className={styles.emailInput} />
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
          <p className={styles.privacyText}>We care about your data in our privacy policy.</p>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.socialIcons}>
            <Image 
              src="/images/x.png" 
              alt="X" 
              width={24} 
              height={24}
              className={styles.iconImg} 
            />
            <Image 
              src="/images/linkedi.png" 
              alt="LinkedIn" 
              width={24} 
              height={24}
              className={styles.iconImg}
            />
            <Image 
              src="/images/fb.png" 
              alt="Facebook" 
              width={24} 
              height={24}
              className={styles.iconImg}
            />
             <Image 
              src="/images/tiktok.png" 
              alt="TikTok" 
              width={24} 
              height={24}
              className={styles.iconImg}
            />
          </div>
          <p className={styles.copyright}>©2025 BLAZA WRITER AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;