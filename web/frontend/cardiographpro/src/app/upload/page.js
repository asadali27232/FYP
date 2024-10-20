'use client'; // This marks the component as a Client Component
import { useState } from 'react';

const Upload = () => {
    const [heaFile, setHeaFile] = useState(null);
    const [datFile, setDatFile] = useState(null);
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('0');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

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
            {loading && <p>Loading...</p>}
            {result && (
                <div>
                    <h2>Prediction Results</h2>
                    <h3>Superclass Labels:</h3>
                    <p>{result.superclassLabels}</p>
                    <h3>Class Names:</h3>
                    <p>{JSON.stringify(result.classNames)}</p>
                </div>
            )}
        </div>
    );
};

export default Upload;
