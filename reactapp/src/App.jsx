import React, { Component } from 'react';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { guests: [], loading: true };
    }

    componentDidMount() {
        this.populateGuestbook();
    }

    static renderGuestbookTable(guests) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <table className="table table-striped" aria-labelledby="tabelLabel">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Time</th>
                                    <th>Date</th>
                                    <th>Location</th>
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Zipcode</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    guests.map(guest => 
                                        <tr key={guest.id}>
                                            <td>{guest.id}</td>
                                            <td>{guest.time}</td>
                                            <td>{guest.date}</td>
                                            <td>{guest.location}</td>
                                            <td>{guest.firstName}</td>
                                            <td>{guest.lastName}</td>
                                            <td>{guest.address}</td>
                                            <td>{guest.city}</td>
                                            <td>{guest.state}</td>
                                            <td>{guest.zipcode}</td>
                                            <td>{guest.phone}</td>
                                            <td>{guest.email}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
            : App.renderGuestbookTable(this.state.guests);

        return (
            <div>
                <h1 id="tabelLabel" >GuestBook</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateGuestbook() {
        const response = await fetch('GuestBook/getAllGuests');
        const data = await response.json();
        this.setState({ guests: data, loading: false });
    }
}






//import { useState, useEffect } from "react";

//const App = () => {
//    const [GuestBook, setGuestBook] = useState([]);
//    const [loading, setLoading] = useState(true);
//    const [error, setError] = useState(null);

//    useEffect(() => {
//        fetch("/getAllGuests")
//            .then((response) => {
//                if (!response.ok) {
//                    throw new Error("HTTP error! Status: ${response.status}");
//                }
//                const contentType = response.headers.get("content-type");
//                if (contentType && contentType.includes("application/json")) {
//                    return response.json();
//                } else {
//                    throw new Error("Response is not in JSON format");
//                }
//            })
//            .then((responseJson) => {
//                setGuestBook(responseJson);
//                setLoading(false);
//            })
//            .catch((error) => {
//                setError(error);
//                setLoading(false);
//            });
//    }, []);

//    if (loading) {
//        return <div>Loading...</div>;
//    }

//    if (error) {
//        return <div>Error: {error.message}</div>;
//    }

//    return (
//        <div className="container">
//            <h1>GuestBook</h1>
//            <div className="row">
//                <div className="col-sm-12">
//                    <table className="table table-striped">
//                        <thead>
//                            <tr>
//                                <th>ID</th>
//                                <th>Time</th>
//                                <th>Date</th>
//                                <th>Location</th>
//                                <th>FirstName</th>
//                                <th>LastName</th>
//                                <th>Address</th>
//                                <th>City</th>
//                                <th>State</th>
//                                <th>Zipcode</th>
//                                <th>Phone</th>
//                                <th>Email</th>
//                            </tr>
//                        </thead>
//                        <tbody>
//                            {
//                                GuestBook.map((item) => (
//                                    <tr key={item.ID}>
//                                        <td>{item.ID}</td>
//                                        <td>{item.Time}</td>
//                                        <td>{item.Date}</td>
//                                        <td>{item.Location}</td>
//                                        <td>{item.FirstName}</td>
//                                        <td>{item.LastName}</td>
//                                        <td>{item.Address}</td>
//                                        <td>{item.City}</td>
//                                        <td>{item.State}</td>
//                                        <td>{item.Zipcode}</td>
//                                        <td>{item.Phone}</td>
//                                        <td>{item.Email}</td>
//                                    </tr>
//                                ))
//                            }
//                        </tbody>
//                    </table>
//                </div>
//            </div>
//        </div>
//    );
//};

//export default App;
