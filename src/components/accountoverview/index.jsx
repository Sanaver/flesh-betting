import { isNumeric } from 'validator';
import React, { useEffect, useReducer } from 'react';
import uuid from 'react-uuid';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
//* Components
import Header from '../header';
import Footer from '../footer';
import { getCustomerDetails } from '../../http/CustomerHelper';
import { logout } from '../../services/AuthenticationService';
//* Reducers
import { initialState, reducer } from '../../reducers/accountReducer';

const AccountOverview = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState);

  const { active, paymentMethod, subscriptionPlan, amountPerPeriod, activeFrom, activeUntil, invoices } = state;

  useEffect(() => {
    (async () => {
      const response = await getCustomerDetails();

      if (response.status === 401) {
        logout();
        history.push('/');
      } else {
        const { error, active, paymentMethod, subscriptionPlan, amountPerPeriod, activeFrom, activeUntil, invoices } = await response.json();

        if (!error) {
          //* set response data here
          dispatch({ type: 'SET_ACTIVE', payload: active });
          dispatch({ type: 'SET_PAYMENT_METHOD', payload: paymentMethod });
          dispatch({ type: 'SET_SUBSCRIPTION_PLAN', payload: subscriptionPlan });
          dispatch({ type: 'SET_AMOUNT', payload: typeof amountPerPeriod === 'number' ? `£${(amountPerPeriod / 100).toFixed(2)}` : amountPerPeriod });
          dispatch({ type: 'SET_SUBSCRIPTION_START_DATE', payload: typeof activeFrom === 'number' || isNumeric(activeFrom) ? new Date(activeFrom * 1000).toLocaleDateString() : activeFrom });
          dispatch({ type: 'SET_SUBSCRIPTION_END_DATE', payload: typeof activeUntil === 'number' || isNumeric(activeUntil) ? new Date(activeUntil * 1000).toLocaleDateString() : activeUntil });
          dispatch({ type: 'SET_INVOICES', payload: invoices });
        }
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-blue-dark pb-7">
        <h1 className="font-pacifico xl:text-7xl lg:text-5xl md:text-3xl sm:md:text-3xl xs:text-xl xl:py-4 lg:py-3 md:pt-3 md:pb-0 sm:pt-3 sm:pb-0 xs:pt-3 xs:pb-0 text-red-darker text-center">Account Overview</h1>
        <div className="w-11/12 ml-auto mr-auto">
          <div className="grid grid-cols-3 gap-4">
            <div className="xl:col-span-2 lg:col-span-2 md:col-span-3 sm:col-span-3 xs:col-span-3">
              {/* PREMIUM table start */}
              <table className="p-10 w-full bg-black-light">
                <tr>
                  <td className="text-gray bg-silver shadow-2xl xl:text-3xl lg:text-lg md:text-base sm:text-base xs:text-base xl:pb-5 text-center">
                    {' '}
                    <h1> </h1>{' '}
                    <span>
                      {' '}
                      <img src={`${window.location.origin}/images/Icon awesome-crown.svg`} className="w-5 xl:w-10 lg:ml-6 xl:ml-5 md:ml-32 sm:ml-20 xs:ml-8 relative lg:top-3 xl:top-6 md:top-3 sm:top-3 xs:top-3" alt="premium" />
                    </span>
                    <span className="relative -top-2"> PREMIUM </span>
                  </td>
                  <td className="text-gray bg-silver shadow-2xl xl:text-3xl lg:text-lg md:text-base sm:text-base xs:text-base xl:py-5 py-3 text-center">Subscription start</td>
                  <td className="hidden sm:block text-gray bg-silver shadow-2xl xl:text-3xl lg:text-lg md:text-base sm:text-base xs:text-base xl:py-7 py-3 text-center">Next Invoice Date</td>
                </tr>
                <tr>
                  <td>
                    <div className="text-center xl:py-12 lg:py-8 md:py-8 sm:py-9 xs:py-4 bg-black-light cursor-context-menu">
                      <button
                        className={classNames('sans-serif text-lg bg-red-dark text-gray xl:px-10 xl:py-4 lg:px-4 lg:py-2 md:px-20 md:py-2 sm:px-20 sm:py-2 xs:px-14 xs:py-1 mt-4 lg:mt-0 rounded', {
                          'bg-green': active,
                          'bg-red-dark': !active,
                        })}
                      >
                        {active ? 'Active' : 'Inactive'}
                      </button>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <p className="text-center xl:text-3xl lg:text-lg md:text-sm sm:text-sm xs:text-xs pt-2 pb-4 text-orange-light">{activeFrom}</p>{' '}
                  </td>
                  <td>
                    {' '}
                    <p className="hidden sm:block text-center xl:text-3xl lg:text-lg md:text-sm sm:text-sm xs:text-xs pt-2 pb-4 text-orange-light">{activeUntil}</p>{' '}
                  </td>
                </tr>
                <tr></tr>
              </table>

              <table className="p-10 w-full bg-black-light">
                <tr>
                  {' '}
                  <td className="block sm:hidden text-gray bg-silver shadow-2xl xl:text-2xl lg:text-lg md:text-base sm:text-base xs:text-base xl:py-5 py-3 text-center">Next Invoice Date</td>
                </tr>
                <tr>
                  <td className="py-2">
                    {' '}
                    <p className="block sm:hidden pt-3 text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs pb-4 text-orange-light">3 / 01 / 2021</p>{' '}
                  </td>
                </tr>
              </table>
            </div>
            {/* PREMIUM table end */}

            {/*  Renew Subscription table started */}
            <div className="xl:col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 xs:col-span-3">
              <table className="p-10 w-full bg-black-light rounded">
                <tr>
                  <td className="text-gray bg-silver shadow-2xl xl:text-3xl lg:text-lg md:text-base sm:text-base xs:text-base xl:py-7 py-3 text-center">Renew Subscription</td>
                </tr>
                <tr>
                  {' '}
                  <p className="text-yellow-light text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-2 xl:py-2 pb-1">Do you want to renew your subscription</p>
                </tr>
                <tr>
                  <div className="xl:py-8 lg:py-5 md:py-8 sm:py-9 xs:py-4 bg-black-light md:text-center sm:text-center xs:text-center">
                    <button className="sans-serif text-lg mb-2 bg-green ml-4 lg:ml-0 xl:ml-0 text-gray xl:px-20 xl:py-4 lg:px-16 lg:py-2 md:px-20 md:py-2 sm:px-20 sm:py-2 xs:px-14 xs:py-1 mt-4 lg:mt-0 rounded">YES</button>
                    <button className="sans-serif text-lg bg-red-dark ml-4 xl:ml-10 text-gray xl:px-20 xl:py-4 lg:px-16 lg:py-2 md:px-20 md:py-2 sm:px-20 sm:py-2 xs:px-14 xs:py-1 mt-4 lg:mt-0 rounded">NO</button>
                  </div>
                </tr>
              </table>
            </div>
            {/*  Renew Subscription table ended */}
          </div>
        </div>

        {/* break down table start */}
        <div className="w-11/12 ml-auto mr-auto ml-auto mt-4">
          <h1 className="text-gray bg-silver shadow-2xl xl:text-3xl lg:text-lg md:text-base sm:text-base xs:text-base xl:py-5 py-4 rounded-t-lg pl-8"> Breakdown Of Past Payments</h1>
          <table className="p-10 w-full border-b-2 border-gray border-r-2 border-l-2">
            {/* table heading */}
            <tr className="ml-auto mr-auto bg-black-light border-b-2 border-gray">
              <td>
                <p className="text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-orange">Name</p>
              </td>
              <td>
                <p className="text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-orange">Plan</p>
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
            {invoices.map(({ customerName, amountPaid, created }) => (
              <tr className="ml-auto mr-auto bg-black-light border-b-2 border-gray">
                <td>
                  <p className="text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-gray">{customerName}</p>
                </td>
                <td>
                  <p className="text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-gray">{subscriptionPlan}</p>
                </td>
                <td>
                  <p className="text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-gray">{new Date(created * 1000).toLocaleDateString()}</p>
                </td>
                <td>
                  <p className="hidden sm:block text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-gray">{`£${amountPaid}`}</p>
                </td>
                <td>
                  <p className="hidden sm:block text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-gray">{'£0.00'}</p>
                </td>
                <td>
                  <p className="hidden sm:block text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-gray">{`£${amountPaid}`}</p>
                </td>
              </tr>
            ))}
          </table>

          {/*  */}
          <div className="block sm:hidden">
            <table className="p-10 w-full border-b-2 border-gray border-r-2 border-l-2">
              {invoices.map(({ amountPaid }) => (
                <tr className="ml-auto mr-auto bg-black-light border-b-2 border-gray" key={`payment-${uuid()}`}>
                  <td>
                    <p className="block sm:hidden text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-gray">{`£${amountPaid}`}</p>
                  </td>
                  <td>
                    <p className="block sm:hidden text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-gray">{'£0.00'}</p>
                  </td>
                  <td>
                    <p className="block sm:hidden text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-4 text-gray">{`£${amountPaid}`}</p>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
        {/* break down table ended */}
        <div className="w-11/12 ml-auto mr-auto mt-8">
          <div className="grid grid-cols-5 gap-4">
            <div className="lg:col-span-2 xs:col-span-5">
              <h1 className="text-gray bg-silver shadow-2xl xl:text-3xl lg:text-lg md:text-base sm:text-base xs:text-base xl:py-5 lg:py-2 xs:py-4 rounded-t-lg pl-8"> Subscription plan Details</h1>
              <table className="p-10 w-full bg-black-light rounded">
                <tr>
                  <td>
                    <p className="text-orange-light ml-8 xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-2">Payment Method :</p>
                  </td>
                  <td>
                    <div className="lg:pb-3 lg:pt-5 xs:pt-5">
                      <button className="sans-serif text-orange-light text-lg bg-blue-dark ml-4 lg:ml-0 xl:ml-0 text-gray w-40 xl:w-48 xl:py-4 lg:py-2 md:py-2 sm:py-2 xs:py-1 my-1 lg:mt-0 rounded">{paymentMethod}</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-orange-light ml-8 xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-2">Subscription Plan :</p>
                  </td>
                  <td>
                    <div className="lg:pb-3">
                      <button className="sans-serif text-orange-light text-lg bg-blue-dark ml-4 lg:ml-0 xl:ml-0 text-gray w-40 xl:w-48 xl:py-4 lg:py-2 md:py-2 sm:py-2 xs:py-1 mt-4 lg:mt-0 rounded">{subscriptionPlan}</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-orange-light ml-8 xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-2">Amount per Month :</p>
                  </td>
                  <td>
                    <div className="lg:py-3">
                      <button className="sans-serif text-orange-light text-lg bg-blue-dark ml-4 lg:ml-0 xl:ml-0 text-gray w-40 xl:w-48 xl:py-4 lg:py-2 md:py-2 sm:py-2 xs:py-1 mt-4 lg:mt-0 rounded">{amountPerPeriod}</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-orange-light ml-8 xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs py-2">Active from :</p>
                  </td>
                  <td>
                    <div className="lg:py-3 xs:pb-4">
                      <button className="sans-serif text-orange-light text-lg bg-blue-dark ml-4 lg:ml-0 xl:ml-0 text-gray w-40 xl:w-48 xl:py-4 lg:py-2 md:py-2 sm:py-2 xs:py-1 mt-4 lg:mt-0 rounded">{activeFrom}</button>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* added footer */}
      <Footer />
    </>
  );
};

export default AccountOverview;
