import styles from "./TestimonialsSection.module.css";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: "I strongly loved the number of 'The excellence and thoroughness'",
    name: "John Discologee",
    role: "CTO, Tech Innovations Inc.",
    avatar: "/images/john.png",
    isCenter: false,
    shade: "/images/left_test.png",
    shadePosition: "left",
  },
  {
    id: 2,
    text: "It has enabled me to significantly boost the number of weekly posts I generate. The excellence and thoroughness of each article are impressive.",
    name: "Sarah Johnson",
    role: "Content Manager, Digital Media Co.",
    avatar: "/images/sarah.png",
    isCenter: true,
    shade: null,
    shadePosition: null,
  },
  {
    id: 3,
    text: "As a business owner, it proves to be an invaluable tool. Including a blog may be straightforward, making it straightforward to challenge-transformed that aspect entirely.",
    name: "Tran Li",
    role: "Developer",
    avatar: "/images/tran.png",
    isCenter: false,
    shade: "/images/right_test.png",
    shadePosition: "right",
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Testimonials<span className={styles.dot}>.</span>
        </h2>
        <p className={styles.subtitle}>
          Discover the stories of satisfaction and success straight from our valued users
        </p>
      </div>

      <div className={styles.cardsRow}>
        {testimonials.map((item) => (
          <div
            key={item.id}
            className={item.isCenter ? styles.cardCenter : styles.cardSide}
          >
            {item.shade && item.shadePosition === "left" && (
              <div className={styles.shadeLeft}>
                <Image src={item.shade} alt="" fill style={{ objectFit: "cover" }} />
              </div>
            )}
            {item.shade && item.shadePosition === "right" && (
              <div className={styles.shadeRight}>
                <Image src={item.shade} alt="" fill style={{ objectFit: "cover" }} />
              </div>
            )}

            <p className={styles.cardText}>{item.text}</p>

            <div className={styles.authorRow}>
              <div className={styles.avatarWrapper}>
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={50}
                  height={50}
                  className={styles.avatar}
                />
              </div>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{item.name}</span>
                <span className={styles.authorRole}>{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

     
    </section>
  );
}