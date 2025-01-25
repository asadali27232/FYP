'use client'; // This marks the component as a Client Component
import AboutSection from '../components/AboutSection';
import ProcessSection from '../components/ProcessSection';
import KeySection from '../components/KeySection';
import BannerSection from '@/components/BannerSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TeamSection from '@/components/TeamSection';

export default function HomePage() {
    return (
        <div>
            <BannerSection />
            <KeySection />
            <AboutSection />
            {/* <ServicesSection />
            <WhyChooseUs />
            <ProcessSection />
            <TeamSection /> */}
        </div>
    );
}
