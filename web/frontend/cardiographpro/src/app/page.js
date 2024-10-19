import Image from 'next/image';
import styles from './page.module.css';
import bannerSideImage from '../assets/images/banner-img-1.png';
import backgroundShape from '../assets/images/shape-6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendarCheck,
    faChartLine,
    faRobot,
    faUserMd,
} from '@fortawesome/free-solid-svg-icons'; // Import relevant icons
import AboutSection from '../components/AboutSection';

export default function HomePage() {
    return (
        <div className={styles.container}>
            <section className={styles.banner}>
                <div className={styles.textContainer}>
                    <h3 className={styles.subHeading}>
                        Highest level of service you can find
                    </h3>
                    <h2 className={styles.heading}>
                        Take <span>Care of Your</span> Health Now.
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
                {/* Background Image */}
                <Image
                    src={backgroundShape}
                    alt="Background Shape"
                    className={styles.backgroundImage}
                    layout="intrinsic"
                    width={200} // Set the desired width
                    height={200} // Set the desired height
                />

                <div className={styles.serviceCards}>
                    <div className={styles.serviceCard}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon
                                icon={faCalendarCheck}
                                size="1x"
                                className={styles.iconStyle}
                            />
                        </div>
                        <h3>Appointment</h3>
                        <p>
                            Easily schedule your appointments with our
                            user-friendly platform.
                        </p>
                    </div>
                    <div className={styles.serviceCard}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon
                                icon={faChartLine}
                                size="1x"
                                className={styles.iconStyle}
                            />
                        </div>
                        <h3>Prediction</h3>
                        <p>
                            Get accurate predictions for your health metrics and
                            trends.
                        </p>
                    </div>
                    <div className={styles.serviceCard}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon
                                icon={faRobot}
                                size="1x"
                                className={styles.iconStyle}
                            />
                        </div>
                        <h3>Chatbot</h3>
                        <p>
                            Engage with our medical chatbot for instant health
                            assistance.
                        </p>
                    </div>
                    <div className={styles.serviceCard}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon
                                icon={faUserMd}
                                size="1x"
                                className={styles.iconStyle}
                            />
                        </div>
                        <h3>Profiles</h3>
                        <p>
                            Create and manage your comprehensive medical
                            profiles online.
                        </p>
                    </div>
                </div>
            </section>

            <AboutSection />
        </div>
    );
}
