import React, { useState } from 'react';

const BookingForm = ({ service, onSubmit }) => {
    const [bookingDetails, setBookingDetails] = useState({});

    const handleChange = (e) => {
        setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(bookingDetails);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Book {service.title}</h2>
            <input type="text" name="date" onChange={handleChange} placeholder="Date" />
            <button type="submit">Book Now</button>
        </form>
    );
};

export default BookingForm;