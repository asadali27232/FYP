import PropTypes from 'prop-types';
import styles from './Banner.module.css'; // Import the CSS module

const Banner = ({ heading, breadcrumb }) => {
    return (
        <section className={styles.bannerContainer}>
            <div className={styles.bannerOverlay}></div>
            <div className={styles.bannerContent}>
                <h1 className={styles.bannerTitle}>{heading}</h1>
                <div className={styles.breadcrumb}>
                    <span className={styles.home}>Home</span> &gt;{' '}
                    <span>{breadcrumb}</span>
                </div>
            </div>
        </section>
    );
};

Banner.propTypes = {
    heading: PropTypes.string.isRequired, // Pass the heading as prop
    breadcrumb: PropTypes.string.isRequired, // Pass the breadcrumb as prop
};

export default Banner;
