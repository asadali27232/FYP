'use client'; // This marks the component as a Client Component
import styles from './login.module.css';
import { useState } from 'react';
import axios from 'axios'; // Make sure to import axios
import Banner from '../../components/Banner';

export default function Login() {
    const [email, setEmail] = useState('asadali@gmail.com');
    const [password, setPassword] = useState('asadali');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
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

            // Step 2: Test the token
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
                window.location.href = '/profile'; // Navigate to profile page
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
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2 className={styles.title}>Login</h2>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.button}>
                        Login
                    </button>
                </form>
            </div>
        </main>
    );
}
