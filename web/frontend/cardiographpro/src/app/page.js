import AboutSection from '../components/AboutSection';
import ProcessSection from '../components/ProcessSection';
import KeySection from '../components/KeySection';
import BannerSection from '@/components/BannerSection';

export default function HomePage() {
    return (
        <div>
            <BannerSection />
            <KeySection />
            <AboutSection />
            <ProcessSection />
        </div>
    );
}
