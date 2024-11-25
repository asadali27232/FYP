import Image from 'next/image';
import styles from './ServicesSection.module.css';
import services1 from '../assets/images/service-1.jpg';
import services2 from '../assets/images/service-2.jpg';
import services3 from '../assets/images/service-3.jpg';

const ServicesSection = () => {
    return (
        <section className={styles.servicesSection}>
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <h3 className={styles.sectionSubtitle}>
                We Offer For You Medical & Saving Lives
            </h3>
            <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={services1}
                            alt="Neurosurgery"
                            layout="fill"
                            objectFit="cover"
                            className={styles.image}
                        />
                        <div className={styles.icon}>
                            {/* <Image
                                src="/images/neurosurgery-icon.png"
                                alt="Neurosurgery Icon"
                                width={30}
                                height={30}
                            /> */}
                        </div>
                    </div>
                    <h4 className={styles.serviceTitle}>Neurosurgery</h4>
                    <p className={styles.serviceDescription}>
                        Amet minim mollit non deserunt ullamco aliqua dolor do
                        amet sint.
                    </p>
                </div>

                <div className={styles.serviceCard}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={services2}
                            alt="Modern Laboratory"
                            layout="fill"
                            objectFit="cover"
                            className={styles.image}
                        />
                        <div className={styles.icon}>
                            {/* <Image
                                src="/images/laboratory-icon.png"
                                alt="Laboratory Icon"
                                width={30}
                                height={30}
                            /> */}
                        </div>
                    </div>
                    <h4 className={styles.serviceTitle}>Modern Laboratory</h4>
                    <p className={styles.serviceDescription}>
                        Amet minim mollit non deserunt ullamco aliqua dolor do
                        amet sint.
                    </p>
                </div>

                <div className={styles.serviceCard}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={services3}
                            alt="Experienced Doctors"
                            layout="fill"
                            objectFit="cover"
                            className={styles.image}
                        />
                        <div className={styles.icon}>
                            {/* <Image
                                src="/images/doctor-icon.png"
                                alt="Doctor Icon"
                                width={30}
                                height={30}
                            /> */}
                        </div>
                    </div>
                    <h4 className={styles.serviceTitle}>Experienced Doctors</h4>
                    <p className={styles.serviceDescription}>
                        Amet minim mollit non deserunt ullamco aliqua dolor do
                        amet sint.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
