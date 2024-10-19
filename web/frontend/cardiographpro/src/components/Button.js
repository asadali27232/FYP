'use client'; // This marks the component as a Client Component
import styles from './Button.module.css';

export default function Button({
    children,
    onClick,
    type = 'button',
    className,
}) {
    return (
        <button
            type={type}
            className={`${styles.button} ${className}`} // Apply the button styles
            onClick={onClick}>
            {children}
        </button>
    );
}
