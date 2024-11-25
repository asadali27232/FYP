'use client'; // This marks the component as a Client Component
import Image from 'next/image';
import styles from './TeamSection.module.css'; // Assuming you save your CSS here
import { useState } from 'react';
import team4image from '../assets/images/team-4.jpg'; // replace with the path to your image
import team1image from '../assets/images/team-1.jpg'; // replace with the path to your image
import team2image from '../assets/images/team-2.jpg'; // replace with the path to your image
import team3image from '../assets/images/team-3.jpg'; // replace with the path to your image

const TeamSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">
                    Meet Our Experienced Doctors For Best Treatment
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <div
                        className={`${styles.cardContainer} bg-white p-6 rounded-lg shadow-lg`}>
                        <div className={styles.cardImage}>
                            <Image
                                src={team1image} // replace with the path to your image
                                alt="Black Marvin"
                                width={150}
                                height={150}
                                className="rounded-full mx-auto"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mt-4">
                            Black Marvin
                        </h3>
                        <p className="text-gray-600">Medical Assistant</p>
                    </div>

                    {/* Card 2 (Hover effect card) */}
                    <div
                        className={`${
                            styles.cardContainer
                        } bg-white p-6 rounded-lg shadow-lg relative ${
                            hoveredCard === 'card2' ? 'hover:shadow-xl' : ''
                        }`}
                        onMouseEnter={() => setHoveredCard('card2')}
                        onMouseLeave={() => setHoveredCard(null)}>
                        <div className={styles.cardImage}>
                            <Image
                                src={team2image} // replace with the path to your image
                                alt="Eleanor Pena"
                                width={150}
                                height={150}
                                className="rounded-full mx-auto"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mt-4">
                            Eleanor Pena
                        </h3>
                        <p className="text-gray-600">Doctor</p>

                        {hoveredCard === 'card2' && (
                            <div className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 transition-all duration-300">
                                <div className="flex space-x-4 text-white">
                                    <a href="#" className="hover:text-blue-500">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" className="hover:text-blue-400">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="hover:text-blue-700">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="#" className="hover:text-blue-600">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Card 3 */}
                    <div
                        className={`${styles.cardContainer} bg-white p-6 rounded-lg shadow-lg`}>
                        <div className={styles.cardImage}>
                            <Image
                                src={team3image} // replace with the path to your image
                                alt="Arlene Maccy"
                                width={150}
                                height={150}
                                className="rounded-full mx-auto"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mt-4">
                            Arlene Maccy
                        </h3>
                        <p className="text-gray-600">Nursing Assistant</p>
                    </div>

                    {/* Card 4 */}
                    <div
                        className={`${styles.cardContainer} bg-white p-6 rounded-lg shadow-lg`}>
                        <div className={styles.cardImage}>
                            <Image
                                src={team4image} // replace with the path to your image
                                alt="Jenny Wilson"
                                width={150}
                                height={150}
                                className="rounded-full mx-auto"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mt-4">
                            Jenny Wilson
                        </h3>
                        <p className="text-gray-600">Senior Doctor</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
