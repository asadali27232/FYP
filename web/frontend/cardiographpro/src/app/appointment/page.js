// src/app/about/page.js
import styles from './appointment.module.css'; // Import the CSS module
import Banner from '../../components/Banner'; // Import the Banner component

export default function AppointmentPage() {
    return (
        <section>
            <Banner heading="Doctor Appointment" breadcrumb="Appointment" />
        </section>
    );
}
