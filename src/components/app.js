import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchBar from '../containers/search_bar';
import SearchBooksList from '../containers/search_books_list'
import Header from './header';
import AllBooks from './all_books'
import {browserHistory} from 'react-router';
class App extends Component {
  componentWillMount(){
    if(this.props.authenticated){
      
    browserHistory.push('/allbooks')

  }
  else
    {
      browserHistory.push('/main')}



  }
  render() {
    return (
      <div>
      <div className='text-xs-center'>


      <div className='header-top text-xs-right'>
        <Header />
        <div className='header-title '><h3> <i className="fa fa-book" aria-hidden="true"></i> BookClub</h3></div>
       </div>

      {this.props.children}

      </div>

      </div>
    );
  }
}
function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}




export default  connect(mapStateToProps)(App);
