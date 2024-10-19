'use client'; // This marks the component as a Client Component
import styles from './Header.module.css';
import Button from './Button'; // Importing the Button component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'; // Importing social media icons
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'; // Importing the lightbulb icon for the slogan

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
                <h1>Cardiograph Pro</h1>
                <nav>
                    <ul className={styles.nav}>
                        <li className={styles.navItem}>
                            <a href="/">Home</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="/about">About</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="/contact">Contact</a>
                        </li>
                        {/* Remove duplicates for clarity */}
                    </ul>
                </nav>
                <Button
                    variant="primary"
                    onClick={() => alert('Button clicked!')}>
                    Get Started
                </Button>
            </div>
        </header>
    );
};

export default Header;
