'use client';
import Image from 'next/image';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './profile.module.css';
import axios from 'axios';

const Profile = () => {
    const { user, loading } = useAuth();
    const [profilePicUrl, setProfilePicUrl] = useState('');
    const [uploading, setUploading] = useState(false); // State to manage uploading status
    const [uploadMessage, setUploadMessage] = useState(''); // State for upload messages
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            window.location.href = '/login';
        }
    }, [user, loading, router]);

    useEffect(() => {
        const fetchProfilePicture = async () => {
            if (user) {
                try {
                    const response = await axios.get(
                        'http://127.0.0.1:8000/auth/getprofilepicture/',
                        {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem(
                                    'token'
                                )}`,
                            },
                        }
                    );
                    // Append a timestamp to the image URL to prevent caching
                    setProfilePicUrl(
                        `${response.data.image_url}?t=${new Date().getTime()}`
                    );
                } catch (error) {
                    console.error('Error fetching profile picture:', error);
                }
            }
        };

        fetchProfilePicture();
    }, [user]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('image', file);

            const uploadProfilePicture = async () => {
                setUploading(true); // Set uploading state to true
                setUploadMessage('Uploading...'); // Set upload message

                try {
                    const response = await axios.post(
                        'http://127.0.0.1:8000/auth/uploadprofilepicture/',
                        formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                Authorization: `Bearer ${localStorage.getItem(
                                    'token'
                                )}`,
                            },
                        }
                    );
                    // Immediately update the profile picture with the new URL
                    setProfilePicUrl(
                        `${response.data.image_url}?t=${new Date().getTime()}`
                    );
                    setUploadMessage('Profile picture updated successfully!'); // Success message
                } catch (error) {
                    console.error('Error uploading profile picture:', error);
                    setUploadMessage(
                        'Error uploading image. Please try again.'
                    ); // Error message
                } finally {
                    setUploading(false); // Reset uploading state
                }
            };

            uploadProfilePicture();
        }
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className={styles.profileContainer}>
            <h1>User Profile</h1>
            {user ? (
                <div className={styles.profileContent}>
                    <div className={styles.profilePicContainer}>
                        <Image
                            src={profilePicUrl || '/placeholder.jpg'} // Default to a placeholder if no profile picture
                            alt="Profile Picture"
                            className={styles.profilePic}
                            width={150}
                            height={150}
                            priority
                        />
                        <input
                            type="file"
                            onChange={handleFileChange}
                            accept="image/*"
                            className={styles.fileInput} // Optional: style the input
                        />
                        {uploading && (
                            <p className={styles.uploading}>Uploading...</p>
                        )}
                        {uploadMessage && (
                            <p className={styles.uploadMessage}>
                                {uploadMessage}
                            </p>
                        )}
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
