// src/app/page.js
export default function HomePage() {
    return (
        <section>
            <h2>Welcome to Cardiograph Pro</h2>
            <p>Your one-stop solution for monitoring heart health with ease.</p>

            <div className="features">
                <div className="feature">
                    <h3>Real-Time Data</h3>
                    <p>
                        Monitor your heart data in real-time with our advanced
                        cardiograph tools.
                    </p>
                </div>
                <div className="feature">
                    <h3>Accurate Results</h3>
                    <p>
                        Our technology ensures the most accurate results for
                        your heart health.
                    </p>
                </div>
                <div className="feature">
                    <h3>User-Friendly</h3>
                    <p>
                        Easy to use interface designed for everyone, from
                        patients to professionals.
                    </p>
                </div>
            </div>
        </section>
    );
}
