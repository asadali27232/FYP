'use client'; // This marks the component as a Client Component
import { useState } from 'react';
import Image from 'next/image';
import styles from './UploadSignals.module.css'; // Importing the CSS module
import defaultECG from '../assets/images/shape-18.png';
import Button from './Button'; // Make sure to import the Button component
import check from '../assets/images/check.png';

const UploadSignals = () => {
    const [heaFile, setHeaFile] = useState(null);
    const [datFile, setDatFile] = useState(null);
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('0');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    // Function to calculate age from DOB
    const dobToAge = (dob) => {
        const dobDate = new Date(dob);
        const nowDate = new Date();
        let calculatedAge = nowDate.getFullYear() - dobDate.getFullYear();
        const monthDifference = nowDate.getMonth() - dobDate.getMonth();

        // Adjust age if the birthday hasn't occurred yet this year
        if (
            monthDifference < 0 ||
            (monthDifference === 0 && nowDate.getDate() < dobDate.getDate())
        ) {
            calculatedAge--;
        }
        setAge(calculatedAge);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('hea_file', heaFile);
        formData.append('dat_file', datFile);
        formData.append('age', age);
        formData.append('gender', gender);

        try {
            const response = await fetch('http://127.0.0.1:8000/upload/', {
                method: 'POST',
                body: formData,
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error('Error uploading files:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.fullWidthContainer}>
            <h1 className={styles.mainHeading}>ECG Signal Classification</h1>
            <div className={styles.mainContainer}>
                <div className={styles.leftContainer}>
                    <h2>Upload ECG Signals</h2>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <p>
                            <label htmlFor="id_dat_file">
                                Select .dat file:
                            </label>
                            <input
                                type="file"
                                name="dat_file"
                                required
                                id="id_dat_file"
                                onChange={(e) => setDatFile(e.target.files[0])}
                            />
                        </p>
                        <p>
                            <label htmlFor="id_hea_file">
                                Select .hea file:
                            </label>
                            <input
                                type="file"
                                name="hea_file"
                                required
                                id="id_hea_file"
                                onChange={(e) => setHeaFile(e.target.files[0])}
                            />
                        </p>
                        <div className={styles.ageGender}>
                            <p>
                                <label htmlFor="id_age">
                                    Enter Date of Birth:
                                </label>
                                <input
                                    type="date"
                                    name="age"
                                    required
                                    id="id_age"
                                    onChange={(e) => dobToAge(e.target.value)}
                                />
                            </p>
                            <p>
                                <label htmlFor="id_gender">
                                    Select Gender:
                                </label>
                                <select
                                    name="gender"
                                    id="id_gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}>
                                    <option value="0">Male</option>
                                    <option value="1">Female</option>
                                </select>
                            </p>
                        </div>
                        <Button
                            type="submit"
                            disabled={loading}
                            class={styles.button}>
                            Upload
                        </Button>
                    </form>
                    {loading && <p className={styles.loading}>Predicting...</p>}
                </div>
                <div className={styles.rightContainer}>
                    {result && (
                        <div className={styles.resultContainer}>
                            <h2>Prediction Results</h2>
                            <h3>Superclass Labels:</h3>
                            <ul>
                                {result.superclass_labels.map(
                                    (label, index) => (
                                        <li key={index}>
                                            <div className={styles.icon}>
                                                <Image
                                                    src={check}
                                                    alt="Icon"
                                                    width={20}
                                                    height={20}
                                                    needed
                                                    style={{
                                                        marginRight: '8px',
                                                        verticalAlign: 'middle',
                                                    }}
                                                />
                                            </div>
                                            {`Label ${index + 1}: ${label}`}
                                        </li>
                                    )
                                )}
                            </ul>
                            <h3>Class Names:</h3>
                            <ul>
                                {result.class_names.map((name, index) => (
                                    <li key={index}>
                                        <div className={styles.icon}>
                                            <Image
                                                src={check}
                                                alt="Icon"
                                                width={20}
                                                height={20}
                                                needed
                                                style={{
                                                    marginRight: '8px',
                                                    verticalAlign: 'middle',
                                                }}
                                            />
                                        </div>
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            {result?.image_url && ( // Only show when image is available
                <div className={styles.parentEcgImageContainer}>
                    <div className={styles.ecgImageContainer}>
                        <h2>ECG Image</h2>
                        <Image
                            src={`${
                                result.image_url
                            }?t=${new Date().getTime()}`} // Append a unique timestamp to the image URL
                            alt="ECG Plot"
                            layout="responsive"
                            width={500}
                            height={500}
                            className={styles.ecgImage}
                        />
                    </div>
                    <div className={styles.arrowDiv}>
                        <Image
                            src={defaultECG}
                            alt="Default ECG Plot"
                            layout="responsive"
                            width={500}
                            height={500}
                            className={styles.ecgImage}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UploadSignals;
