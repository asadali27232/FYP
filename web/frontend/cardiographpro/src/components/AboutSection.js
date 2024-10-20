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
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div className={styles.listContainer}>
                    <div className={styles.listItem}>
                        <FontAwesomeIcon
                            icon={faCheck}
                            size="lg"
                            style={{ marginRight: '1rem', color: '#dc143c' }}
                        />
                        <p>Ambulance Services</p>
                    </div>
                    <div className={styles.listItem}>
                        <FontAwesomeIcon
                            icon={faCheck}
                            size="lg"
                            style={{ marginRight: '1rem', color: '#dc143c' }}
                        />
                        <p>Oxygen on Wheel</p>
                    </div>
                    <div className={styles.listItem}>
                        <FontAwesomeIcon
                            icon={faCheck}
                            size="lg"
                            style={{ marginRight: '1rem', color: '#dc143c' }}
                        />
                        <p>Pharmacy on Clinic</p>
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <Button onClick={() => alert('Button clicked!')}>
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
