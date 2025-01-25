// src/app/about/page.js
import styles from './prediction.module.css'; // Import the CSS module
import Banner from '../../components/Banner'; // Import the Banner component
import UploadImage from '@/components/UploadImage';
import ChatBot from '@/components/ChatBot';

export default function PredictionPage() {
    return (
        <section>
            <Banner heading="Image Prediction" breadcrumb="Image Prediction" />
            <UploadImage />
            <ChatBot />
        </section>
    );
}
