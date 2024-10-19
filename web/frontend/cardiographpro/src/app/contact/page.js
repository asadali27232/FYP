// src/app/contact.js
export default function ContactPage() {
    return (
        <section>
            <h2>Contact Us</h2>
            <p>
                If you have any questions or need support, feel free to contact
                us:
            </p>

            <ul>
                <li>
                    Email:{' '}
                    <a href="mailto:support@cardiographpro.com">
                        support@cardiographpro.com
                    </a>
                </li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Heartbeat Lane, Health City, HC 12345</li>
            </ul>
        </section>
    );
}
