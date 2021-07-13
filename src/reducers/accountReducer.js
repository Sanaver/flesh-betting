export const initialState = {
  active: false,
  paymentMethod: null,
  subscriptionPlan: null,
  amountPerPeriod: (0).toFixed(2),
  activeFrom: null,
  activeUntil: null,
  invoices: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE':
      return { ...state, active: action.payload };
    case 'SET_PAYMENT_METHOD':
      return { ...state, paymentMethod: action.payload };
    case 'SET_SUBSCRIPTION_PLAN':
      return { ...state, subscriptionPlan: action.payload };
    case 'SET_AMOUNT':
      return { ...state, amountPerPeriod: action.payload };
    case 'SET_SUBSCRIPTION_START_DATE':
      return { ...state, activeFrom: action.payload };
    case 'SET_SUBSCRIPTION_END_DATE':
      return { ...state, activeUntil: action.payload };
    case 'SET_INVOICES':
      return { ...state, invoices: action.payload };
    default:
      return initialState;
  }
};
