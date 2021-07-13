export const initialState = {
  firstName: null,
  lastName: null,
  email: null,
  country: null,
  renew: null,
  plan: null,
  paymentMethod: null,
  termsAccepted: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FIRST_NAME':
      return { ...state, firstName: action.payload };
    case 'SET_LAST_NAME':
      return { ...state, lastName: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_COUNTRY':
      return { ...state, country: action.payload };
    case 'SET_SUBSCRIPTION_DURATION':
      return { ...state, renew: action.payload };
    case 'SET_SUBSCRIPTION_PLAN':
      return { ...state, plan: action.payload };
    case 'SET_PAYMENT_METHOD':
      return { ...state, paymentMethod: action.payload };
    case 'SET_TERMS_ACCEPTANCE':
      return { ...state, termsAccepted: action.payload };
    default:
      return initialState;
  }
};
