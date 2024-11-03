'use client';
import Image from 'next/image'; // Import Next.js Image component
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './profile.module.css'; // Import the CSS module for styles
import profilePicture from '../../assets/images/news-3.jpg';

const Profile = () => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            window.location.href = '/login';
        }
    }, [user, loading, router]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className={styles.profileContainer}>
            <h1>User Profile</h1>
            {user ? (
                <div className={styles.profileContent}>
                    <div className={styles.profilePicContainer}>
                        <Image
                            src={profilePicture} // Update this to your actual profile image path
                            alt="Profile Picture"
                            className={styles.profilePic}
                            width={150} // Specify width for the image
                            height={150} // Specify height for the image
                            priority // Optional: Load the image immediately
                        />
                    </div>
                    <div className={styles.profileDetails}>
                        <h2>Welcome, {user.username}</h2>
                        <table className={styles.userInfoTable}>
                            <tbody>
                                <tr>
                                    <td>First Name:</td>
                                    <td>{user.first_name}</td>
                                </tr>
                                <tr>
                                    <td>Last Name:</td>
                                    <td>{user.last_name}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                    <td>Gender:</td>
                                    <td>{user.gender}</td>
                                </tr>
                                <tr>
                                    <td>Date of Birth:</td>
                                    <td>{user.dob}</td>
                                </tr>
                                <tr>
                                    <td>Contact Number:</td>
                                    <td>{user.contact_number}</td>
                                </tr>
                                <tr>
                                    <td>User Type:</td>
                                    <td>{user.user_type}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <p>You need to log in to see this page.</p>
            )}
        </div>
    );
};

export default Profile;
