// src/app/about/page.js
import styles from './about.module.css'; // Import the CSS module
import ImageComponent from '../../components/ImageComponent';
import aboutBanner from '../../assets/images/about-banner.jpg';

export default function AboutPage() {
    return (
        <section className={styles.section}>
            <div className={styles.about}>
                <h1>About Us</h1>
                <ImageComponent
                    src={aboutBanner}
                    alt="About Us Banner"
                    width={'600%'}
                />
            </div>
            <h2 className={styles.heading}>About Us</h2>
            <p className={styles.text}>Asad Ali - Full Stack Developer</p>

            <ul className={styles.list}>
                <li className={styles.listItem}>
                    Email:{' '}
                    <a
                        className={styles.link}
                        href="mailto:support@cardiographpro.com">
                        support@cardiographpro.com
                    </a>
                </li>
                <li className={styles.listItem}>Phone: (123) 456-7890</li>
                <li className={styles.listItem}>
                    Address: 123 Heartbeat Lane, Health City, HC 12345
                </li>
            </ul>
        </section>
    );
}
