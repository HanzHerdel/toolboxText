import axios from "axios";

/* Constants */
export const UPDATE_TEXT = "[PALINDROME] UPDATE TEXT";
export const ADD_TO_RESULTS = "[PALINDROME] ADD_TO_RESULTS";

const urlServer = "http://localhost:3001";
const endpoint = "/iecho";

/* Functions */

/**
 * update textToConvert variable
 * @param {String} text text input
 */
export function updateText(text) {
  return {
    type: UPDATE_TEXT,
    payload: text,
  };
}

/**
 * add result to results variable
 * @param {String} result result of convertion
 */
export function convertText(text = "") {
  let urlRequest = new URL(urlServer + endpoint);
  urlRequest.search = new URLSearchParams({ text }).toString();
  return async (dispatch) => {
    try {
      let response = await axios.get(urlRequest);
      dispatch({
        type: ADD_TO_RESULTS,
        payload: response.data,
      });
      return;
    } catch (error) {
      console.log("error: ", error);
      return { error };
    }
  };
}
