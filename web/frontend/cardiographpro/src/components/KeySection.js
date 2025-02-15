import Image from 'next/image';
import styles from './KeySection.module.css';
import backgroundShape from '../assets/images/shape-6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendarCheck,
    faChartLine,
    faRobot,
    faUserMd,
} from '@fortawesome/free-solid-svg-icons'; // Import relevant icons

const KeySection = () => {
    return (
        <section className={styles.services}>
            {/* Background Image */}
            <Image
                src={backgroundShape}
                alt="Background Shape"
                className={styles.backgroundImage}
                layout="intrinsic"
                width={200} // Set the desired width
                height={200} // Set the desired height
            />

            <div className={styles.serviceCards}>
                <div className={styles.serviceCard}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon
                            icon={faCalendarCheck}
                            size="1x"
                            className={styles.iconStyle}
                        />
                    </div>
                    <h3>ECG Signal Prediction</h3>
                    <p>
                        This module demonstrates preprocessing, analyzing, and
                        predicting disease on ECG signals data.
                    </p>
                </div>
                <div className={styles.serviceCard}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon
                            icon={faChartLine}
                            size="1x"
                            className={styles.iconStyle}
                        />
                    </div>
                    <h3>ECG Image Report Prediction</h3>
                    <p>
                        This module demonstrates preprocessing, analyzing, and
                        predicting disease on ECG report images.
                    </p>
                </div>
                <div className={styles.serviceCard}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon
                            icon={faRobot}
                            size="1x"
                            className={styles.iconStyle}
                        />
                    </div>
                    <h3>Chatbot</h3>
                    <p>
                        Engage with our medical chatbot for instant health
                        assistance.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default KeySection;
