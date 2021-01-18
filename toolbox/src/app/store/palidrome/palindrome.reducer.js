import * as Actions from "./palindrome.actions";

const initialState = {
  textToConvert: "",
  results: [],
};

const palindromeReducer = function (
  state = initialState,
  { payload, type, ...action }
) {
  switch (type) {
    case Actions.UPDATE_TEXT: {
      return { ...state, textToConvert: payload };
    }
    case Actions.ADD_TO_RESULTS: {
            const results = [
        { text: payload.text, palindrome: payload.palindrome },
        ...state.results,
      ];
      return {
        ...state,
        results,
      };
    }

    default: {
      return state;
    }
  }
};

export default palindromeReducer;
