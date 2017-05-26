import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import App from './components/app';
import reducers from './reducers';
import {Router, Route, browserHistory} from 'react-router';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Setting from './components/auth/setting';
import BookSearchEngine from './components/book_search_engine';
import MyBooks from './components/my_books';
import AllBooks from './components/all_books'
import requireAuth from './components/auth/require_auth';
import * as actions from './actions/auth_actions';
import {AUTH_USER,FETCH_USER_BOOKS} from './actions/types';
import Main from './components/main'

//hooking middleware is here
const createStoreWithMiddleware = applyMiddleware(ReduxThunk,ReduxPromise)(createStore);
const store=createStoreWithMiddleware(reducers);
const token=localStorage.getItem('token');
//if we have a token consider the user is signed in
if(token){
    //   we need to update applcation state
    store.dispatch({type:AUTH_USER})

}


ReactDOM.render(
  <Provider store={store}>
          <Router history={browserHistory}>
            <Route path='/main' component={Main}/ >
            <Route path="/signup" component={Signup}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/signout" component={Signout}/>
              <Route path='/' component={App} >
                <Route path='search' component={requireAuth(BookSearchEngine)}/ >

                <Route path="mybooks" component={requireAuth(MyBooks)}/>
                  <Route path="allbooks" component={requireAuth(AllBooks)}/>

                  <Route path="setting" component={requireAuth(Setting)}/>
            </Route>
          </Router>
  </Provider>
  , document.querySelector('.container'));
