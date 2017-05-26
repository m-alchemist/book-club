import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import SearchBooksList from '../containers/search_books_list'
import AlertBox from './alert_box';

export default class BookSearchEngine extends Component {
  render() {
    return (
      <div className='text-xs-center'>

        <AlertBox />

        <div className='search-title-main text-xs-center'>
          
          </div>
        <SearchBar />
        <SearchBooksList />
      </div>
    );
  }
}
