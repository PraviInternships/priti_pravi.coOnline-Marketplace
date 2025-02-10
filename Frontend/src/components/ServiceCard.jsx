import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <p>{service.price}</p>
        </div>
    );
};

export default ServiceCard;