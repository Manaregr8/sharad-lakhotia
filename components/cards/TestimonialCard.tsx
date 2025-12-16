import { testimonials } from "@/lib/testimonials";
import styles from "./TestimonialCard.module.scss";

interface TestimonialCardProps {
  index: number;
}

export default function TestimonialCard({ index }: TestimonialCardProps) {
  const testimonial = testimonials[index];
  
  // Generate consistent avatar background color based on index
  const avatarColors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  ];
  const avatarColor = avatarColors[index % avatarColors.length];
  const initials = testimonial.patient.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <blockquote className={styles.card}>
      <div className={styles.rating}>
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 1l2.5 6.5L19 8.5l-5 4.5 1.5 6.5L10 16l-5.5 3.5L6 13 1 8.5l6.5-1L10 1z"/>
          </svg>
        ))}
      </div>
      
      <p className={styles.quote}>"{testimonial.quote}"</p>
      
      <footer className={styles.footer}>
        <div className={styles.avatar} style={{ background: avatarColor }}>
          {initials}
        </div>
        <div className={styles.info}>
          <span className={styles.patient}>{testimonial.patient}</span>
          <span className={styles.treatment}>{testimonial.treatment}</span>
        </div>
      </footer>
    </blockquote>
  );
}
