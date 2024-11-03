'use client';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
        <div>
            <h1>User Profile</h1>
            {user ? (
                <div>
                    <h2>Welcome, {user.username}</h2>
                    <p>Email: {user.email}</p>
                    {/* Display other user information as needed */}
                </div>
            ) : (
                <p>You need to log in to see this page.</p>
            )}
        </div>
    );
};

export default Profile;
