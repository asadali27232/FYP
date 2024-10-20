// src/app/about/page.js
import styles from './about.module.css'; // Import the CSS module
import Banner from '../../components/Banner'; // Import the Banner component

export default function AboutPage() {
    return (
        <section>
            <Banner heading="Our Services" breadcrumb="Services" />
        </section>
    );
}
