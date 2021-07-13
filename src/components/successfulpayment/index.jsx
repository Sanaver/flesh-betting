import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
// import footer
import Footer from '../footer';
import Header from '../header';
const Successfulpayment = ({
  history: {
    location: { state },
  },
}) => {
  const history = useHistory();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [subscriptionTime, setSubscriptionTime] = useState(null);
  const [amount, setAmount] = useState(null);
  const ref = useRef();

  /**
   * Check the payment id here and fetch the details from the database to show payment info
   */
  useEffect(() => {
    if (!state || !state.params) {
      history.push('/');
    } else {
      const { firstName, lastName, subscriptionTime, amount } = state.params;
      setFirstName(firstName);
      setLastName(lastName);
      setSubscriptionTime(subscriptionTime);
      setAmount(amount);
    }
  }, [history, state]);

  return (
    <>
      <Header />
      <div className="bg-blue-dark py-10">
        <img src={`${window.location.origin}/images/green-tick.svg`} className="w-10 sm:w-12 lg:w-16 mr-auto ml-auto" alt="" />
        <h1 className="font-pacifico xl:text-7xl lg:text-5xl md:text-3xl sm:md:text-3xl xs:text-xl xl:py-10 lg:py-10 md:pt-3 md:pb-0 sm:pt-3 sm:pb-0 xs:pt-3 xs:pb-0 text-green text-center">Successful Payment</h1>
        <div className="w-11/12 ml-auto mr-auto ml-auto mt-4">
          <div ref={ref}>
            <h1 className="text-gray bg-silver shadow-2xl xl:text-3xl lg:text-lg md:text-base sm:text-base xs:text-base xl:py-5 py-4 rounded-t-lg pl-8"> Invoice Details</h1>
            <table className="p-10 w-full border-b-2 border-gray border-r-2 border-l-2">
              {/* table heading */}
              <tr className="ml-auto mr-auto bg-black-light border-b-2 border-gray">
                <td>
                  <p className="text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-orange">Name</p>
                </td>
                <td>
                  <p className="text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-orange">Subscription Type</p>
                </td>
                <td>
                  <p className="text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-orange">Date</p>
                </td>

                <td>
                  <p className="hidden sm:block text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-orange">Amount</p>
                </td>
                <td>
                  <p className="hidden sm:block text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-orange">Tax</p>
                </td>
                <td>
                  <p className="hidden sm:block text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-orange">Total Amount</p>
                </td>
              </tr>
              {/* table ended */}
              <tr className="ml-auto mr-auto bg-black-light border-b-2 border-gray">
                <td>
                  <p className="text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-gray">
                    {firstName} {lastName}
                  </p>
                </td>
                <td>
                  <p className="text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-gray">{subscriptionTime}</p>
                </td>
                <td>
                  <p className="text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-gray">{new Date().toLocaleDateString()}</p>
                </td>
                <td>
                  <p className="hidden sm:block text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-gray">£ {amount / 100}</p>
                </td>
                <td>
                  <p className="hidden sm:block text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-gray">£ 0</p>
                </td>
                <td>
                  <p className="hidden sm:block text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-gray">£ {amount / 100}</p>
                </td>
              </tr>
            </table>

            {/*  */}
            <div className="block sm:hidden">
              <table className="p-10 w-full border-b-2 border-gray border-r-2 border-l-2">
                <tr className="ml-auto mr-auto bg-black-light border-b-2 border-gray">
                  <td>
                    <p className="block sm:hidden text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-orange">Amount</p>
                  </td>
                  <td>
                    <p className="block sm:hidden text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-orange">Tax</p>
                  </td>
                  <td>
                    <p className="block sm:hidden text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 xs:-mr-6 text-orange">Total Amount</p>
                  </td>
                </tr>
                <tr className="ml-auto mr-auto bg-black-light border-b-2 border-gray">
                  <td>
                    <p className="block sm:hidden text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-gray">£ {amount / 100}</p>
                  </td>
                  <td>
                    <p className="block sm:hidden text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-gray">£ 0</p>
                  </td>
                  <td>
                    <p className="block sm:hidden text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-gray">£ {amount / 100}</p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="py-10 md:text-center sm:text-center xs:text-center">
            <button
              className="sans-serif text-lg bg-green ml-4 xl:ml-10 text-gray xl:px-20 xl:py-4 lg:px-16 lg:py-2 md:px-20 md:py-2 sm:px-20 sm:py-2 xs:px-14 xs:py-1 mt-4 lg:mt-0 rounded"
              onClick={useReactToPrint({
                content: () => ref.current,
              })}
            >
              Print
            </button>
          </div>
          <div className="xs:w-11/12 text-center ml-auto mr-auto">
            <p className="text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs pb-4">
              If you have any questions,{' '}
              <Link to="/contact">
                <span className="text-orange">contact us now.</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Successfulpayment;
