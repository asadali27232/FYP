'use client'; // This marks the component as a Client Component
import styles from './login.module.css'; // Make sure this matches your CSS file
import { useState } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import Banner from '../../components/Banner';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

export default function Login() {
    const [email, setEmail] = useState('asadali@gmail.com');
    const [password, setPassword] = useState('asadali');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Step 1: Send login request
            const response = await axios.post(
                'http://127.0.0.1:8000/auth/login/',
                {
                    email,
                    password,
                }
            );

            console.log('Login response:', response.data);

            const { access } = response.data; // Extract access token

            // Step 2: Store the access token in local storage
            localStorage.setItem('token', access);

            // Step 3: Test the token
            const tokenTestResponse = await axios.get(
                'http://127.0.0.1:8000/auth/tokentest/',
                {
                    headers: {
                        Authorization: `Bearer ${access}`,
                    },
                }
            );

            // Check if the token is valid
            if (
                tokenTestResponse.data.message ===
                'You are having a valid token'
            ) {
                alert('You are logged in');
                router.push('/profile'); // Use Next.js router for navigation
            }
        } catch (error) {
            alert(
                'Login failed: ' +
                    (error.response?.data?.detail || 'Unknown error')
            );
        }
    };

    return (
        <main>
            <Banner heading="Login" breadcrumb="chatbot" />
            <div className={styles.container}>
                <div className={styles.leftSection}>
                    <div className={styles.logo}>
                        <img src="/images/logo.png" alt="Logo" />
                        <span className={styles.cardiograph}>
                            Cardiograph<span className={styles.pro}>pro</span>
                        </span>
                        <p className={styles.careLine}>
                            Providing Quality <span>Heart<br />care</span> for a{' '}
                            <span style={{ color: '#6EAB36' }}>Brighter</span>{' '}
                            and<br />{' '}
                            <span style={{ color: '#6EAB36' }}>Healthy</span>{' '}
                            Future
                        </p>
                        <img
                            src="/images/doctor.png"
                            alt="Doctor"
                            className={styles.doctorImg}
                            style={{
                                width: '400px',
                                height: 'auto',
                                display: 'block',
                                marginTop: '10px',
                                marginLeft: '70px',
                                borderRadius: '50%',
                            }}
                        />
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <h1 className={styles.welcomeBack}>Welcome Back</h1>
                    <div className={styles.formContainer}>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className={styles.emailInput}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className={styles.passwordInput}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="submit" className={styles.loginBtn}>
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
