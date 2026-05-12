import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Image from "next/image";
import styles from "./page.module.css";
import MoreFeaturesSection from "./components/MoreFeaturesSection";
import PricingSection from "./components/PricingSection";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.heroBackground}>
        <Image
          src="/images/globe-lines.png"
          alt=""
          width={700}
          height={700}
          className={styles.globeImage}
        />
        <Header />
        <HeroSection />
      </div>

      <div className={styles.mainContent}>
        <FeaturesSection />
        <MoreFeaturesSection />
        <PricingSection/>

      </div>
    </div>
  );
}