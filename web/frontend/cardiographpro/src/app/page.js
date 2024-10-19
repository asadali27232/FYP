// src/app/page.js
import Image from 'next/image';
import styles from './page.module.css';
import bannerSideImage from '../assets/images/banner-img-1.png'; // Adjust the import according to the file extension

export default function HomePage() {
    return (
        <div className={styles.container}>
            <section className={styles.banner}>
                <div className={styles.textContainer}>
                    <h3 className={styles.subHeading}>
                        Highest level of service you can find
                    </h3>
                    <h2 className={styles.heading}>
                        Take{' '}
                        <span>Care of Your</span>{' '}
                        Health Now.
                    </h2>
                    <p>
                        Monitor your heart data in real-time with our advanced
                        cardiograph tools. Our technology ensures the most
                        accurate results for effective heart monitoring.
                    </p>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src={bannerSideImage}
                        alt="Cardiograph banner image"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </section>
            <section className={styles.services}>
                <h2 className={styles.heading}>Our Services</h2>
                <div className={styles.serviceCards}>
                    <div className={styles.serviceCard}>
                        <h3>Cardiograph Monitoring</h3>
                        <p>
                            Monitor your heart data in real-time with our
                            advanced cardiograph tools. Our technology ensures
                            the most accurate results for effective heart
                            monitoring.
                        </p>
                    </div>
                    <div className={styles.serviceCard}>
                        <h3>Heart Rate Analysis</h3>
                        <p>
                            Analyze your heart rate data with our advanced
                            tools. Our technology ensures the most accurate
                            results for effective heart rate analysis.
                        </p>
                    </div>
                    <div className={styles.serviceCard}>
                        <h3>Health Tracking</h3>
                        <p>
                            Track your health data with our advanced tools. Our
                            technology ensures the most accurate results for
                            effective health tracking.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
