import React from "react";
import Image from "next/image";
import styles from "./FeaturesSection.module.css";

interface FeatureItem {
  text: string;
}
 
// Sample data for features
const featureItems: FeatureItem[] = [
  { text: "Bank-level encryption and secure data handling" },
  { text: "Regulated financial partners and reputable insurers" },
  { text: "Dedicated support team ready to assist" },
  { text: "Dedicated support team ready to assist" },
];

const FeaturesSection = () => {
  return (
    <section className={styles.featuresSection}>

      <div className={styles.topRow}>
        <div className={styles.topLeft}>
          <h2 className={styles.sectionHeading}>
            Our Amazing Features<span className={styles.dot}>.</span>
          </h2>
        </div>
        <div className={styles.topRight}>
          <p className={styles.sectionSubText}>
            Experience the multiplier effect when our services work together to
            accelerate your business growth. Choose a complete solution or select
            individual services that match your current needs.
          </p>
        </div>
      </div>

      <div className={styles.contentRow}>
        <div className={styles.featureImageWrapper}>
          <Image
            src="/images/feature-person.png"
            alt="Person using laptop"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.featureContent}>
          <h3 className={styles.featureTitle}>Create articles with a click</h3>
          <p className={styles.featureDesc}>
            Ai Writer helps you to create high-quality feature-rich articles
            that are unique and optimized for your Business.
          </p>
          <ul className={styles.featureList}>
            {featureItems.map((item, index) => (
              <li key={index} className={styles.featureListItem}>
                <span className={styles.checkIcon}>✔</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  );
};

export default FeaturesSection;
