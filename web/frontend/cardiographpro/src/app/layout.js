import './globals.css'; // Import global styles
import Header from '../components/Header'; // Import the Header component
import Footer from '../components/Footer'; // Import the Footer component
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AuthProvider } from './context/AuthContext';

export const metadata = {
    title: 'Cardiograph Pro',
    description: 'A clean and simple layout for Cardiograph Pro',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header /> {/* Include the Header component */}
                <AuthProvider>{children}</AuthProvider>
                <Footer /> {/* Include the Footer component */}
            </body> 
        </html>
    );
}
