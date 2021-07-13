import React, { useReducer, useRef, useState } from 'react';
import classNames from 'classnames';
import { isEmail } from 'validator';
import { Link, useHistory } from 'react-router-dom';
//* Reducers
import { initialState, reducer } from '../../reducers/subscriptionReducer';
//* Components
import Footer from '../footer';
//* Stripe
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
//* Payment handler
import { executePayment } from '../../http/PaymentManager';
// import header
import Header from '../header';

const Subscriptionform = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState(false);
  const renewRef = useRef();
  const planRef = useRef();
  const termsRef = useRef();
  const paymentRef = useRef();
  const userDetailsRef = useRef();

  const stripe = useStripe();
  const elements = useElements();

  const { firstName, lastName, email, country, renew, plan, termsAccepted, paymentMethod } = state;

  const handlePurchase = async (e) => {
    e.preventDefault();

    let inputError = true;

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    if (!renew && !renew === false) {
      renewRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    } else if (!plan) {
      planRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    } else if (!termsAccepted) {
      termsRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    } else if (!paymentMethod) {
      paymentRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    } else if (!firstName || !lastName || !country || !isEmail(email)) {
      userDetailsRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      inputError = false;
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
      console.log(error, paymentMethod);

      if (!error) {
        // Call the API to send the payment method to complete the payment on the server
        const response = await executePayment(paymentMethod, email, firstName, lastName, country, renew, plan);

        const data = await response.json();

        if (data) {
          if (data.error) {
            history.push('/unsuccessful-payment', { params: { error: data.error } });
          } else {
            history.push('/successful-payment', { params: { ...data } });
          }
        }
      }
      setError(inputError);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-blue-dark py-10">
        <h1 className="font-pacifico xl:text-7xl lg:text-5xl md:text-3xl sm:md:text-3xl xs:text-xl xl:py-10 lg:py-10 md:pt-3 md:pb-0 sm:pt-3 sm:pb-0 xs:pt-3 xs:pb-0 text-pink-dark text-center">Subscription Form</h1>
        <div className="w-11/12 ml-auto mr-auto mt-4">
          <form onSubmit={handlePurchase} noValidate>
            <h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-medium lg:text-2xl text-gray">Select Subscription duration *</h2>

            <div className="ml-10 xs:mt-5 md:mt-10" ref={renewRef}>
              <input
                type="radio"
                id="renew-subscription"
                name="renewal"
                value="0"
                className="h-5 w-5 rounded-sm xl:h-7 xl:w-7 appearance-none border border-yellow-light checked:bg-green checked:border-gray"
                onChange={() => dispatch({ type: 'SET_SUBSCRIPTION_DURATION', payload: true })}
              />
              <label htmlFor="renew-subscription" className="ml-2 xl:text-4xl lg:text-2xl md:text-2xl sm:text-xl xs:text-lg mt-0 text-yellow-light">
                {' '}
                Renew Subscription
              </label>
              <br />
              <input
                type="radio"
                id="one-time-payment"
                name="renewal"
                value="1"
                className="h-5 w-5 rounded-sm xs:mt-5 md:mt-10 xl:h-7 xl:w-7 appearance-none border border-yellow-light checked:bg-green checked:border-gray"
                onChange={() => dispatch({ type: 'SET_SUBSCRIPTION_DURATION', payload: false })}
              />
              <label htmlFor="one-time-payment" className="ml-4 xl:text-4xl lg:text-2xl md:text-2xl sm:text-xl xs:text-lg mt-0 text-yellow-light">
                One - Time payment
              </label>
              <br />
            </div>

            <div className="border-b-2 border-pink-dark w-36 mt-8"></div>

            <h2 className="lg:my-12 md:my-8 sm:my-6 xs:my-6 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-medium lg:text-2xl text-gray">Select subscription plan *</h2>

            <div className="ml-10 xs:mt-5 md:mt-10" ref={planRef}>
              {/* 1 month subscription */}
              <input
                type="radio"
                id="monthly-subscription"
                name="subscription"
                value="1"
                className="h-5 w-5 rounded-2xl xl:h-7 xl:w-7 appearance-none border border-pink-light checked:bg-red-darker checked:border-gray"
                onChange={() => dispatch({ type: 'SET_SUBSCRIPTION_PLAN', payload: 'monthly' })}
              />
              <label htmlFor="monthly-subscription" className="ml-2 xl:text-4xl lg:text-2xl md:text-2xl sm:text-xl xs:text-lg mt-0 text-pink-light">
                {' '}
                Monthly Subscription
              </label>
              <br />
              <label htmlFor="monthly-subscription" className="ml-9 text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs relative md:top-3 sm:top-2 xs:top-1">
                £5.00 each month
              </label>
              <br /> <br />
              {/* 3 month subscription */}
              <input
                type="radio"
                id="quarterly-subscription"
                name="subscription"
                value="3"
                className="h-5 w-5 rounded-2xl xl:h-7 xl:w-7 appearance-none border border-pink-light checked:bg-red-darker checked:border-gray"
                onChange={() => dispatch({ type: 'SET_SUBSCRIPTION_PLAN', payload: 'quarterly' })}
              />
              <label htmlFor="quarterly-subscription" className="ml-2 xl:text-4xl lg:text-2xl md:text-2xl sm:text-xl xs:text-lg mt-0 text-pink-light">
                {' '}
                Quarterly Subscription
              </label>
              <br />
              <label htmlFor="quarterly-subscription" className="ml-9 relative md:top-3 sm:top-2 xs:top-1 text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs mt-10">
                £12.50 every 3 months
              </label>
              <br /> <br />
              {/* 6 month subscription */}
              <input
                type="radio"
                id="biannual-subscription"
                name="subscription"
                value="6"
                className="h-5 w-5 rounded-2xl xl:h-7 xl:w-7 appearance-none border border-pink-light checked:bg-red-darker checked:border-gray"
                onChange={() => dispatch({ type: 'SET_SUBSCRIPTION_PLAN', payload: 'biannually' })}
              />
              <label htmlFor="biannual-subscription" className="ml-3 xl:text-4xl lg:text-2xl md:text-2xl sm:text-xl xs:text-lg mt-0 text-pink-light">
                Biannually Subscription
              </label>
              <br />
              <label htmlFor="biannual-subscription" className="ml-9 relative md:top-3 sm:top-2 xs:top-1 text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs mt-10">
                £25.00 every 6 months
              </label>
              <br /> <br />
              {/* 1 year subscription */}
              <input
                type="radio"
                id="annual-subscription"
                name="subscription"
                value="12"
                className="h-5 w-5 rounded-2xl xl:h-7 xl:w-7 appearance-none border border-pink-light checked:bg-red-darker checked:border-gray"
                onChange={() => dispatch({ type: 'SET_SUBSCRIPTION_PLAN', payload: 'annually' })}
              />
              <label htmlFor="annual-subscription" className="ml-3 xl:text-4xl lg:text-2xl md:text-2xl sm:text-xl xs:text-lg mt-0 text-pink-light">
                Annually Subscription
              </label>
              <br />
              <label htmlFor="annual-subscription" className="ml-9 relative md:top-3 sm:top-2 xs:top-1 text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs mt-10">
                £50.00 each year
              </label>
              <br />
            </div>
            <div className="border-b-2 border-pink-dark w-36 mt-14"></div>

            <h2 className="lg:my-12 md:my-8 sm:my-6 xs:my-6 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-medium lg:text-2xl text-gray">I wish to pay by : *</h2>

            <div className="ml-10 xs:mt-5 md:mt-10" ref={paymentRef}>
              <input
                type="radio"
                id="credit-card-payment"
                name="payment"
                value="card"
                className="h-5 w-5 rounded-2xl xl:h-7 xl:w-7 appearance-none border border-pink-light checked:bg-red-darker checked:border-gray"
                onChange={(e) => dispatch({ type: 'SET_PAYMENT_METHOD', payload: e.target.value })}
              />
              <label htmlFor="credit-card-payment" className="ml-2 xl:text-4xl lg:text-2xl md:text-2xl sm:text-xl xs:text-lg mt-0 text-pink-light">
                {' '}
                Credit Card
              </label>
              <br /> <br />
              {/* <input type="radio" id="paypal-payment" name="payment" value="1" className="h-5 w-5 rounded-2xl xl:h-7 xl:w-7 appearance-none border border-pink-light checked:bg-red-darker checked:border-gray" />
              <label htmlFor="paypal-payment" className="ml-2 xl:text-4xl lg:text-2xl md:text-2xl sm:text-xl xs:text-lg mt-0 text-pink-light">
                PayPal
              </label>
              <br /> <br /> */}
            </div>
            <div className="border-b-2 border-pink-dark w-36 mt-8"></div>
            {/* First name */}
            <div id="user-details" className="grid grid-row grid-cols-5 gap2" ref={userDetailsRef}>
              <div className="xs:col-span-2 sm:col-span-1">
                <h2 className="lg:mt-12 md:mt-8 sm:mt-6 xs:mt-6 xl:mb-12 lg:mb-8 md:mb-3 sm:mb-4 xs:mb-0 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-medium lg:text-2xl text-gray">First Name :</h2>
              </div>
              <div className="xs:col-span-3 sm:col-span-4">
                <input
                  type="text"
                  name="firstname"
                  className={classNames(
                    'lg:mt-12 md:mt-8 sm:mt-6 xs:mt-6 xl:mb-12 lg:mb-8 md:mb-3 sm:mb-4 xs:mb-4 xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-8/12 xs:w-11/12 xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs px-4 py-2 border-2 rounded-lg bg-black-light font-roboto text-pink-dark placeholder-pink-dark focus:outline-none',
                    {
                      'border-error': error & !firstName,
                    },
                  )}
                  onChange={(e) => dispatch({ type: 'SET_FIRST_NAME', payload: e.target.value })}
                />
              </div>
              {/* Last name */}
              <div className="xs:col-span-2 sm:col-span-1">
                <h2 className="xl:mb-12 lg:mb-8 md:mb-3 sm:mb-4 xs:mb-4 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-medium lg:text-2xl text-gray">Last Name :</h2>
              </div>
              <div className="xs:col-span-3 sm:col-span-4">
                <input
                  type="text"
                  name="lastname"
                  className={classNames(
                    'xl:mb-12 lg:mb-8 md:mb-3 sm:mb-4 xs:mb-4 xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-8/12 xs:w-11/12 xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs px-4 py-2 border-2 rounded-lg bg-black-light font-roboto text-pink-dark placeholder-pink-dark focus:outline-none',
                    {
                      'border-error': error & !lastName,
                    },
                  )}
                  onChange={(e) => dispatch({ type: 'SET_LAST_NAME', payload: e.target.value })}
                />
              </div>
              {/* Email */}
              <div className="xs:col-span-2 sm:col-span-1">
                <h2 className="xl:mb-12 lg:mb-8 md:mb-3 sm:mb-4 xs:mb-4 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-medium lg:text-2xl text-gray">Email Address :</h2>
              </div>
              <div className="xs:col-span-3 sm:col-span-4">
                <input
                  type="email"
                  name="email"
                  className={classNames(
                    'xl:mb-12 lg:mb-8 md:mb-3 sm:mb-4 xs:mb-4 xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-8/12 xs:w-11/12 xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs px-4 py-2 border-2 rounded-lg bg-black-light font-roboto text-pink-dark placeholder-pink-dark focus:outline-none',
                    {
                      'border-error': error & !email,
                    },
                  )}
                  onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
                />
              </div>
              {/* Country */}
              <div className="xs:col-span-2 sm:col-span-1">
                <h2 className="xl:mb-12 lg:mb-8 md:mb-3 sm:mb-4 xs:mb-4 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-medium lg:text-2xl text-gray">Country :</h2>
              </div>
              <div className="xs:col-span-3 sm:col-span-4">
                <input
                  type="text"
                  className={classNames(
                    'xl:mb-12 lg:mb-8 md:mb-3 sm:mb-4 xs:mb-4 xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-8/12 xs:w-11/12 xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs px-4 py-2 border-2 rounded-lg bg-black-light font-roboto text-pink-dark placeholder-pink-dark focus:outline-none',
                    {
                      'border-error': error & !country,
                    },
                  )}
                  onChange={(e) => dispatch({ type: 'SET_COUNTRY', payload: e.target.value })}
                />
              </div>
            </div>
            <div className="border-b-2 border-pink-dark w-36 mt-8"></div>

            <div className="grid grid-row grid-cols-5 gap2">
              <div className="xs:col-span-2 sm:col-span-1">
                <h2 className="lg:mt-12 md:mt-8 sm:mt-6 xs:mt-6 xl:mb-12 lg:mb-8 md:mb-3 sm:mb-4 xs:mb-0 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-medium lg:text-2xl text-gray">Card Details :</h2>
              </div>
              <div className="xs:col-span-3 sm:col-span-4">
                <CardElement
                  id="card-payment"
                  className="lg:mt-12 md:mt-8 sm:mt-6 xs:mt-6 xl:mb-12 lg:mb-8 md:mb-3 sm:mb-4 xs:mb-4 xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-8/12 xs:w-11/12 xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs px-4 py-2 border-2 rounded-lg bg-black-light font-roboto text-pink-dark >input:text-pink placeholder-pink-dark focus:outline-none"
                  options={{
                    style: {
                      base: {
                        color: '#D4696B',
                        fontFamily: 'Roboto',
                      },
                    },
                  }}
                />
              </div>
            </div>
            <div className="border-b-2 border-pink-dark w-36 mt-8"></div>

            <div className="xs:ml-0 sm:ml-20 xs:mt-5 md:mt-10" ref={termsRef}>
              <input
                type="checkbox"
                id="payment-terms"
                name="terms"
                value="0"
                className="h-5 w-5 rounded-sm xl:h-7 xl:w-7 appearance-none border border-yellow-light checked:bg-green checked:border-gray"
                onChange={(e) => dispatch({ type: 'SET_TERMS_ACCEPTANCE', payload: e.target.value })}
              />
              <label htmlFor="payment-terms" className="ml-2 xl:text-4xl lg:text-2xl md:text-2xl sm:text-xl xs:text-lg mt-0 text-yellow-light">
                {' '}
                Accept Terms and Conditions
              </label>
              <br />
              <label htmlFor="payment-terms" className="ml-7 text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs mt-10 top-10">
                <span className="text-yellow-light hover:cursor-pointer">
                  {' '}
                  <Link to="/purchase"></Link>
                  <Link to="/terms" target="_blank" rel="noreferrer">
                    {' '}
                    Click Here{' '}
                  </Link>
                </span>{' '}
                to read the full Terms and Condition.
              </label>
              <br /> <br />
            </div>
            <div className="text-center xl:py-12 lg:py-8 md:py-8 sm:py-9 xs:py-4">
              <button type="submit" className="text-lg bg-green text-gray xl:px-28 xl:py-6 lg:px-20 lg:py-4 md:px-20 md:py-3 sm:px-20 sm:py-3 xs:px-14 xs:py-3 mt-4 lg:mt-0 rounded" disabled={!stripe}>
                Submit
              </button>
            </div>
            <div className="xs:w-11/12 text-center py-8 ml-auto mr-auto">
              <p className="text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs pb-4">
                If you have any problem you can find answers to most of the common questions in our
                <span className="text-yellow">
                  <a href="/faq"> FAQ Section.</a>
                </span>
                If you still can not find a solution, Please contact support{' '}
                <Link to="/contact">
                  <span className="text-yellow">here</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Subscriptionform;
