import React, { useState, useEffect } from 'react';

const Listing = () => {
    const [propertyData, setPropertyData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = 'https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/detail';
            const apiKey = '1ee06d6af856e283388b6e5bcddd35dc';

            const id = '1234'; 

            const url = `${apiUrl}?id=${encodeURIComponent(id)}`;

            const options = {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'apikey': apiKey,
                },
            };

            try {
                const response = await fetch(url, options);

                if (response.ok) {
                    const result = await response.json();
                    setPropertyData(result);
                } else {
                    console.error('Request failed with status:', response.status);
                    setError('Failed to fetch data. Please check your API key and parameters.');
                }
            } catch (error) {
                console.error('Error:', error.message);
                setError('An error occurred while fetching data.');
            }
        };

        // Call the async function
        fetchData();
    }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

    return (
        <div id="property-info">
            <h2>Property Information</h2>
            {error ? (
                <p>{error}</p>
            ) : propertyData ? (
                <div>
                    
                    {/* Add more properties to display as needed */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Listing;
