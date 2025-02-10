const API_URL = process.env.REACT_APP_API_URL;

export const fetchServices = async () => {
    const response = await fetch(`${API_URL}/services`);
    return response.json();
};

export const submitBooking = async (bookingDetails) => {
    const response = await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
    });
    return response.json();
};

export const getReviews = async (serviceId) => {
    const response = await fetch(`${API_URL}/reviews?serviceId=${serviceId}`);
    return response.json();
};