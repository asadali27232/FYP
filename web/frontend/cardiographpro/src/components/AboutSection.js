// src/components/AboutSection.js
'use client'; // This marks the component as a Client Component
import styles from './AboutSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faMapMarkerAlt,
    faPhone,
    faEnvelope,
    faCheck,
} from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

const AboutSection = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.imageContainer}>
                {/* The image will be set as a background in CSS */}
            </div>
            <div className={styles.textContainer}>
                <h3>About Us</h3>
                <h2>Medical Services & Diagnostics</h2>
                <p>
                    Committed To Delivering High Quality Medical & Diagnostics
                    Services!
                </p>
                <p>
                    Heart disease is the leading cause of mortality worldwide,
                    requiring early detection for urgent intervention. Delayed
                    diagnosis through traditional methods limits treatment
                    options.
                </p>
                <div className={styles.listContainer}>
                    <div className={styles.listItem}>
                        <FontAwesomeIcon
                            icon={faCheck}
                            size="lg"
                            style={{ marginRight: '1rem', color: '#dc143c' }}
                        />
                        <p>ECG Signal Prediction</p>
                    </div>
                    <div className={styles.listItem}>
                        <FontAwesomeIcon
                            icon={faCheck}
                            size="lg"
                            style={{ marginRight: '1rem', color: '#dc143c' }}
                        />
                        <p>ECG Image Report Prediction </p>
                    </div>
                    <div className={styles.listItem}>
                        <FontAwesomeIcon
                            icon={faCheck}
                            size="lg"
                            style={{ marginRight: '1rem', color: '#dc143c' }}
                        />
                        <p>Chatbot</p>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <Button
                            onClick={() => console.log('Learn More Clicked')}>
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
