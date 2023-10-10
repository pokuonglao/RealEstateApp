import React, { useState } from 'react';

function App() {
    const [guest, setGuest] = useState({
        ID: '',
        FirstName: '',
        LastName: '',
        address: '',
        city: '',
        state: '',
        // Add more fields as needed
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setGuest({ ...guest, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Send a POST request to your API endpoint
        fetch('/api/addguest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(guest),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Update your state or display a success message
                console.log('Guest added:', data);
            })
            .catch((error) => {
                // Handle the error, e.g., display an error message
                console.error('Error:', error);
            });
    };


    return (
        <div>
            <h1>Add a Guest</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID:</label>
                    <input
                        type="text"
                        name="ID"
                        value={guest.ID}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="FirstName"
                        value={guest.FirstName}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="LastName"
                        value={guest.LastName}
                        onChange={handleInputChange}
                    />
                </div>
                {/* Add more form fields for other guest details */}
                <button type="submit">Add Guest</button>
            </form>
        </div>
    );
}

export default App;
