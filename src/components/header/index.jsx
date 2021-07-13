import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import clsx from 'clsx';
import classNames from 'classnames';
import Mobmenu from './mobilemenu';
import DropDownList from './DropDownList';
import { loggedIn, getUser } from '../../services/AuthenticationService';

export default function Header() {
  const history = useHistory();
  const {
    location: { pathname },
  } = history;
  const [url] = useState(pathname.replace('/', '').trim());
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  return (
    <>
      <div className="relative bg-blue-dark">
        <div className="xl:w-10/12 w-12/12 mx-auto">
          <div className="relative bg-black lg:max-w-2xl lg:w-full"></div>
          <div className="relative xs:py-3 sm:py-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10" aria-label="Global">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link to="/">
                    <div>
                      <span className="sr-only">Workflow</span>
                      <img className="lg:w-52 xl:w-64 md:w-40 sm:w-52 xs:w-48" src={`${window.location.origin}/images/logo.png`} alt="Logo" />
                    </div>
                  </Link>
                  <div className="-mr-2 flex items-center md:hidden">
                    <button
                      onClick={() => {
                        setOpen(true);
                      }}
                      type="button"
                      className="bg-blue-dark rounded-md p-2 inline-flex items-center justify-center text-gray hover:text-gray hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      aria-expanded="false"
                    >
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:space-x-3 lg:space-x-8 xl:space-x-10">
                <Link
                  to="/"
                  className={classNames('xs:text-sm sm:text-base md:text-sm lg:text-sm xl:text-lg text-gray hover:text-gray home-hover', {
                    'border-b-4 border-red-darker': url === '',
                  })}
                >
                  Home
                </Link>
                <Link
                  to="/download"
                  className={classNames('xs:text-sm sm:text-base md:text-sm lg:text-sm xl:text-lg text-gray hover:text-gray home-hover', {
                    'border-b-4 border-red-darker': url === 'download',
                  })}
                >
                  Download
                </Link>
                <Link
                  to="/purchase"
                  className={classNames('xs:text-sm sm:text-base md:text-sm lg:text-sm xl:text-lg text-gray hover:text-gray home-hover', {
                    'border-b-4 border-red-darker': url === 'purchase',
                  })}
                >
                  Purchase
                </Link>
                <Link
                  to="/about"
                  className={classNames('xs:text-sm sm:text-base md:text-sm lg:text-sm xl:text-lg text-gray hover:text-gray home-hover', {
                    'border-b-4 border-red-darker': url === 'about',
                  })}
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className={classNames('text-gray xs:text-sm sm:text-base md:text-sm lg:text-sm xl:text-lg text-indigo-600 hover:text-indigo-500 home-hover', {
                    'border-b-4 border-red-darker': url === 'contact',
                  })}
                >
                  Contact Us
                </Link>
                <a
                  href="https://www.topbetcalculator.com/"
                  className="xs:text-sm sm:text-base md:text-sm lg:text-sm xl:text-lg bg-gold text-gray xl:px-6 xl:py-2 lg:px-5 lg:py-2 md:px-1 md:py-1 sm:px-20 sm:py-2 xs:px-14 xs:py-1 mt-4 lg:mt-0 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TopbetCalculator
                </a>
                {loggedIn() ? (
                  <>
                    <Link
                      to=""
                      onClick={() => {
                        setDrop(!drop);
                      }}
                      className="text-gray xs:text-sm sm:text-base lg:text-sm xl:text-lg text-indigo-600 hover:text-indigo-500 home-hover"
                    >
                      <span>{getUser()}</span>
                      <svg fill="currentColor" viewBox="0 0 20 20" className={clsx(' inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1', drop ? 'rotate-180' : 'rotate-0')}>
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                      </svg>
                    </Link>
                    <DropDownList drop={drop} />
                  </>
                ) : null}
              </div>
            </nav>
          </div>
          <Mobmenu open={open} drop={drop} setDrop={setDrop} setOpen={setOpen} />
        </div>
      </div>
    </>
  );
}
