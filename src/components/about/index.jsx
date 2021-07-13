import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
//* Components
import Header from '../header';
import Footer from '../footer';

const About = () => {
  return (
    <>
      <Header />
      <div className="bg-blue-dark pb-20">
        <div className="m-auto w-11/12 flex items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 xs:col-span-2">
              <div className="lg:mt-32 xs:mt-10">
                <h1 className="font-pacifico xl:text-7xl lg:text-5xl md:text-3xl sm:md:text-3xl xs:text-xl text-orange lg:py-6 py-3">About Flash Betting</h1>
                <p className="text-orange-light xl:text-2xl lg:text-lg md:text-lg sm:text-sm xs:text-xs">Betfair trading software that uses the Streaming API for fast market updates. A modern UI to enjoy your trading experience.</p>
                <div className="mt-5">
                  <AnchorLink className="sans-serif text-lg bg-red-dark text-gray xl:px-10 xl:py-4 lg:px-4 lg:py-2 md:px-20 md:py-2 sm:px-20 sm:py-2 xs:px-14 xs:py-1 mt-4 lg:mt-0 rounded" href="#terms-content">
                    Explore !
                  </AnchorLink>
                </div>
              </div>
            </div>
            <div className="xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-2 xs:col-span-2">
              <div className="xl:mt-3 lg:mt-7">
                <img src={`${window.location.origin}/images/laptop_demo_2.png`} alt="demo" className="lg:w-full md:w-2/3 sm:w-2/3 xs:w-96 ml-auto mr-auto" />
              </div>
            </div>
          </div>
        </div>

        <div id="terms-content" className="m-auto w-10/12 lg:mt-20 sm:mt-10 xs:mt-4">
          <div>
            <h2 className="font-pacifico xl:text-7xl lg:text-5xl md:text-3xl sm:md:text-3xl xs:text-xl text-orange lg:py-6 sm:py-3 xs:py-3 text-orange-light text-center py-6">Background</h2>

            <div className="ml-auto mr-auto w-2/12 pb-2">
              <ul className="list-none flex">
                <li className="h-3 w-3 rounded-xl bg-green"></li>
                <li className="h-3 w-3 ml-3 rounded-xl bg-pink-dark"></li>
                <li className="h-3 w-3 ml-3 rounded-xl bg-pink-dark"></li>
              </ul>
            </div>

            <p className="font-roboto xl:text-3xl lg:text-lg md:text-base sm:text-base xs:text-base text-gray text-center">
              Flash Betting is created by a solo developer based in the United Kingdom. The software is developed and maintained by me, and my goal is to add more charts, graphs and features. My motivation for creating this software is I feel the
              software needs to be modernised and made with User Experience in mind. Most of the BetFair software available is overly complicated and requires too much information that casual traders may not want to invest in learning. This is where
              Flash Betting comes in with new ideas. It is simple to use, and designed to make Bet Trading fun.
            </p>
            <br />
            <br />
            <p className="font-roboto xl:text-3xl lg:text-lg md:text-base sm:text-base xs:text-base text-gray text-center">
              My near future plan is to create a community of active traders to share ideas / strategies. The community will be based around a discord server with bots to show trades, which will allow traders to learn from others and track their
              progress.
            </p>
            <div className="ml-24 md:ml-16 sm:ml-12 xs:ml-0 mt-4">
              <img className="h-40 mt-5 sm:w-10 xs:w-8" src={`${window.location.origin}/images/right_arrow.png`} alt="" />
            </div>
          </div>

          <div>
            <h2 className="font-pacifico xl:text-7xl lg:text-5xl md:text-3xl sm:md:text-3xl xs:text-xl text-orange lg:py-6 sm:py-3 xs:py-3 text-pink-light text-center py-6">What Makes it Unique?</h2>
            <div className="ml-auto mr-auto w-2/12 pb-2">
              <ul className="list-none flex">
                <li className="h-3 w-3 rounded-xl bg-green"></li>
                <li className="h-3 w-3 ml-3 rounded-xl bg-pink-dark"></li>
                <li className="h-3 w-3 ml-3 rounded-xl bg-pink-dark"></li>
              </ul>
            </div>
            <p className="font-roboto xl:text-3xl lg:text-lg md:text-base sm:text-base xs:text-base text-gray text-center">
              Flash Betting is Bet Trading software for the BetFair Exchange. It utilises the latest technology to create an aesthetically pleasing trading experience. It uses the Streaming API which gives us the capability to see market updates at
              sonic speed. This is especially useful when a race or game is in-play, and you need to see precise price movement to have more information to make better decisions.
            </p>
            <div className="mr-24 md:mr-16 sm:mr-12 xs:mr-0 mt-4">
              <img className="h-40 mt-5 sm:w-10 xs:w-8 ml-auto" src={`${window.location.origin}/images/left_arrow.png`} alt="" />
            </div>
          </div>

          <div>
            <h2 className="font-pacifico xl:text-7xl lg:text-5xl md:text-3xl sm:md:text-3xl xs:text-xl lg:py-6 sm:py-3 xs:py-3 text-blue-light text-center py-6">Who is the Target Audience?</h2>
            <div className="ml-auto mr-auto w-2/12 pb-2">
              <ul className="list-none flex">
                <li className="h-3 w-3 rounded-xl bg-green"></li>
                <li className="h-3 w-3 ml-3 rounded-xl bg-pink-dark"></li>
                <li className="h-3 w-3 ml-3 rounded-xl bg-pink-dark"></li>
              </ul>
            </div>
            <p className="font-roboto xl:text-3xl lg:text-lg md:text-base sm:text-base xs:text-base text-gray text-center">
              Flash Betting is built for inexperienced to moderately experienced BetFair traders. You don’t get bogged down with a huge set of customisable features, widgets, settings. Instead, you have a user-friendly interface to explore all the
              different BetFair markets. Don’t get the wrong idea though — Flash Betting is still super fast as it uses the latest tech and the Streaming API. The difference is, everything is designed and placed in a way that is meant to be
              intuitive. There are still basic trading tools included in the software that more experienced traders would appreciate. These include Stop Loss, Tick Offset, Hedging, Back / Lay, Fill Or Kill, and Stop Entry. The brilliance of this
              software is that you can open up the menu, select a market, open it, and not feel inundated with so much information. All the detail is displayed in beautiful graphs that is intended to be straightforward.
            </p>
            <div className="md:ml-16 sm:ml-12 xs:ml-0 mt-4">
              <img className="h-40 mt-5 sm:w-10 xs:w-8" src={`${window.location.origin}/images/right_arrow.png`} alt="" />
            </div>
          </div>

          <div>
            <h2 className="font-pacifico xl:text-7xl lg:text-5xl md:text-3xl sm:md:text-3xl xs:text-xl lg:py-6 sm:py-3 xs:py-3 text-yellow-light text-center py-6">Future Plans</h2>
            <div className="ml-auto mr-auto w-2/12 pb-2">
              <ul className="list-none flex">
                <li className="h-3 w-3 rounded-xl bg-green"></li>
                <li className="h-3 w-3 ml-3 rounded-xl bg-pink-dark"></li>
                <li className="h-3 w-3 ml-3 rounded-xl bg-pink-dark"></li>
              </ul>
            </div>
            <p className="font-roboto xl:text-3xl lg:text-lg md:text-base sm:text-base xs:text-base text-gray text-center">
              We have big plans for Flash Betting in building a community of traders. We plan to launch a discord server with useful bots so traders can share their trades, profit and loss, and watch live streams to learn from each other. Costs are
              kept at a minimum to make it affordable for everyone, and a community is being built to connect people to learn more about Bet Trading strategies and how to become profitable.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
