import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchDataFromAPI = async () => {
        try {
            const response = await axios.get('http://localhost:7152/api/yourEndpoint'); // Replace with your ASP.NET Core API URL
            setData(response.data);
        } catch (err) {
            setError(err);
        }
    };

    return (
        <div>
            <h1>Accessing ASP.NET Core API from React</h1>
            <button onClick={fetchDataFromAPI}>Fetch Data</button>
            {error && <p>Error: {error.message}</p>}
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
