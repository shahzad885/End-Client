import React from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>

      <Image
        src="/images/globe-lines.png"
        alt=""
        width={500}
        height={500}
        className={styles.globeImage}
      />

      <div className={styles.leftContent}>
        <h1 className={styles.heading}>
          Create High-Quality Articles with a{" "}
          <span className={styles.highlightWord}>Click.</span>
        </h1>

        <p className={styles.subText}>
          Immediately create relevant articles that are unique and optimized for your business.
        </p>

        <div className={styles.buttonRow}>
          <button className={styles.freeArticlesBtn}>Get 3 Articles For Free →</button>
          <button className={styles.contactSalesBtn}>Contact Sales</button>
        </div>
      </div>

      <div className={styles.rightContent}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/hero-person.png"
            alt="Person working on laptop"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;