// src/app/layout.js
import './globals.css'; // Import global styles

export const metadata = {
    title: 'Cardiograph Pro', // You can customize the title
    description: 'A clean and simple layout for Cardiograph Pro',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <header>
                    <nav>
                        <h1>Cardiograph Pro</h1>
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
                </header>
                <main>{children}</main>{' '}
                {/* Main content will be rendered here */}
                <footer>
                    <p>
                        &copy; {new Date().getFullYear()} Cardiograph Pro. All
                        rights reserved.
                    </p>
                </footer>
            </body>
        </html>
    );
}
