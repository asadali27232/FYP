// src/app/about/page.js
import styles from './about.module.css'; // Import the CSS module
import Banner from '../../components/Banner'; // Import the Banner component
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';

export default function AboutPage() {
    return (
        <section>
            <Banner heading="About Us" breadcrumb="Services Details" />
            <AboutSection />
            <TeamSection />
        </section>
    );
}
