

import { getToken } from '../services/AuthenticationService';
import { FLASH_BETTING_API_URI } from '../constants';

export const executePayment = async (id, email, firstName, lastName, country, renew, subscriptionTime) => {
  const data = { id, firstName, lastName, email, country, renew, subscriptionTime };
  const response = await fetch(`${FLASH_BETTING_API_URI}subscription-payment`, {
    method: 'POST',
    headers: {
      'Authorization': getToken(),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  return response;
};
