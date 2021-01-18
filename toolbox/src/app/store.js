import { createStore } from 'redux'
import palindromeReducer from './store/palidrome/palindrome.reducer'

import {applyMiddleware, compose} from 'redux';

import thunk from 'redux-thunk';

const enhancer = compose(
  applyMiddleware(thunk)
);
const store = createStore(palindromeReducer,enhancer)

export default store;