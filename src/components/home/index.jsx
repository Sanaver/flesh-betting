import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// import footer
import Footer from '../footer';
// import header
import Header from '../header';

import { handleWindowsDownload, handleMacDownload } from '../../http/DownloadManager';

const Home = () => {
  const [open, setopen] = useState({
    image1: false,
    image2: false,
    image3: false,
    image4: false,
    image5: false,
  });

  const closedilog = () => {
    setopen({
      ...open,
      image1: false,
      image2: false,
      image3: false,
      image4: false,
      image5: false,
      image6: false,
    });
  };

  return (
    <>
      <Header />
      <div className="bg-blue-dark py-10 home-scroll">
        <h1 className="font-pacifico xl:text-7xl lg:text-5xl md:text-3xl sm:md:text-3xl xs:text-xl lg:pt-20 text-blue text-center">Flash Betting</h1>
        <p className="text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs lg:py-10 py-4">Beautiful, super fast, easy to use Bet Trading Software for the BetFair Exchange.</p>
        <div className="text-center xl:py-12 lg:py-8 md:py-8 sm:py-9 xs:py-4">
          <AnchorLink className="font-pacifico xs:text-sm sm:text-base lg:text-lg bg-red-dark text-gray xl:px-28 xl:py-4 lg:px-20 lg:py-2 md:px-20 md:py-2 sm:px-20 sm:py-2 xs:px-14 xs:py-1 mt-4 lg:mt-0 rounded" href="#download-buttons">
            Get Started !
          </AnchorLink>
        </div>
        <div className="w-11/12 ml-auto mr-auto ml-auto mt-4">
          <div className="relative">
            <img src={`${window.location.origin}/images/laptop-screen.png`} className="w-full mr-auto ml-auto" alt="" />
            <img src={`${window.location.origin}/images/HOME PAGE tow.png`} className="absolute top-13/100 left-11/100 w-screenshot h-screenshot home-frame-img mr-auto ml-auto" alt="" />
          </div>

          <p className="font-pacifico text-gray text-center xl:text-7xl lg:text-5xl md:text-3xl sm:md:text-3xl xs:text-2xl lg:py-10 py-4">Feature List</p>
          {/* First row feature list */}
          <div className="mt-20 w-10/12 ml-auto mr-auto ml-auto">
            <div className="grid grid-row grid-cols-3 gap-10">
              <div className="col-span-3 sm:col-span-1">
                <img src={`${window.location.origin}/icons/candlesticks.png`} className="w-12 mr-auto ml-auto" alt="" />
                <p className="text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs pt-6">Candlesticks on the side of the Ladder to show whether the price goes up or down.</p>
              </div>
              <div className="col-span-3 sm:col-span-1">
                <img src={`${window.location.origin}/icons/stock-market-chart.png`} className="w-12 mr-auto ml-auto" alt="" />
                <p className="text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs pt-6">
                  Rich graphs that offer many different sources of information. Includes traditional BetFair charts, and a new depth chart to see the Back vs. Lay fight, and a Price Metre to see price ranges and fluctuations.
                </p>
              </div>
              <div className="col-span-3 sm:col-span-1">
                <img src={`${window.location.origin}/icons/stock-market-screen.png`} className="w-12 mr-auto ml-auto" alt="" />
                <p className="text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs pt-6">
                  Profit / loss chart to visualise your performance in trading in the BetFair Exchange. Learn how you perform in these markets over time by analysing the graphs, which is available in the Home View.
                </p>
              </div>
            </div>
          </div>

          {/* Second row feature list */}
          <div className="mt-20 w-10/12 ml-auto mr-auto ml-auto">
            <div className="grid grid-row grid-cols-3 gap-10">
              <div className="col-span-3 sm:col-span-1">
                <img src={`${window.location.origin}/icons/big-data.png`} className="w-12 mr-auto ml-auto" alt="" />
                <p className="text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs pt-6">
                  Utilises the BetFair Streaming API to get super fast market updates so you can make decisions based on a more clearer picture of price action.
                </p>
              </div>
              <div className="col-span-3 sm:col-span-1">
                <img src={`${window.location.origin}/icons/gear.png`} className="w-12 mr-auto ml-auto" alt="" />
                <p className="text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs pt-6">
                  Trading tools for you to optimise your strategies to make precise trades. Includes Stop Loss, Tick Offset, Back / Lay, Fill or Kill, hedging.
                </p>
              </div>
              <div className="col-span-3 sm:col-span-1">
                <img src={`${window.location.origin}/icons/tabs.png`} className="w-12 mr-auto ml-auto" alt="" />
                <p className="text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs pt-6">Horizontal tabs for each market you connect to. You can have multiple markets open and navigate seamlessly between them.</p>
              </div>
            </div>
          </div>

          <div className="xs:w-11/12 text-center ml-auto mr-auto pt-4">
            <p className="text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-10">
              If you have any problem you can find answers to most of the common questions in our{' '}
              <span className="text-yellow">
                <Link to="/faq">FAQ Section.</Link>
              </span>
              If you still can not find a solution, Please contact support{' '}
              <span className="text-yellow">
                <Link to="/contact">here</Link>
              </span>
            </p>
          </div>
          <div className="lg:w-5/12 md:w-7/12 w-11/12 text-center ml-auto mr-auto">
            <p className="font-pacifico text-gray text-center xl:text-7xl lg:text-5xl md:text-3xl sm:md:text-3xl xs:text-2xl mt-20">Screenshots</p>
            <div className="ml-auto mr-auto w-2/12 py-4">
              <ul className="list-none flex">
                <li className="h-3 w-3 rounded-xl bg-green"></li>
                <li className="h-3 w-3 ml-3 rounded-xl bg-pink-dark"></li>
                <li className="h-3 w-3 ml-3 rounded-xl bg-pink-dark"></li>
              </ul>
            </div>
          </div>
          {/* dilogs  */}
          <dialog open={open.image1} className="dilog-transition" onClick={closedilog}>
            <img src={`${window.location.origin}/icons/Icon awesome-arrow-left.png`} onClick={closedilog} className="w-8 rounded-md cursor-pointer hidden sm:block" alt="" />
            <div className="ml-auto mr-auto py-10">
              <img src={`${window.location.origin}/images/HOME PAGE  Not perimum user.png`} className="lg:w-6/12 md:w-8/12 sm:w-8/12 xs:w-11/12 xs:pt-32 lg:pt-0 rounded-md mr-auto ml-auto" alt="" />
            </div>
          </dialog>
          <dialog open={open.image2} className="bg-black dilog-transition" onClick={closedilog}>
            <img src={`${window.location.origin}/icons/Icon awesome-arrow-left.png`} onClick={closedilog} className="w-8 rounded-md cursor-pointer hidden sm:block" alt="" />
            <div className="ml-auto mr-auto py-10">
              <img src={`${window.location.origin}/images/HOME PAGE one.png`} className="lg:w-8/12 sm:w-10/12 xs:w-11/12 rounded-md mr-auto ml-auto pt-32 lg:pt-0" alt="" />
            </div>
          </dialog>
          <dialog open={open.image3} className="bg-black dilog-transition" onClick={closedilog}>
            <img src={`${window.location.origin}/icons/Icon awesome-arrow-left.png`} onClick={closedilog} className="w-8 rounded-md cursor-pointer hidden sm:block" alt="" />
            <div className="ml-auto mr-auto py-10">
              <img src={`${window.location.origin}/images/HOME PAGE tow.png`} className="lg:w-8/12 sm:w-10/12 xs:w-11/12 rounded-md mr-auto ml-auto pt-32 lg:pt-0" alt="" />
            </div>
          </dialog>
          <dialog open={open.image4} className="bg-black dilog-transition" onClick={closedilog}>
            <img src={`${window.location.origin}/icons/Icon awesome-arrow-left.png`} onClick={closedilog} className="w-8 rounded-md cursor-pointer hidden sm:block" alt="" />
            <div className="ml-auto mr-auto py-10">
              <img src={`${window.location.origin}/images/grid viewthree.png`} className="lg:w-6/12 md:w-8/12 sm:w-8/12 xs:w-11/12 xs:pt-32 lg:pt-0 rounded-md mr-auto ml-auto pt-32 lg:pt-0" alt="" />
            </div>
          </dialog>
          <dialog open={open.image5} className="bg-black dilog-transition" onClick={closedilog}>
            <img src={`${window.location.origin}/icons/Icon awesome-arrow-left.png`} onClick={closedilog} className="w-8 rounded-md cursor-pointer hidden sm:block" alt="" />
            <div className="ml-auto mr-auto py-10">
              <img src={`${window.location.origin}/images/grid view four.png`} className="lg:w-6/12 md:w-8/12 sm:w-8/12 xs:w-11/12 xs:pt-32 lg:pt-0 rounded-md mr-auto ml-auto pt-32 lg:pt-0" alt="" />
            </div>
          </dialog>
          <dialog open={open.image6} className="bg-black dilog-transition" onClick={closedilog}>
            <img src={`${window.location.origin}/icons/Icon awesome-arrow-left.png`} onClick={closedilog} className="w-8 rounded-md cursor-pointer hidden sm:block" alt="" />
            <div className="w-8/12 ml-auto mr-auto py-10">
              <img src={`${window.location.origin}/images/LOGIN PAGE  five.png`} className="w-full h-full rounded-md mr-auto ml-auto pt-32 lg:pt-0" alt="" />
            </div>
          </dialog>
          <div className="md:w-8/12 sm:w-10/12 xs:w-8/12 lg:w-6/12 text-center ml-auto mr-auto">
            <div className="grid grid-row grid-cols-3 gap-3">
              <div className="col-span-3 sm:col-span-1">
                <img
                  src={`${window.location.origin}/images/HOME PAGE  Not perimum user.png`}
                  onClick={() => {
                    setopen({ ...open, image1: true });
                  }}
                  className="cursor-pointer w-full h-40 xl:h-48 rounded-md mr-auto ml-auto"
                  alt=""
                />
              </div>
              <div className="col-span-3 sm:col-span-1">
                <img
                  src={`${window.location.origin}/images/HOME PAGE one.png`}
                  onClick={() => {
                    setopen({ ...open, image2: true });
                  }}
                  className="cursor-pointer w-full h-40 xl:h-48 rounded-md mr-auto ml-auto"
                  alt=""
                />
              </div>
              <div className="col-span-3 sm:col-span-1">
                <img
                  src={`${window.location.origin}/images/HOME PAGE tow.png`}
                  onClick={() => {
                    setopen({ ...open, image3: true });
                  }}
                  className="cursor-pointer w-full h-40 xl:h-48 rounded-md mr-auto ml-auto"
                  alt=""
                />
              </div>
              <div className="col-span-3 sm:col-span-1">
                <img
                  src={`${window.location.origin}/images/grid viewthree.png`}
                  onClick={() => {
                    setopen({ ...open, image4: true });
                  }}
                  className="cursor-pointer w-full h-40 xl:h-48 rounded-md mr-auto ml-auto"
                  alt=""
                />
              </div>
              <div className="col-span-3 sm:col-span-1">
                <img
                  src={`${window.location.origin}/images/grid view four.png`}
                  onClick={() => {
                    setopen({ ...open, image5: true });
                  }}
                  className="cursor-pointer w-full h-40 xl:h-48 rounded-md mr-auto ml-auto"
                  alt=""
                />
              </div>
              <div className="col-span-3 sm:col-span-1">
                <img
                  src={`${window.location.origin}/images/LOGIN PAGE  five.png`}
                  onClick={() => {
                    setopen({ ...open, image6: true });
                  }}
                  className="cursor-pointer w-full h-40 xl:h-48 rounded-md mr-auto ml-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div id="download-buttons" className="bg-img-home">
          <div className="bg-color-home">
            <div className="w-11/12 ml-auto mr-auto ml-auto my-20 pt-40">
              <p className="font-pacifico text-pink text-center xl:text-7xl lg:text-5xl md:text-3xl sm:md:text-3xl xs:text-2xl lg:py-10 py-4">Download FlashBetting</p>
              <p className="text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4">At very cheap prices, we aim to over deliver to make trading on the BetFair Exchange a quality and affordable experience.</p>
              <h2 className="text-yellow-light text-center xl:text-3xl lg:text-2xl md:text-sm sm:text-sm xs:text-xs py-4">Start Your 30 Day FREE Trial Today!</h2>
              <div className="xs:w-12/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 ml-auto mr-auto ml-auto">
                <div className="mt-5 xl:ml-14 ml-auto mr-auto ml-auto text-center">
                  <ul className="sm:flex">
                    <li>
                      <button className="flex items-center text-gray bg-green px-8 py-3 rounded-md ml-auto mr-auto" onClick={handleWindowsDownload}>
                        <img className="xl:w-8 xl:h-8 xl:mr-4 w-4 h-4 mr-3" src={`${window.location.origin}/icons/Icon awesome-windows.png`} alt="Windows" />
                        <span className="font-roboto text-base">Download for Windows</span>
                      </button>
                    </li>
                    <li>
                      <div className="text-center">
                        <h1 className="items-center text-xl font-pacifico text-yellow ml-4 mr-1 mt-4 mb-3 sm:mb-0">Or</h1>
                      </div>
                    </li>
                    <li>
                      <button className="flex items-center text-gray bg-green xs:px-12 sm:px-8 py-3 rounded-md sm:ml-4 ml-auto mr-auto" onClick={handleMacDownload}>
                        <img className="xl:w-8 xl:h-8 xl:mr-4 w-4 h-4 mr-3" src={`${window.location.origin}/icons/Icon awesome-apple.png`} alt="Mac" />
                        <span className="font-roboto text-base">Download for Mac</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-auto lg:w-8/12 md:w-9/12 sm:w-9/12 xs:w-10/12 py-8">
          <h2 className="font-pacifico text-center xl:text-7xl lg:text-5xl md:text-3xl sm:md:text-3xl xs:text-xl text-gray lg:py-6 py-3">Description</h2>
          <div className="border-b-2 border-yellow w-9/12 my-4 ml-auto mr-auto"></div>
          <p className="font-roboto xl:text-2xl lg:text-lg md:text-lg sm:text-sm xs:text-xs text-center text-pink py-4">
            Flash Betting is Bet Trading software for the BetFair Exchange. It utilises the latest technology to create an aesthetically pleasing trading experience. It uses the Streaming API which gives us the capability to see market updates at
            sonic speed. This is especially useful when a race or game is in-play, and you need to see precise price movement to have more information to make better decisions.
          </p>
          <div className="text-center xl:py-12 lg:py-12 md:py-8 sm:py-4 xs:py-4">
            <img className="lg:w-80 md:w-60 sm:w-48 xs:w-32 ml-auto mr-auto" src={`${window.location.origin}/images/betfair-vendor.png`} alt="BetFair Vendor Program" />
          </div>
          <p className="font-roboto xl:text-2xl lg:text-lg md:text-lg sm:text-sm xs:text-xs text-center text-pink py-4">
            We use a combination of the BetFair APIs to access different data that BetFair provides to show you different information in the software. For the market and price movements, when you open a new market in the software, it subscribes to
            the Streaming API — a super fast source of information that flows like a stream of water, in contrast to the traditional way of refreshing data every second. Your bets are shown to you through a combination between the traditional API-NG
            and Streaming API. When one is down it defaults to the other. There can be times when the BetFair API is down, and in general, every BetFair user should be facing a similar problem. What makes Flash Betting unique is that it simplifies
            the trading process while still providing high speed trading and tonnes of novel visual information from new graphs and charts to new tools to use in trading.
          </p>
        </div>
        <div className="xs:w-11/12 text-center ml-auto mr-auto">
          <p className="text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-0 lg:py-10">
            If you encounter any problems with the software then you can find answers to most of the common questions in our{' '}
            <Link to="/faq">
              <span className="text-yellow">FAQ Section.</span>
            </Link>{' '}
            If you still can not find a solution, Please contact support{' '}
            <Link to="/contact">
              <span className="text-yellow">here</span>
            </Link>
            {'.'}
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
