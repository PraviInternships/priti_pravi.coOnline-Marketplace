import React from 'react';
import BookingForm from '../components/BookingForm';

const Booking = ({ service }) => {
    const handleBookingSubmit = (details) => {
        // Submit booking details
    };

    return (
        <div className="booking">
            <BookingForm service={service} onSubmit={handleBookingSubmit} />
        </div>
    );
};

export default Booking;