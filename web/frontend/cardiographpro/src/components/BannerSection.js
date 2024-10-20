import Image from 'next/image';
import styles from './BannerSection.module.css';
import bannerSideImage from '../assets/images/banner-img-1.png';

const BannerSection = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.textContainer}>
                <h3 className={styles.subHeading}>
                    Highest level of service you can find
                </h3>
                <h2 className={styles.heading}>
                    Take <span>Care of Your</span> Health Now.
                </h2>
                <p>
                    Monitor your heart data in real-time with our advanced
                    cardiograph tools. Our technology ensures the most accurate
                    results for effective heart monitoring.
                </p>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src={bannerSideImage}
                    alt="Cardiograph banner image"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </section>
    );
};

export default BannerSection;
