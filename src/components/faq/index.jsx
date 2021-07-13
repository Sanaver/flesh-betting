import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
//* Components
import Header from '../header';
import Footer from '../footer';
//* Reducers
import { initialState, reducer } from '../../reducers/faqReducer';

const FAQ = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { faqOneOpen, faqTwoOpen, faqThreeOpen, faqFourOpen, faqFiveOpen } = state;
  return (
    <>
      <Header />
      <div className="min-h-3/4 h-full bg-blue-dark py-6">
        <div className="m-auto w-11/12 flex flex-col">
          <h1 className="font-roboto text-5xl text-orange-light my-6 underline">FAQ</h1>

          {/* #1 How does it work? */}
          <section className="my-6">
            <div className="flex flex-row items-center cursor-pointer select-none" onClick={() => dispatch('faq_one')}>
              <img className="w-icon h-icon" src={`${window.location.origin}/icons/${faqOneOpen ? 'Icon awesome-plus-1' : 'Icon awesome-plus'}.png`} alt="" />
              <h2 className="font-pacifico text-pink-light text-2xl ml-2">How does it work ?</h2>
            </div>
            <div className="pl-16">
              <p className={`${faqOneOpen ? '' : 'hidden '}font-roboto text-gray pl-4 border-l-2 border-blue`}>
                Flash Betting uses the Streaming API provided by BetFair to retrieve market and price data that is displayed to you in the software. In the case where Streaming is unavailable, it will default to the older APIs to retrieve the data.
                The streaming API is fast-flowing data that we receive from BetFair — sometimes several chunks each second. They tell us information about matched bets across all prices in a market.
              </p>
            </div>
          </section>

          {/* #2 How to do registrations? */}
          <section className="my-6">
            <div className="flex flex-row items-center cursor-pointer select-none" onClick={() => dispatch('faq_two')}>
              <img className="w-icon h-icon" src={`${window.location.origin}/icons/${faqTwoOpen ? 'Icon awesome-plus-1' : 'Icon awesome-plus'}.png`} alt="" />
              <h2 className="font-pacifico text-pink-light text-2xl ml-2">How do I register?</h2>
            </div>
            <div className="pl-16">
              <p className={`${faqTwoOpen ? '' : 'hidden '}font-roboto text-gray pl-4 border-l-2 border-blue`}>
                Registration is a quick process. You have to download the Flash Betting software for your operating system (Windows, Mac), and then locate your client id in the HomeView of the software. You then go to the purchase page to login and
                pay for a subscription in one of the plans available. Once paid, you’ll have premium access to all of the advanced features, including the Ladder View and feature rich graphs.
              </p>
            </div>
          </section>

          {/* #3 How to select the membership plan? */}
          <section className="my-6">
            <div className="flex flex-row items-center cursor-pointer select-none" onClick={() => dispatch('faq_three')}>
              <img className="w-icon h-icon" src={`${window.location.origin}/icons/${faqThreeOpen ? 'Icon awesome-plus-1' : 'Icon awesome-plus'}.png`} alt="" />
              <h2 className="font-pacifico text-pink-light text-2xl ml-2">I’ve paid but my account wasn’t accredited with premium</h2>
            </div>
            <div className="pl-16">
              <p className={`${faqThreeOpen ? '' : 'hidden '}font-roboto text-gray pl-4 border-l-2 border-blue`}>
                Go to the <Link to="contact"><u>contact page</u></Link>, and quote your BetFair username or client id, which can be located inside Flash Betting. Explain when the purchase was made and we’ll investigate and aim to resolve the issue.
              </p>
            </div>
          </section>

          {/* #4 what is the cost of 1 month plan ? */}
          <section className="my-6">
            <div className="flex flex-row items-center cursor-pointer select-none" onClick={() => dispatch('faq_four')}>
              <img className="w-icon h-icon" src={`${window.location.origin}/icons/${faqFourOpen ? 'Icon awesome-plus-1' : 'Icon awesome-plus'}.png`} alt="" />
              <h2 className="font-pacifico text-pink-light text-2xl ml-2">How much do the subscriptions cost?</h2>
            </div>
            <div className="pl-16">
              <p className={`${faqFourOpen ? '' : 'hidden '}font-roboto text-gray pl-4 border-l-2 border-blue`}>
                The subscriptions cost £5 for 1 month, £12.50 for 3 months, £25 for 6 months, £50 for 1 year. All of this information is readily available in the <Link to="purchase"><u>purchase page.</u></Link>
              </p>
            </div>
          </section>

          {/* #5 Another very important question in FAQ ? */}
          <section className="my-6">
            <div className="flex flex-row items-center cursor-pointer select-none" onClick={() => dispatch('faq_five')}>
              <img className="w-icon h-icon" src={`${window.location.origin}/icons/${faqFiveOpen ? 'Icon awesome-plus-1' : 'Icon awesome-plus'}.png`} alt="" />
              <h2 className="font-pacifico text-pink-light text-2xl ml-2">Will Flash Betting be available on other platforms?</h2>
            </div>
            <div className="pl-16">
              <p className={`${faqFiveOpen ? '' : 'hidden '}font-roboto text-gray pl-4 border-l-2 border-blue`}>
                The software currently supports the two major operating systems (Windows {'&'} Mac). If there is enough demand, then it can be made available for Linux. There are no plans, however, to create a mobile version, as the device is too small
                to benefit from all of the visual information that the software makes use of. This may change in the future if enough demand is there.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
