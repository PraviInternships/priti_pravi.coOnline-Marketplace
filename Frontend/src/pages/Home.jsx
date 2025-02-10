import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Home = ({ services }) => {
    return (
        <div className="home">
            <h1>Featured Services</h1>
            <div className="services-list">
                {services.map(service => <ServiceCard key={service.id} service={service} />)}
            </div>
        </div>
    );
};

export default Home;