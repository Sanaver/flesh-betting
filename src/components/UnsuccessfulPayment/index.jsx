import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import footer
import Footer from '../footer';
import Header from '../header';

const Unsuccessfulpayment = ({
  history: {
    location: { state },
  },
}) => {
  const history = useHistory();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!state || !state.params) {
      history.push('/');
    } else {
      const { error } = state.params;
      setError(error);
    }
  }, [history, state]);

  const handleReturn = () => {
    history.push('/account');
  };

  return (
    <>
      <Header />
      <div className="bg-blue-dark py-10">
        <img src={`${window.location.origin}/images/red-cross.svg`} className="w-10 sm:w-12 lg:w-16 mr-auto ml-auto" alt="" />
        <h1 className="font-pacifico xl:text-7xl lg:text-5xl md:text-3xl sm:md:text-3xl xs:text-xl xl:py-10 lg:py-10 md:pt-3 md:pb-0 sm:pt-3 sm:pb-0 xs:pt-3 xs:pb-0 text-red-darker text-center">Unsuccessful Payment</h1>
        <div className="w-11/12 ml-auto mr-auto ml-auto mt-4">
          <p className="text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs pb-4">{error}</p>
          <div className="py-10 md:text-center sm:text-center xs:text-center">
            <button className="sans-serif text-lg bg-green ml-4 xl:ml-10 text-gray xl:px-20 xl:py-4 lg:px-16 lg:py-2 md:px-20 md:py-2 sm:px-20 sm:py-2 xs:px-14 xs:py-1 mt-4 lg:mt-0 rounded" onClick={handleReturn}>Return</button>
          </div>
          <div className="xs:w-11/12 text-center ml-auto mr-auto">
            <p className="text-gray text-center xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs pb-4">
              If you have any questions,
              {' '}
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

export default Unsuccessfulpayment;
