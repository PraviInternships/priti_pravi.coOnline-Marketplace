import React from 'react';
import ServiceCard from '../components/ServiceCard';

const SearchResults = ({ results }) => {
    return (
        <div className="search-results">
            <h1>Search Results</h1>
            <div className="services-list">
                {results.map(service => <ServiceCard key={service.id} service={service} />)}
            </div>
        </div>
    );
};

export default SearchResults;