import Image from 'next/image';
import styles from './SharadSirImageGrid.module.scss';

const images = [
  "Dr. Lakhotia as National Selector for Gyan Vigyan Puraskar with Hon’ble Home minister Govt of India at Vigyan Bhawan..jpg",
  "Dr. Lakhotia receiving Gold Medal from international Conference.jpg",
  "Dr. Lakhotia with Dr. Rajiv Pratap Rudy in a free Eye Camp..jpg",
  "Dr. Lakhotia with Mr. Arun Jaitly Honible Minister..jpg",
  "Dr. Lakhotia with Mr. Jaiswal, Home minister inaugurating SAARC Ophthalmology Conference..jpg",
  "Dr. Lakhotia with President of India.jpg",
  "Dr. Lakhotia with shri Ajay Maken then Home minister.jpg",
  "Dr. Lakhotia with Shri L.K. Advanji.jpg",
  "Dr. Lakhotia with Shri Shiv Khera and shri L.R.Agarwal inagurating cataract session at Sanatan Dharam Mandir.jpg",
  "Dr. Lakhotia with Smt.Sonia Gandhi..jpg",
  "Dr. Lakhotia with the Home minister..jpg",
  "Dr.-Lakhotia-adjudged-amongst-top-10-doctors-of-India-in-2011..jpg",
  "Dr.-Lakhotia-receiving-India-Top-Doctors-Award-at-Hotel-Hilton-2013.jpg",
  "Dr.Lakhotia receiving Best Ophthalmologist of Delhi NCR for yr 2014 by Medgate..jpg",
  "Dr.Lakhotia receiving Human Care Award of Millennium by chief Minister of Delhi in 1999..jpg",
  "Dr.Lakhotia with Dr. Harshvardhan.jpg",
  "Dr.Lakhotia with Shri Kapil Sibal, minister..jpg",
  "Dr.Lakhotia withshri Ravi Shankarji as guest of honour.jpg",
  "Dr.Sharad-Lakhotia,-President-Eye-Care-Awareness-Foundation-at-an-Award-function-at-IHC-2008.jpg",
  "Dr.Sharad-Lakhotia-receiving-Medical-Excellence-Award-at-function-organized-by-Aditya-media-&-Sanskriti.jpg"
];

export default function SharadSirImageGrid() {
  return (
    <div className={styles.grid}>
      {images.map((img) => (
        <div key={img} className={styles.item}>
          <Image
            src={`/sharadSirImages/${img}`}
            alt={img}
            width={320}
            height={220}
            className={styles.image}
          />
          <div className={styles.caption}>{img.replace(/\.[^.]+$/, '')}</div>
        </div>
      ))}
    </div>
  );
}
