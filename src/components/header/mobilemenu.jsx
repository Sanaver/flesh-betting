import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import DropDownListMob from './DropDownListMob';

export default function Mobilemenu({ open, drop, setDrop, setOpen }) {
  return (
    <div>
      {open && (
        <div className="z-10 absolute transition duration-150 ease-out top-0 inset-x-0 pb-2 transition transform origin-top-right md:hidden">
          <div className="shadow-md bg-blue-dark ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img className="lg:w-56 md:w-32 sm:w-40 xs:w-32" src={`${window.location.origin}/images/logo.png`} alt="" />
              </div>
              <div className="-mr-2">
                <button
                  onClick={() => {
                    setOpen(false);
                  }}
                  type="button"
                  className="bg-blue-dark rounded-md p-2 inline-flex items-center justify-center text-gray hover:text-gray hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-5 pt-2 pb-0 space-y-1">
              <Link to="/" className="block w-16 px-3 py-2 xs:text-sm sm:text-base lg:text-lg text-gray hover:text-gray home-hover">
                Home
              </Link>
              <Link to="/download" className="block w-24 px-3 py-2 xs:text-sm sm:text-base lg:text-lg text-gray hover:text-gray home-hover">
                Download
              </Link>
              <Link to="/purchase" className="block w-20 px-3 py-2 xs:text-sm sm:text-base lg:text-lg text-gray hover:text-gray home-hover">
                Purchase
              </Link>
              <Link to="/about" className="block w-24 px-3 py-2 xs:text-sm sm:text-base lg:text-lg text-gray hover:text-gray home-hover">
                About Us
              </Link>
              <Link to="/contact" className="block w-28 px-3 py-2 xs:text-sm sm:text-base lg:text-lg text-gray hover:text-gray home-hover">
                Contact Us
              </Link>
              <Link to="">
                <button
                  onClick={() => {
                    setDrop(!drop);
                  }}
                  className="text-gray xs:text-sm sm:text-base lg:text-lg text-indigo-600 hover:text-indigo-500 home-hover ml-3"
                >
                  <span>Dropdown</span>
                  <svg fill="currentColor" viewBox="0 0 20 20" className={clsx(' inline w-4 h-4 ml-1 transition-transform duration-200 transform md:-mt-1', drop ? 'rotate-180' : 'rotate-0')}>
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </Link>
            </div>
            <DropDownListMob drop={drop} />
            <a
              href="https://www.topbetcalculator.com/"
              className="block w-full xs:text-sm sm:text-base lg:text-lg bg-gold text-gray xl:px-16 xl:py-4 lg:px-10 lg:py-2 md:px-8 md:py-2 sm:px-20 sm:py-2 xs:px-14 xs:py-2 mt-4 lg:mt-0 rounded text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              TopbetCalculator
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
