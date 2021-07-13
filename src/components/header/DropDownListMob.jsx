import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/AuthenticationService';

export default function DropDownListMob({ drop }) {
  return drop ? (
    <div className="px-5 pt-2 pb-0 space-y-1">
      <Link
        className="block flex px-4 py-1 text-sm font-semibold bg-transparent hover:bg-gray-600 focus:bg-gray-600 focus:text-white hover:text-white text-gray md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        to="/account"
      >
        <img className="xl:mr-4 mr-3 w-5 h-5" src={`${window.location.origin}/icons/Icon material-account-circle.png`} alt="Windows" />
        <span> {getUser()}</span>
      </Link>
      <button
        className="block flex px-4 py-1 text-sm font-semibold bg-transparent hover:bg-gray-600 focus:bg-gray-600 focus:text-white hover:text-white text-gray md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        href="#"
      >
        <img className="xl:mr-4 mr-3 w-5 h-5" src={`${window.location.origin}/icons/Icon open-account-logout.png`} alt="Windows" />
        <span> Sign out</span>
      </button>
    </div>
  ) : null;
}
