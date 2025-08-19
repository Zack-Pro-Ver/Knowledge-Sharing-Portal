import React from 'react';
import Avatar from '../../elements/Avatar';
import { RiStarFill } from '@remixicon/react'; 

const MyProfileCard = () => {
    return (
        <div className="flex items-center p-4 border border-gray-300 rounded-lg bg-white shadow-md">
            <Avatar size="large" variant="circular">
                JD
            </Avatar>
            <h2 className="ml-4 text-lg font-semibold">John Doe <span className="text-yellow-500"><RiStarFill /> 1,247</span></h2>
            <p className="ml-4 text-gray-600">San Francisco, CA</p>
            <div className="ml-auto">
                <a href="#" className="text-blue-500 hover:underline ml-2">Website</a>
                <a href="#" className="text-blue-500 hover:underline ml-2">GitHub</a>
                <a href="#" className="text-blue-500 hover:underline ml-2">Twitter</a>
            </div>
        </div>
    );
};

export default MyProfileCard;
