import { FLASH_BETTING_API_URI } from '../constants';

import { getToken } from '../services/AuthenticationService';

export const getCustomerDetails = async () => {
  const response = await fetch(`${FLASH_BETTING_API_URI}get-customer-details`, {
    method: 'GET',
    headers: {
      'Authorization': getToken(),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  return response;
};

