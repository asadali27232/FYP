import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'http://127.0.0.1:8000/api/hello/'
                );
                setMessage(response.data.message);
                console.log(response.data.message);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="app-container">
            <div className="message-container">
                <h1>{message}</h1>
            </div>
        </div>
    );
}

export default App;
