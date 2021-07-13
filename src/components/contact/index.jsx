import React from 'react';
//* Components
import Header from '../header';
import Footer from '../footer';

const Contact = () => {
  const handleSubmit = (e) => {};

  return (
    <>
      <Header />
      <div className="bg-blue-dark py-10">
        <h1 className="font-pacifico xl:text-7xl lg:text-5xl md:text-3xl sm:md:text-3xl xs:text-xl xl:py-4 lg:py-3 md:pt-3 md:pb-0 sm:pt-3 sm:pb-0 xs:pt-3 xs:pb-0 text-yellow text-center">Contact Us</h1>
        <div className="text-center">
          <form>
            <div className="grid grid-row ">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="m-3 xl:w-4/12 lg:w-4/12 md:w-4/12 sm:w-8/12 xs:w-8/12 xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs px-4 py-2 border-2 border-red-darker rounded-3xl bg-transparent font-roboto text-gray-medium placeholder-gray-medium focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-row ">
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="m-3 xl:w-4/12 lg:w-4/12 md:w-4/12 sm:w-8/12 xs:w-8/12 xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs px-4 py-2 border-2 border-red-darker rounded-3xl bg-transparent font-roboto text-gray-medium placeholder-gray-medium focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-row ">
              <div>
                <input
                  type="email"
                  placeholder="Subject"
                  className="m-3 xl:w-4/12 lg:w-4/12 md:w-4/12 sm:w-8/12 xs:w-8/12 xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs px-4 py-2 border-2 border-red-darker rounded-3xl bg-transparent font-roboto text-gray-medium placeholder-gray-medium focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-row ">
              <div>
                <textarea
                  cols="25"
                  name="messagebox"
                  rows="8"
                  placeholder="Enter your message..."
                  className="m-3 xl:w-4/12 lg:w-4/12 md:w-4/12 sm:w-8/12 xs:w-8/12 xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs px-4 py-2 border-2 border-red-darker rounded-3xl bg-transparent font-roboto text-gray-medium placeholder-gray-medium focus:outline-none"
                />
              </div>
            </div>
          </form>
          <div className="text-center xl:py-4 lg:py-2 xs:py-0">
            <button type="submit" className="font-roboto bg-yellow-light text-lg text-black xl:px-64 xl:py-4 lg:px-40 lg:py-2 md:px-20 md:py-2 sm:px-40 sm:py-2 xs:px-20 xs:py-1 lg:mt-0 rounded">
              SEND
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
