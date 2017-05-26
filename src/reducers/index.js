import { combineReducers } from 'redux';
import searchBookReducer from './books_reducer';
import {reducer} from 'redux-form';
import authReducer from './auth_reducer';
const rootReducer = combineReducers({
  searchBooksList:searchBookReducer,
  form:reducer,
  auth: authReducer
});

export default rootReducer;
