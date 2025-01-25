'use client'; // This marks the component as a Client Component
import styles from './Header.module.css';
import Button from './Button'; // Importing the Button component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'; // Importing social media icons
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'; // Importing the Image component

const Header = () => {
    return (
        <header className={styles.header}>
            {/* Top Header for slogan and social links */}
            <div className={styles.topHeader}>
                <div className={styles.slogan}>
                    <FontAwesomeIcon
                        icon={faLightbulb}
                        size="sm"
                        style={{ marginRight: '0.5rem' }}
                    />
                    <span>Your Health, Our Passion</span> {/* Slogan */}
                </div>
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

            {/* Bottom Header for logo and navigation */}
            <div className={styles.bottomHeader}>
                <div className={styles.logo}>
                    <a href="/">
                        <Image
                            src="/logo.png"
                            alt="Cardiograph Pro"
                            layout="responsive"
                            width={150}
                            height={150}
                        />
                    </a>
                </div>
                <nav>
                    <ul className={styles.nav}>
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
                        {/* Remove duplicates for clarity */}
                    </ul>
                </nav>
                <Button onClick={() => (window.location.href = '/login')}>
                    Login
                </Button>
            </div>
        </header>
    );
};

export default Header;
