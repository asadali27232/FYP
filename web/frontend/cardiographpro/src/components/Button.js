'use client'; // This marks the component as a Client Component
import styles from './Button.module.css';

export default function Button({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    className,
}) {
    return (
        <button
            type={type}
            className={`${styles.button} ${styles[variant]} ${className}`} // Apply the button styles and variant
            onClick={onClick}>
            {children}
        </button>
    );
}
