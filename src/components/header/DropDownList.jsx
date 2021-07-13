import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/AuthenticationService';

export default function DropDownList({ drop }) {
  return drop ? (
    <div className="absolute right-0 w-36 mt-2 ml-2 origin-top-right rounded-md shadow-lg">
      <div className="px-2 py-2 bg-white rounded-md shadow bg-black-light">
        <span className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent border-b-2 border-gray hover:bg-gray-600 focus:bg-gray-600 focus:text-white hover:text-white text-gray md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
          {getUser()}
        </span>
        <Link
          className="block flex px-4 py-2 text-sm font-semibold bg-transparent hover:bg-gray-600 focus:bg-gray-600 focus:text-white hover:text-white text-gray md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          to="/account"
        >
          <img className="xl:mr-4 mr-3 w-5 h-5" src={`${window.location.origin}/icons/Icon material-account-circle.png`} alt="Windows" />
          <span> Account</span>
        </Link>
        <button className="block flex px-4 py-2 text-sm font-semibold bg-transparent hover:bg-gray-600 focus:bg-gray-600 focus:text-white hover:text-white text-gray md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
          <img className="xl:mr-4 mr-3 w-5 h-5" src={`${window.location.origin}/icons/Icon open-account-logout.png`} alt="Windows" />
          <span> Sign out</span>
        </button>
      </div>
    </div>
  ) : null;
}
