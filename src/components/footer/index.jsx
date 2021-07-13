import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <div className="w-11/12 ml-auto mr-auto">
          <div className="py-20">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray xl:text-2xl lg:text-sm md:text-sm sm:text-sm xs:text-xs py-2">Bet Trading Software for the BetFair Exchange.</p>
                <img src={`${window.location.origin}/images/discord.svg`} className="w-12 xl:ml-32 lg:ml-20 md:ml-14 sm:ml-16 xs:ml-10 my-6 lg:my-12 xl:my-16" alt="discord" />
              </div>
              <div>
                <h1 className="text-gray shadow-2xl xl:text-3xl lg:text-lg md:text-base sm:text-base xs:text-base">FLASH BETTING SOFTWARE</h1>
                <ul>
                  <li>
                    <Link to="/about">
                      <p className="text-gray xl:text-2xl lg:text-sm md:text-sm sm:text-sm xs:text-xs py-2">About Us</p>
                    </Link>
                    <Link to="/contact">
                      <p className="text-gray xl:text-2xl lg:text-sm md:text-sm sm:text-sm xs:text-xs py-2">Contact Us</p>
                    </Link>
                    <Link to="/download">
                      <p className="text-gray xl:text-2xl lg:text-sm md:text-sm sm:text-sm xs:text-xs py-2">Download</p>
                    </Link>
                    <Link to="/faq">
                      <p className="text-gray xl:text-2xl lg:text-sm md:text-sm sm:text-sm xs:text-xs py-2">FAQ</p>
                    </Link>
                    <a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer">
                      <p className="text-gray xl:text-2xl lg:text-sm md:text-sm sm:text-sm xs:text-xs py-2">Gamble Responsibly</p>
                    </a>
                    <Link to="/purchase">
                      <p className="text-gray xl:text-2xl lg:text-sm md:text-sm sm:text-sm xs:text-xs py-2">Purchase</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-blue-dark py-3 text-center text-gray xl:text-2xl lg:text-lg md:text-lg sm:text-sm xs:text-xs">
        <p>
          © 2021 Flash Betting | <Link to="privacy"> Privacy Policy </Link> | <Link to="terms"> Terms {'&'} Conditions </Link>
        </p>
      </footer>
    </>
  );
};

export default Footer;
