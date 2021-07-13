import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './index.css';
//* Components
import App from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Download from './components/download';
import FAQ from './components/faq';
import Terms from './components/terms';
import PrivacyPolicy from './components/privacy';
import Purchase from './components/purchase';
import Accountoverview from './components/accountoverview';
import Successfulpayment from './components/successfulpayment';
import Unsuccessfulpayment from './components/UnsuccessfulPayment';
import Subscriptionform from './components/subscriptionform';
//* Stripe
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
//* Constants
import { STRIPE_PUBLIC_KEY } from './constants';
//* Authentication
import { loggedIn } from './services/AuthenticationService';
//* Stripe
const stripeTestPromise = loadStripe(STRIPE_PUBLIC_KEY);

const PrivateRoute = ({ component: Component, ...rest }) => <Route {...rest} render={(props) => (loggedIn() === true ? <Component {...props} /> : <Redirect to="/" />)} />;

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripeTestPromise}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/download" exact component={Download} />
          <Route path="/faq" exact component={FAQ} />
          <Route path="/purchase" exact component={Purchase} />
          <Route path="/terms" exact component={Terms} />
          <Route path="/privacy" exact component={PrivacyPolicy} />
          <PrivateRoute path="/account" exact component={Accountoverview} />
          <PrivateRoute path="/successful-payment" exact component={Successfulpayment} />
          <PrivateRoute path="/unsuccessful-payment" exact component={Unsuccessfulpayment} />
          <PrivateRoute path="/subscription" exact component={Subscriptionform} />
        </Switch>
      </BrowserRouter>
    </Elements>
  </React.StrictMode>,
  document.getElementById('root'),
);
