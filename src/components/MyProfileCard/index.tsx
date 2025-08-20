import React from 'react';
import Avatar from '../../elements/Avatar';
import {
  RiStarFill,
  RiLinksFill,
  RiGithubFill,
  RiTwitterFill
} from '@remixicon/react';

const MyProfileCard = () => {
  return (
    <div className="flex items-center p-2 bg-white border border-gray-100 rounded-md ">
      <Avatar
        size="large"
        variant="circular"
        className="bg-gradient-to-tr  from-indigo-500 to-purple-500 text-white font-bold text-xl flex items-center justify-center"
      >
        JD
      </Avatar>
      <div className="ml-4 flex-1">
        <div className="flex items-center">
          <span className="font-semibold text-lg">John Doe</span>
          <span className="flex items-center ml-1 text-yellow-400 font-semibold text-base">
            <RiStarFill className="w-4 h-4 mr-1" />
            1,247
          </span>
        </div>
        <div className=" text-sm text-gray-500 mb-2">San Francisco, CA</div>
        <div className="flex space-x-3">
          <a href="#" className="text-blue-500 hover:underline text-sm flex items-center">
            <RiLinksFill className="mr-1 w-4 h-4" />
            Website
          </a>
          <a href="#" className="hover:underline text-gray-500 text-sm flex items-center">
            <RiGithubFill className="mr-1 w-4 h-4" />
            GitHub
          </a>
          <a href="#" className="text-blue-500 hover:underline text-sm flex items-center">
            <RiTwitterFill className="mr-1 w-4 h-4" />
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProfileCard;
