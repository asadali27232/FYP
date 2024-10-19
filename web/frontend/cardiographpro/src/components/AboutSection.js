// src/components/AboutSection.js
import Image from 'next/image';
import styles from './AboutSection.module.css';

const AboutSection = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.imageContainer}>
                <Image
                    src="/path/to/your/image.jpg"
                    alt="About Us"
                    className={styles.image}
                    layout="responsive"
                    width={500} // Adjust the width as needed
                    height={300} // Adjust the height as needed
                />
            </div>
            <div className={styles.textContainer}>
                <h3>About Us</h3>
                <h2>Medical Services & Diagnostics</h2>
                <p>
                    Committed To Delivering High Quality Medical & Diagnostics
                    Services!
                </p>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <ul className={styles.servicesList}>
                    <li>Ambulance Services</li>
                    <li>Oxygen on Wheel</li>
                    <li>Pharmacy on Clinic</li>
                    <li>On duty Doctors</li>
                    <li>24/7 Medical Emergency</li>
                </ul>
            </div>
        </section>
    );
};

export default AboutSection;