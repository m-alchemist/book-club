import axios from 'axios';
import {FETCH_SEARCH_RESULTS} from './types';

export function fetchBooks(bookTitle){

var request= axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&orderBy=relevance&maxResults=40&key=AIzaSyAYvdFJFmZ2tfuGJvvb1Y_CZegidJ1etQs`)
// console.log(request);
return {type:FETCH_SEARCH_RESULTS,
        payload:request}

}
