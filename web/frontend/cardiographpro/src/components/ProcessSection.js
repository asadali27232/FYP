import Image from 'next/image';
import styles from './ProcessSection.module.css';

const ProcessSection = () => {
    return (
        <section className={styles.processSection}>
            <h2 className={styles.sectionTitle}>Process</h2>
            <h3 className={styles.sectionSubtitle}>
                How It Helps You To Keep Healthy
            </h3>
            <div className={styles.processSteps}>
                <div className={styles.step}>
                    <span className={styles.stepNumber}>01</span>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/appointment.jpg"
                            alt="Get Appointment"
                            width={300}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                    <h4 className={styles.stepTitle}>Get Appointment</h4>
                    <p className={styles.stepDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className={styles.step}>
                    <span className={styles.stepNumber}>02</span>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/checkup.jpg"
                            alt="Start Check-Up"
                            width={300}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                    <h4 className={styles.stepTitle}>Start Check-Up</h4>
                    <p className={styles.stepDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className={styles.step}>
                    <span className={styles.stepNumber}>03</span>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/enjoy-healthy-life.jpg"
                            alt="Enjoy Healthy Life"
                            width={300}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                    <h4 className={styles.stepTitle}>Enjoy Healthy Life</h4>
                    <p className={styles.stepDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
