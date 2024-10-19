// src/app/layout.js
import './globals.css'; // Import global styles
import Header from '../components/Header'; // Import the Header component
import '@fortawesome/fontawesome-svg-core/styles.css';


export const metadata = {
    title: 'Cardiograph Pro',
    description: 'A clean and simple layout for Cardiograph Pro',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header /> {/* Include the Header component */}
                <main>{children}</main>
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
