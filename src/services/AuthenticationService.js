import decode from 'jwt-decode';
import { FLASH_BETTING_API_URI } from '../constants';

export const login = async (vendorClientId, user) => {
  const data = { vendorClientId, user };
  const response = await fetch(`${FLASH_BETTING_API_URI}login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const loggedIn = () => {
  const token = getToken();
  // token exists && is not expired
  return !!token && !isTokenExpired(token);
};

export const isTokenExpired = (token) => {
  try {
    const decoded = decode(token);
    // Checking if token is expired.
    return decoded.exp < Date.now() / 1000;
  } catch (err) {
    return false;
  }
};

export const setToken = (idToken) => {
  localStorage.setItem('id_token', idToken);
};

export const getToken = () => {
  return localStorage.getItem('id_token');
};

export const setUser = (user) => {
  localStorage.setItem('user', user);
};

export const getUser = (user) => {
  return localStorage.getItem('user');
};

export const logout = () => {
  localStorage.removeItem('id_token');
  localStorage.removeItem('user');
};
