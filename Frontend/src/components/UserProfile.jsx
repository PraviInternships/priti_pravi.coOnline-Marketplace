import React from 'react';

const UserProfile = ({ user }) => {
    return (
        <div className="user-profile">
            <h2>{user.fullName}</h2>
            <p>{user.email}</p>
            <p>{user.role}</p>
        </div>
    );
};

export default UserProfile;