import React from 'react';
import UserProfile from '../components/UserProfile';

const Profile = ({ user }) => {
    return (
        <div className="profile">
            <UserProfile user={user} />
        </div>
    );
};

export default Profile;