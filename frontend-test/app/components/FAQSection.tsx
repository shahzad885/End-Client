'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './FaqSection.module.css';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      id: 1,
      question: "Can I cancel at anytime?",
      answer: "Yes, you can cancel at any time. However, we would appreciate your feedback to help us improve our service."
    },
    {
      id: 2,
      question: "What is Ai Writer?",
      answer: ""
    },
   
  ];

  return (
    <section className={styles.faqWrapper}>
      <div className={styles.faqContainer}>
      
        <h2 className={styles.faqTitle}>Frequently Asked Question<span className={styles.dot}>.</span></h2>
        <p className={styles.faqSubtitle}>Answers to the most frequently asked questions about Blaze Writer AI.</p>

        <div className={styles.faqList}>
          {faqData.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div key={item.id} className={styles.faqItem}>
                <div 
                  className={styles.questionHeader}
                  onClick={() => handleToggle(index)}
                >
                  <h3 className={styles.questionText}>{item.question}</h3>
                  <div className={styles.iconWrapper}>
                    <Image 
                      src={isActive ? "/images/minus.png" : "/images/plus.png"}
                      alt="Toggle Icon"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                
                <div className={`${styles.answerWrapper} ${isActive ? styles.open : ''}`}>
                  <p className={styles.answerText}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;