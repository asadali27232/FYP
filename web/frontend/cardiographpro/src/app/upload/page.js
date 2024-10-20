'use client'; // This marks the component as a Client Component
import { useState } from 'react';
import Image from 'next/image'; // Import the Image component from next/image

const Upload = () => {
    // State variables for form inputs and results
    const [heaFile, setHeaFile] = useState(null);
    const [datFile, setDatFile] = useState(null);
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('0');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        setLoading(true); // Set loading state to true

        // Create a FormData object to hold the form data
        const formData = new FormData();
        formData.append('hea_file', heaFile);
        formData.append('dat_file', datFile);
        formData.append('age', age);
        formData.append('gender', gender);

        try {
            // Send a POST request to the Django server
            const response = await fetch('http://127.0.0.1:8000/upload/', {
                // Update the URL here
                method: 'POST',
                body: formData,
            });

            // Check if the response is okay (status code in the range 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Parse the JSON response
            const data = await response.json();
            setResult(data); // Set the result to state
        } catch (error) {
            console.error('Error uploading files:', error);
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div>
            <h2>Upload ECG .hea and .dat Files</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <p>
                    <label htmlFor="id_hea_file">Select .hea file:</label>
                    <input
                        type="file"
                        name="hea_file"
                        required
                        id="id_hea_file"
                        onChange={(e) => setHeaFile(e.target.files[0])}
                    />
                </p>

                <p>
                    <label htmlFor="id_dat_file">Select .dat file:</label>
                    <input
                        type="file"
                        name="dat_file"
                        required
                        id="id_dat_file"
                        onChange={(e) => setDatFile(e.target.files[0])}
                    />
                </p>

                <p>
                    <label htmlFor="id_age">Enter Age:</label>
                    <input
                        type="number"
                        name="age"
                        step="any"
                        required
                        id="id_age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </p>

                <p>
                    <label htmlFor="id_gender">Select Gender:</label>
                    <select
                        name="gender"
                        id="id_gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}>
                        <option value="0">Male</option>
                        <option value="1">Female</option>
                    </select>
                </p>
                <button type="submit" disabled={loading}>
                    Upload
                </button>
            </form>
            {loading && <p>Loading...</p>}{' '}
            {/* Show loading message while uploading */}
            {/* Display results if available */}
            {result && (
                <div>
                    <h2>Prediction Results</h2>
                    <h3>Superclass Labels:</h3>
                    <p>{result.superclassLabels}</p>
                    <h3>Class Names:</h3>
                    <p>{JSON.stringify(result.classNames)}</p>
                    <h3>ECG Plot:</h3>
                    {/* Use Image component instead of img */}
                    <Image
                        src={result.ecgPlotUrl} // Path to the ECG plot
                        alt="ECG Plot"
                        width={500} // Set width for the image
                        height={300} // Set height for the image
                        layout="responsive" // Use responsive layout
                    />
                </div>
            )}
        </div>
    );
};

export default Upload;
