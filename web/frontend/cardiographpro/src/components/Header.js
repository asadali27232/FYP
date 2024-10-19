import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.topHeader}>
                <h1>Cardiograph Pro</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.bottomHeader}>
                <p>Your tagline or additional information goes here.</p>
            </div>
        </header>
    );
};

export default Header;
