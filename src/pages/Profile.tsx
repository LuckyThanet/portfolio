import React from 'react';

const Profile: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <p className="text-gray-700">This is the profile page content.</p>
            </div>
        </div>
    );
};

export default Profile;