import React, { useState } from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import _, { isEmpty } from 'lodash';
import { isNumeric } from 'validator';
import { Link } from 'react-router-dom';
import Footer from '../footer';
//* Authentication
import { login, setToken, setUser } from '../../services/AuthenticationService';
// import header
import Header from '../header';
const Purchase = () => {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [clientId, setClientId] = useState(null);
  const [username, setUsername] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate the clientId / user here
    if (isEmpty(clientId) || !isNumeric(clientId)) {
      setError('Invalid client Id. Check your dashboard in Flash Betting to locate your id. It is a numeric value.');
    } else if (isEmpty(username)) {
      setError('You must enter the BetFair username / email that you registered with Flash Betting with');
    } else {
      const response = await login(clientId, username);

      if (response.ok) {
        const { error, token } = await response.json();
        if (!error && token) {
          setError('');
          setToken(token);
          setUser(username);

          // Redirect to payment page if validated successfully
          history.push('/account');
        } else {
          setError(error);
        }
      }
    }
  };

  return (
    <>
      <Header />
      <div className="bg-blue-dark">
        <h1 className="font-pacifico xl:text-7xl lg:text-5xl md:text-3xl sm:md:text-3xl xs:text-xl xl:py-4 lg:py-3 md:pt-3 md:pb-0 sm:pt-3 sm:pb-0 xs:pt-3 xs:pb-0 text-orange text-center">Flash Betting</h1>
        <p className="text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-2">We have some of the cheapest prices on the market. We don't compromise on quality either. We overdeliver for a cheaper price.</p>
        <div className="items-center flex justify-center">
          <table className="p-10 xl:w-5/12 lg:w-5/12 md:w-6/12 sm:w-6/12 xs:w-8/12 bg-black-light rounded font-bold">
            <tbody>
              <tr className="py-3 border-b border-white">
                <td className="text-yellow xl:text-3xl lg:text-lg md:text-base sm:text-base xs:text-base py-3 xl:pl-16 lg:pl-16 md:pl-12 md:pl-8 sm:pl-4 xs:pl-4 sm:pl-4">1 Month Access</td>
                <td className="text-gray">£ 5.00</td>
              </tr>
              <tr className="border-b border-white">
                <td className="text-yellow xl:text-3xl lg:text-lg md:text-base sm:text-base xs:text-base py-3 xl:pl-16 lg:pl-16 md:pl-12 md:pl-8 sm:pl-4 xs:pl-4 sm:pl-4">3 Months Access</td>
                <td className="text-gray">£ 12.50</td>
              </tr>
              <tr className="border-b border-white">
                <td className="text-yellow xl:text-3xl lg:text-lg md:text-base sm:text-base xs:text-base py-3 xl:pl-16 lg:pl-16 md:pl-12 md:pl-8 sm:pl-4 xs:pl-4 sm:pl-4">6 Months Access</td>
                <td className="text-gray">£ 25.00</td>
              </tr>
              <tr>
                <td className="text-yellow xl:text-3xl lg:text-lg md:text-base sm:text-base xs:text-base py-3 xl:pl-16 lg:pl-16 md:pl-12 md:pl-8 sm:pl-4 xs:pl-4 sm:pl-4">1 Year Access</td>
                <td className="text-gray">£ 50.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="xs:w-8/12 text-center ml-auto mr-auto">
          <p className="text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs pt-6">To purchase time for your FlashBetting account please login with yours details below</p>
        </div>
        <form noValidate onSubmit={handleLogin}>
          <div className="flex items-center justify-center flex-col">
            <h1 className="font-pacifico text-green xl:text-7xl lg:text-5xl md:text-3xl sm:md:text-3xl xs:text-2xl xl:pb-10 xl:pt-16 lg:py-3 md:pt-3 md:pb-0 sm:pt-2 sm:pb-2 xs:pt-2 xs:pb-0 text-center">Login</h1>
            <p className="text-red-error text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs pt-6">{error}</p>
            <input
              type="text"
              placeholder="Client Id"
              className={classNames(
                'm-3 xl:w-4/12 lg:w-4/12 md:w-4/12 sm:w-8/12 xs:w-8/12 xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs px-4 py-2 border-2 rounded-3xl bg-transparent font-roboto text-gray-medium placeholder-gray-medium focus:outline-none',
                {
                  'border-error': error && (_.isEmpty(clientId) || !isNumeric(clientId)),
                },
              )}
              onChange={(e) => setClientId(e.target.value)}
            />
            <input
              type="text"
              placeholder="BetFair Username"
              className={classNames(
                'm-3 xl:w-4/12 lg:w-4/12 md:w-4/12 sm:w-8/12 xs:w-8/12 xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs px-4 py-2 border-2 rounded-3xl bg-transparent font-roboto text-gray-medium placeholder-gray-medium focus:outline-none',
                {
                  'border-error': error && !username,
                },
              )}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="text-center xl:py-12 lg:py-8 md:py-8 sm:py-9 xs:py-4">
            <button type="submit" className="font-pacifico text-lg bg-red-dark text-gray xl:px-28 xl:py-4 lg:px-20 lg:py-2 md:px-20 md:py-2 sm:px-20 sm:py-2 xs:px-14 xs:py-1 mt-4 lg:mt-0 rounded">
              login
            </button>
          </div>
        </form>
        <div className="xs:w-8/12 text-center ml-auto mr-auto">
          <p className="text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs pb-4 text-orange">
            “You can find your client ID within the Flash Betting software in the Home View. You must have registered your BetFair account with Flash Betting in order to access this.
          </p>
        </div>
        <div className="xs:w-11/12 text-center ml-auto mr-auto">
          <p className="text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs pb-4">
            If you have any problem you can find answers to most of the common questions in our
            <span className="text-yellow">
              <a href="/faq"> FAQ Section.</a>
            </span>{' '}
            If you still can not find a solution, Please contact support{' '}
            <Link to="/contact">
              <span className="text-yellow">here</span>
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Purchase;
