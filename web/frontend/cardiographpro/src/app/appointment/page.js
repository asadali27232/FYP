'use client';
import { useEffect, useState, useCallback } from 'react'; // Import useCallback
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // Import the AuthContext
import { useRouter } from 'next/navigation';
import styles from './appointment.module.css'; // Import the CSS module
import Banner from '../../components/Banner'; // Import the Banner component
import Image from 'next/image';
import doctorDP from '../../assets/images/process-3.jpg'; // Import the doctor image
export default function AppointmentPage() {
    const { user, loading } = useAuth(); // Access user and loading state from AuthContext
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [filters, setFilters] = useState({
        gender: '',
        userType: '',
    });
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login'); // Redirect to login if not authenticated
        }
    }, [user, loading, router]);

    useEffect(() => {
        const fetchDoctors = async () => {
            if (!user) return; // Do not fetch if user is not present

            try {
                const response = await axios.get(
                    'http://127.0.0.1:8000/auth/doctors/',
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                'token'
                            )}`,
                        },
                    }
                );
                setDoctors(response.data);
                setFilteredDoctors(response.data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };

        fetchDoctors();
    }, [user]); // Fetch doctors when user changes

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const applyFilters = useCallback(() => {
        let updatedDoctors = [...doctors];
        if (filters.gender) {
            updatedDoctors = updatedDoctors.filter(
                (doctor) =>
                    doctor.gender.toLowerCase() === filters.gender.toLowerCase()
            );
        }
        if (filters.userType) {
            updatedDoctors = updatedDoctors.filter(
                (doctor) =>
                    doctor.user_type.toLowerCase() ===
                    filters.userType.toLowerCase()
            );
        }
        setFilteredDoctors(updatedDoctors);
    }, [doctors, filters]); // Include doctors and filters as dependencies

    useEffect(() => {
        applyFilters();
    }, [applyFilters]); // Add applyFilters to dependencies

    if (loading) return <p>Loading...</p>;

    return (
        <main>
            <Banner heading="Doctor Appointment" breadcrumb="Appointment" />
            <section className={styles.container}>
                <aside className={styles.filterSidebar}>
                    <h3>Filters</h3>
                    <label>
                        Gender:
                        <select
                            name="gender"
                            value={filters.gender}
                            onChange={handleFilterChange}>
                            <option value="">All</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <label>
                        User Type:
                        <select
                            name="userType"
                            value={filters.userType}
                            onChange={handleFilterChange}>
                            <option value="">All</option>
                            <option value="doctor">Doctor</option>
                        </select>
                    </label>
                </aside>
                <main className={styles.doctorList}>
                    {filteredDoctors.map((doctor) => (
                        <div
                            key={doctor.username}
                            className={styles.doctorCard}>
                            <Image
                                src={doctorDP} // Placeholder, replace with actual image if available
                                alt="Doctor Profile"
                                width={100}
                                height={100}
                                className={styles.profileImage}
                            />
                            <div className={styles.cardInfo}>
                                <h2>
                                    {doctor.first_name} {doctor.last_name}
                                </h2>
                                <p>
                                    <strong>Email:</strong> {doctor.email}
                                </p>
                                <p>
                                    <strong>Gender:</strong> {doctor.gender}
                                </p>
                                <p>
                                    <strong>Date of Birth:</strong> {doctor.dob}
                                </p>
                                <p>
                                    <strong>Contact:</strong>{' '}
                                    {doctor.contact_number}
                                </p>
                                <button
                                    className={styles.bookButton}
                                    onClick={() =>
                                        alert(
                                            `Booking appointment with ${doctor.first_name}`
                                        )
                                    }>
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    ))}
                </main>
            </section>
        </main>
    );
}
