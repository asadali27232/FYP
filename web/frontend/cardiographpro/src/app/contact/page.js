// src/app/contact/page.js
import styles from './contact.module.css'; // Import the CSS module

export default function ContactPage() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Contact Us</h2>
            <p className={styles.text}>Asad Ali Developer</p>

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
