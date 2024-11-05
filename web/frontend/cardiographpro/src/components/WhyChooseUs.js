import Image from 'next/image';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
    return (
        <section className={styles.whyChooseUs}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h3 className={styles.subTitle}>Why Choose Us</h3>
                    <h2 className={styles.mainTitle}>
                        Choose The Best For Your Health
                    </h2>
                    <div className={styles.servicesGrid}>
                        <div className={styles.serviceItem}>
                            <div className={styles.icon}>
                                <Image
                                    src="/images/professional-staff-icon.png"
                                    alt="Professional Staff"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <h4 className={styles.serviceTitle}>
                                Professional Staff
                            </h4>
                            <p>
                                Amet minim mollit non deserunt aliqua dolor do
                                amet sint.
                            </p>
                        </div>
                        <div className={styles.serviceItem}>
                            <div className={styles.icon}>
                                <Image
                                    src="/images/emergency-case-icon.png"
                                    alt="Emergency Case"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <h4 className={styles.serviceTitle}>
                                Emergency Case
                            </h4>
                            <p>
                                Amet minim mollit non deserunt aliqua dolor do
                                amet sint.
                            </p>
                        </div>
                        <div className={styles.serviceItem}>
                            <div className={styles.icon}>
                                <Image
                                    src="/images/online-appointment-icon.png"
                                    alt="Online Appointment"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <h4 className={styles.serviceTitle}>
                                Online Appointment
                            </h4>
                            <p>
                                Amet minim mollit non deserunt aliqua dolor do
                                amet sint.
                            </p>
                        </div>
                        <div className={styles.serviceItem}>
                            <div className={styles.icon}>
                                <Image
                                    src="/images/247-services-icon.png"
                                    alt="24/7 Services"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <h4 className={styles.serviceTitle}>
                                24/7 Services
                            </h4>
                            <p>
                                Amet minim mollit non deserunt aliqua dolor do
                                amet sint.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.imageSection}>
                    <Image
                        src="/images/why-choose-us.jpg"
                        alt="Medical Staff"
                        width={500}
                        height={500}
                        className={styles.image}
                    />
                </div>
            </div>

            <div className={styles.statsSection}>
                <div className={styles.statsItem}>
                    <h3 className={styles.statsNumber}>75+</h3>
                    <p className={styles.statsLabel}>Expert Doctors</p>
                </div>
                <div className={styles.statsItem}>
                    <h3 className={styles.statsNumber}>7k</h3>
                    <p className={styles.statsLabel}>Happy Patients</p>
                </div>
                <div className={styles.statsItem}>
                    <h3 className={styles.statsNumber}>850</h3>
                    <p className={styles.statsLabel}>Modern Rooms</p>
                </div>
                <div className={styles.statsItem}>
                    <h3 className={styles.statsNumber}>15</h3>
                    <p className={styles.statsLabel}>Awards Win</p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
