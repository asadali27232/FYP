'use client'; // This marks the component as a Client Component
import styles from './signup.module.css'; // Assuming you have a CSS module for styles
import { useState } from 'react';
import axios from 'axios'; // Import axios for making API requests
import Banner from '../../components/Banner';
import { useRouter } from 'next/navigation'; // Use Next.js router for navigation

export default function Signup() {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState(''); // State for gender
    const [dob, setDob] = useState(''); // State for date of birth
    const [contactNumber, setContactNumber] = useState(''); // State for contact number
    const [userType, setUserType] = useState('patient'); // State for user type (default to patient)
    const [errorMessage, setErrorMessage] = useState(''); // State to hold error messages
    const router = useRouter(); // Use Next.js router

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        setErrorMessage(''); // Clear any previous error messages

        try {
            // Step 1: Send signup request
            const response = await axios.post(
                'http://127.0.0.1:8000/auth/signup/',
                {
                    username,
                    first_name: firstName, // Updated to match backend field names
                    last_name: lastName,
                    email,
                    password,
                    gender,
                    dob,
                    contact_number: contactNumber, // Updated to match backend field names
                    user_type: userType, // Use 'doctor' for a doctor user
                }
            );

            console.log('Signup response:', response.data);

            // If signup is successful, redirect to login page
            alert('Signup successful! You can now log in.');
            router.push('/login'); // Navigate to login page
        } catch (error) {
            // Handle any errors during the signup process
            setErrorMessage(
                error.response?.data?.detail || 'Signup failed: Unknown error'
            );
        }
    };

    return (
        <main>
            <Banner heading="Sign Up" breadcrumb="chatbot" />
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2 className={styles.title}>Sign Up</h2>
                    {errorMessage && (
                        <p className={styles.error}>{errorMessage}</p>
                    )}
                    {/* Display error message */}
                    <div className={styles.inputGroup}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
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
                    <div className={styles.inputGroup}>
                        <label htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="dob">Date of Birth</label>
                        <input
                            type="date"
                            id="dob"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="contactNumber">Contact Number</label>
                        <input
                            type="text"
                            id="contactNumber"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="userType">User Type</label>
                        <select
                            id="userType"
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                            required>
                            <option value="patient">Patient</option>
                            <option value="doctor">Doctor</option>
                        </select>
                    </div>
                    <button type="submit" className={styles.button}>
                        Sign Up
                    </button>
                </form>
            </div>
        </main>
    );
}
