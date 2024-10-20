// src/app/about/page.js
import styles from './chatbot.module.css'; // Import the CSS module
import Banner from '../../components/Banner'; // Import the Banner component

export default function ChatbotPage() {
    return (
        <section>
            <Banner heading="Medical Chatbot" breadcrumb="chatbot" />
        </section>
    );
}
