// src/components/ImageComponent.js
import Image from 'next/image';
import styles from './ImageComponent.module.css'; // Optional styles for images

const ImageComponent = ({ src, alt, width, height }) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={styles.image} // Optional class for additional styling
            priority // Load image with high priority (optional)
        />
    );
};

export default ImageComponent;
