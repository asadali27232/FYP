// src/components/Footer.js
'use client'; // This marks the component as a Client Component
import styles from './Footer.module.css'; // Import the CSS for the footer
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
    faMapMarkerAlt,
    faPhone,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={`${styles.footerItem} ${styles.footerLarge}`}>
                    <h4>Cardiograph Pro</h4>
                    <p>
                        Monitor your heart data in real-time with our advanced
                        cardiograph tools. Our technology ensures the most
                        accurate results for effective heart monitoring.
                    </p>
                    <div className={styles.socialLinks}>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                    </div>
                </div>
                <div className={styles.footerItem}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li className={styles.navItem}>
                            <a href="/">Home</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="/ecgimage">Image Prediction</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="/prediction">Signal Prediction</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="/appointment">Appointment</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="/signup">SignUp</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.footerItem}>
                    <h4>Contact Info</h4>
                    <div className={styles.contactItem}>
                        <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            size="lg"
                            style={{ marginRight: '1rem' }}
                        />
                        <p>COMSATS University Islamabad Lahore Campus</p>
                    </div>
                    <div className={styles.contactItem}>
                        <FontAwesomeIcon
                            icon={faPhone}
                            size="lg"
                            style={{ marginRight: '1rem' }}
                        />
                        <a href="#">0307-4315952</a>
                    </div>
                    <div className={styles.contactItem}>
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            size="lg"
                            style={{ marginRight: '1rem' }}
                        />
                        <a
                            href="mailto:example@info.com"
                            className={styles.contactLink}>
                            contact@cardiographpro.com
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>Cardiograph Pro</p>
                <p>
                    &copy; {new Date().getFullYear()} Cardiograph Pro. All
                    rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
