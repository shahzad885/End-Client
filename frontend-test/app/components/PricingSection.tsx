"use client";

import React, { useState } from "react";
import styles from "./PricingSection.module.css";

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  id: number;
  price: string;
  period: string;
  title: string;
  credits: string;
  features: PricingFeature[];
  recommended: boolean;
  buttonLabel: string;
}

const plans: PricingPlan[] = [
  {
    id: 1,
    price: "0",
    period: "Free",
    title: "For hobby projects",
    credits: "03 free Credits",
    features: [
      { text: "3 Articles Free" },
      { text: "AI-powered writer" },
      { text: "Generate 1,500+ word articles" },
    ],
    recommended: false,
    buttonLabel: "Subscribe",
  },
  {
    id: 2,
    price: "79",
    period: "Per month",
    title: "Pro Plan",
    credits: "75 Credits included",
    features: [
      { text: "Access to all article types, including long form and advanced formats" },
      { text: "Priority email support" },
    ],
    recommended: true,
    buttonLabel: "Manage",
  },
  {
    id: 3,
    price: "29",
    period: "Per month",
    title: "Starter Plan",
    credits: "20 Credits included",
    features: [
      { text: "Access to basic article types (eg: blogs, short form content)" },
      { text: "Email support" },
    ],
    recommended: false,
    buttonLabel: "Subscribe",
  },
  {
    id: 4,
    price: "199",
    period: "Per month",
    title: "Agency Plan",
    credits: "250 Credits included",
    features: [
      { text: "All article types, including SEO optimized and multilingual content" },
    ],
    recommended: false,
    buttonLabel: "Subscribe",
  },
];

const PricingSection = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className={styles.pricingSection}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Pricing<span className={styles.dot}>.</span>
        </h2>
        <p className={styles.subText}>
          Whatever your status, our offers evolve according to your needs.
        </p>

        <div className={styles.toggle}>
          <button
            className={billing === "monthly" ? `${styles.toggleBtn} ${styles.toggleActive}` : styles.toggleBtn}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            className={billing === "yearly" ? `${styles.toggleBtn} ${styles.toggleActive}` : styles.toggleBtn}
            onClick={() => setBilling("yearly")}
          >
            Yearly
          </button>
        </div>

        <div className={styles.cardsRow}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={
                plan.recommended
                  ? `${styles.card} ${styles.cardRecommended}`
                  : styles.card
              }
            >
              {plan.recommended && (
                <div className={styles.recommendedBadge}>Recommended</div>
              )}

              <div className={styles.priceRow}>
                <span className={styles.dollar}>$</span>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.period}>{plan.period}</span>
              </div>

              <h3 className={styles.planTitle}>{plan.title}</h3>
              <p className={styles.credits}>{plan.credits}</p>

              <ul className={styles.featureList}>
                {plan.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <span className={styles.checkIcon}>✔</span>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <button
                className={
                  plan.recommended
                    ? `${styles.btn} ${styles.btnDark}`
                    : styles.btn
                }
              >
                {plan.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
