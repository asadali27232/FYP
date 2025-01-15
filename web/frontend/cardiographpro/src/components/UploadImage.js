'use client'; // This marks the component as a Client Component
import { useState } from 'react';
import Image from 'next/image';
import styles from './UploadImage.module.css'; // Importing the CSS module
import Button from './Button'; // Make sure to import the Button component

const UploadSignals = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('ecg_image', uploadedImage);

        try {
            const response = await fetch(
                'http://127.0.0.1:8080/ecg/process_ecg/',
                {
                    method: 'POST',
                    body: formData,
                }
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error('Error uploading file:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.fullWidthContainer}>
            <h1 className={styles.mainHeading}>ECG Image Classification</h1>
            <div className={styles.mainContainer}>
                <div className={styles.uploadContainer}>
                    <h2>Upload ECG Image</h2>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <p>
                            <label htmlFor="id_image_file">
                                Select JPG Image:
                            </label>
                            <input
                                type="file"
                                name="image"
                                required
                                id="id_image_file"
                                accept="image/jpeg"
                                onChange={(e) =>
                                    setUploadedImage(e.target.files[0])
                                }
                            />
                        </p>
                        <Button
                            type="submit"
                            disabled={loading}
                            class={styles.button}>
                            Upload
                        </Button>
                    </form>
                    {loading && <p className={styles.loading}>Predicting...</p>}
                </div>
                {uploadedImage && (
                    <div className={styles.imagePreview}>
                        <h2>Uploaded Image</h2>
                        <Image
                            src={URL.createObjectURL(uploadedImage)}
                            alt="Uploaded ECG Image"
                            width={500}
                            height={500}
                            className={styles.ecgImage}
                        />
                    </div>
                )}
                {result && (
                    <div className={styles.resultContainer}>
                        <h2>Prediction Result</h2>
                        <p>{result.result}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UploadSignals;
