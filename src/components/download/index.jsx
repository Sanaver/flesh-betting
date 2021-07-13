import React from 'react';
import { Link } from 'react-router-dom';
//* Components

import Footer from '../footer';
// import header
import Header from '../header';

import { handleWindowsDownload, handleMacDownload } from '../../http/DownloadManager';

const Download = () => {
  return (
    <>
      <Header />
      <div className="bg-blue-dark pb-20">
        <div className="m-auto w-11/12 flex items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 xs:col-span-2">
              <div className="lg:mt-32 xs:mt-10">
                <h1 className="font-pacifico xl:text-7xl lg:text-5xl md:text-3xl sm:md:text-3xl xs:text-xl text-yellow lg:py-6 py-3">Download Flash Betting</h1>
                <p className="text-blue-light xl:text-2xl lg:text-lg md:text-lg sm:text-sm xs:text-xs">
                  Flash Betting is available to download for Windows {'&'} Mac. Both versions will be supported into the future, with the potential of a Linux version depending on demand.
                </p>
                <div className="mt-5">
                  <ul className="sm:flex">
                    <li>
                      <button className="flex items-center text-gray bg-red-dark px-8 py-3 rounded-md ml-auto mr-auto" onClick={handleWindowsDownload}>
                        <img className="xl:w-8 xl:h-8 xl:mr-4 w-4 h-4 mr-3" src={`${window.location.origin}/icons/Icon awesome-windows.png`} alt="Windows" />
                        <span className="font-roboto text-base">Download for Windows</span>
                      </button>
                    </li>
                    <li>
                      <div className="text-center">
                        <h1 className="items-center text-xl font-pacifico text-yellow ml-3 mt-4 mb-3 sm:mb-0">Or</h1>
                      </div>
                    </li>
                    <li>
                      <button className="flex items-center text-gray bg-red-dark xs:px-12 sm:px-8 py-3 rounded-md sm:ml-4 ml-auto mr-auto" onClick={handleMacDownload}>
                        <img className="xl:w-8 xl:h-8 xl:mr-4 w-4 h-4 mr-3" src={`${window.location.origin}/icons/Icon awesome-apple.png`} alt="Mac" />
                        <span className="font-roboto text-base">Download for Mac</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 xs:col-span-2">
              <div className="xl:mt-3 lg:mt-7">
                <img src={`${window.location.origin}/images/laptop_demo.png`} alt="demo" className="lg:w-full md:w-2/3 sm:w-2/3 xs:w-96 ml-auto mr-auto" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-auto w-9/12">
          <h2 className="font-pacifico xl:text-7xl lg:text-5xl md:text-3xl sm:md:text-3xl xs:text-xl text-gray lg:py-6 py-3 text-center">System Requriment</h2>
          <p className="font-roboto xl:text-2xl lg:text-lg md:text-lg sm:text-sm xs:text-xs text-gray">Before you start FlashBetting download, make sure your PC meets minimum system requirements.</p>
          <ul className="list-disc ml-10 my-5">
            <li className="listsetting font-roboto xl:text-2xl lg:text-lg md:text-lg sm:text-sm xs:text-xs text-gray py-1 color-orange">Operating System: Windows 7/8/8.1/10</li>
            <li className="listsetting font-roboto xl:text-2xl lg:text-lg md:text-lg sm:text-sm xs:text-xs text-gray py-1">Memory (RAM): 2 GB of RAM required.</li>
            <li className="listsetting font-roboto xl:text-2xl lg:text-lg md:text-lg sm:text-sm xs:text-xs text-gray py-1">Hard Disk Space: 500 MB of free space required.</li>
            <li className="listsetting font-roboto xl:text-2xl lg:text-lg md:text-lg sm:text-sm xs:text-xs text-gray py-1">Processor: Intel Dual Core processor or later.</li>
          </ul>
          <p className="font-roboto xl:text-2xl lg:text-lg md:text-lg sm:text-sm xs:text-xs text-gray mt-10">
            Flash Betting is pretty easy to run, however, when you can have multiple markets open concurrently, with lots of fast trading ladders, then it has the potential to cause performance issues. Therefore, if you don’t have a modern processor
            and sufficient RAM, it is not advisable to have more than 3 markets opened at once in live markets, as your PC may not be able to cope. As much as Flash Betting is optimised, performance ultimately depends on your equipment and the speed
            at which we get data from BetFair.
          </p>
        </div>
        <div className="flex flex-col m-auto w-9/12 py-8">
          <h2 className="font-pacifico text-center xl:text-7xl lg:text-5xl md:text-3xl sm:md:text-3xl xs:text-xl text-gray lg:py-6 py-3">Terms {'&'} Conditions</h2>
          <div className="border-b-2 border-green w-9/12 my-4 ml-auto mr-auto"></div>
          <p className="font-roboto xl:text-2xl lg:text-lg md:text-lg sm:text-sm xs:text-xs text-center text-pink">
            By downloading and purchasing our software, you are agreeing to our terms {'&'} conditions. If you are not fully aware of them, please read them now.
          </p>
          <div className="text-center xl:py-12 lg:py-12 md:py-8 sm:py-9 xs:pb-8 xs:pt-14 sm:pt-0">
            <Link className="text-lg bg-green text-gray xl:px-24 xl:py-6 lg:px-16 lg:py-4 md:px-20 md:py-3 sm:px-16 sm:py-3 xs:px-10 xs:py-2 mt-5 lg:mt-0 rounded" to="terms" target="_blank" rel="noopener noreferrer">
              READ MORE
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      {/* <Footer2/> */}
    </>
  );
};

export default Download;
