// src/app/about/page.js
import styles from './services.module.css'; // Import the CSS module
import Banner from '../../components/Banner'; // Import the Banner component
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';

export default function ServicesPage() {
    return (
        <section>
            <Banner heading="Our Services" breadcrumb="Services" />
            <ServicesSection />
            <ProcessSection />
        </section>
    );
}
