// src/app/about/page.js
import styles from './prediction.module.css'; // Import the CSS module
import Banner from '../../components/Banner'; // Import the Banner component
import UploadSignals from '@/components/UploadSignals';
import ChatBot from '@/components/ChatBot';

export default function PredictionPage() {
    return (
        <section>
            <Banner heading="Get Prediction" breadcrumb="Prediction" />
            <UploadSignals />
            <ChatBot />
        </section>
    );
}
