'use client'; // Marks the component as a Client Component
import styles from './signup.module.css'; // Adjust this if the CSS file path differs
import { useState } from 'react';
import axios from 'axios'; // Import axios for API requests
import Banner from '../../components/Banner';
import { useRouter } from 'next/navigation'; // For navigation

export default function Signup() {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [userType, setUserType] = useState('patient');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/auth/signup/',
                {
                    username,
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    password,
                    gender,
                    dob,
                    contact_number: contactNumber,
                    user_type: userType,
                }
            );

            alert('Signup successful! You can now log in.');
            router.push('/login');
        } catch (error) {
            setErrorMessage(
                error.response?.data?.detail || 'Signup failed: Unknown error'
            );
        }
    };

    return (
        <main>
            <Banner heading="Sign Up" breadcrumb="chatbot" />
            <div className={styles.container}>
                <div className={styles.leftSection}>
                    <div className={styles.logo}>
                        <img src="/assets/images/logo.png" alt="Logo" />
                        <span className={styles.cardiograph}>
                            Cardiograph
                            <span className={styles.pro}>pro</span>
                        </span>
                        <p className={styles.careLine}>
                            Providing Quality <span>Heart care</span> for a{' '}
                            <span style={{ color: '#6EAB36' }}>Brighter</span>{' '}
                            and <br />
                            <span style={{ color: '#6EAB36' }}>Healthy</span>{' '}
                            Future
                        </p>
                        <img
                            src="/assets/images/doctor.png"
                            alt="Doctor"
                            className={styles.doctorImg}
                        />
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <h1 className={styles.welcomeBack}>Welcome</h1>
                    <div className={styles.formContainer}>
                        {errorMessage && (
                            <p className={styles.error}>{errorMessage}</p>
                        )}
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Enter Full Name"
                                className={styles.signupInput}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Enter Email Address"
                                className={styles.signupInput}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Create Password"
                                className={styles.signupInput}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div className={styles.line}>
                                <select
                                    className={styles.signupInput}
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>
                                        Select Gender
                                    </option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                <input
                                    type="date"
                                    className={styles.signupInput}
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    required
                                />
                            </div>
                            <select
                                className={styles.signupInput}
                                value={userType}
                                onChange={(e) => setUserType(e.target.value)}
                                required
                            >
                                <option value="" disabled>
                                    Select User Type
                                </option>
                                <option value="doctor">Doctor</option>
                                <option value="patient">Patient</option>
                            </select>
                            <button type="submit" className={styles.loginBtn}>
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
