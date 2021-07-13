export const initialState = {
  faqOneOpen: false,
  faqTwoOpen: false,
  faqThreeOpen: false,
  faqFourOpen: false,
  faqFiveOpen: false,
};

export const reducer = (state, action) => {
  switch (action) {
    case 'faq_one':
      return { ...state, faqOneOpen: !state.faqOneOpen };
    case 'faq_two':
      return { ...state, faqTwoOpen: !state.faqTwoOpen };
    case 'faq_three':
      return { ...state, faqThreeOpen: !state.faqThreeOpen };
    case 'faq_four':
      return { ...state, faqFourOpen: !state.faqFourOpen };
    case 'faq_five':
      return { ...state, faqFiveOpen: !state.faqFiveOpen };
    default:
      return initialState;
  }
};
