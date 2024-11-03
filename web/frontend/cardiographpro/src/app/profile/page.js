'use client'; // This marks the component as a Client Component
import styles from './profile.module.css';

import Banner from '../../components/Banner';

export default function Login() {
    return (
        <main>
            <Banner heading="Profile" breadcrumb="Profile" />
            <section className={styles.profile}>
                <h2>Profile</h2>
                <p>Profile page content</p>
            </section>
        </main>
    );
}
