import React from "react";
import Image from "next/image";
import styles from "./MoreFeaturesSection.module.css";

interface MoreFeatureItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  highlighted: boolean;
}

const moreFeaturesData: MoreFeatureItem[] = [
  {
    id: 1,
    icon: "/images/niche-icon.png",
    title: "Niche Customization",
    description:
      "Select and define your specific niche to receive content that aligns perfectly with your business or personal interests.",
    highlighted: true,
  },
  {
    id: 2,
    icon: "/images/interface-icon.png",
    title: "User-Friendly Interface",
    description:
      "Enjoy a seamless experience with an intuitive platform that makes it easy to input preferences and receive generated content promptly.",
    highlighted: false,
  },
  {
    id: 3,
    icon: "/images/content-icon.png",
    title: "Automated Content Generation",
    description:
      "Utilize AI algorithms to automatically generate high-quality and unique articles tailored to your chosen niche.",
    highlighted: false,
  },
];

const MoreFeaturesSection = () => {
  return (
    <section className={styles.moreFeaturesSection}>
      <div className={styles.topRow}>
        <div className={styles.topLeft}>
          <h2 className={styles.sectionHeading}>
            More Awesome Features<span className={styles.dot}>.</span>
          </h2>
        </div>
        <div className={styles.topRight}>
          <p className={styles.sectionSubText}>
            Experience the multiplier effect when our services work together to
            accelerate your business growth. Choose a complete solution or
            select individual services that match your current needs.
          </p>
        </div>
      </div>

      <div className={styles.cardsRow}>
        {moreFeaturesData.map((feature) => (
          <div
            key={feature.id}
            className={
              feature.highlighted
                ? `${styles.card} ${styles.cardHighlighted}`
                : styles.card
            }
          >
            <div className={styles.iconBox}>
              <Image
                src={feature.icon}
                alt={feature.title}
                width={34}
                height={34}
              />
            </div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardDesc}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreFeaturesSection;