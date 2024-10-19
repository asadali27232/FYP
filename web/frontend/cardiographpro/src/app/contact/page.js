'use client'; // This marks the page as a Client Component

import Button from '../../components/Button';

export default function ContactPage() {
    return (
        <section>
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to reach out to us!</p>

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

            <Button onClick={() => alert('Message sent!')}>Send Message</Button>
        </section>
    );
}
