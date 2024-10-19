'use client'; // This marks the page as a Client Component

import Button from '../../components/Button';
import Image from 'next/image';

export default function ContactPage() {
    return (
        <section>
            <Image
                src="/contact-banner-public.jpg" // Reference the public image directly
                alt="Contact Us Banner"
                layout="responsive"
                width={'100'}
                height={'100'}
            />
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
