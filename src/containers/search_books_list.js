import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/auth_actions';


class SearchBooksList extends Component{
  handleClick(book){

    var bookObj={
      title:book.volumeInfo.title,
      image_url:book.volumeInfo.imageLinks.thumbnail
    }
    this.props.addBook(bookObj);
  }

  renderList(){
    if(this.props.searchBooksList.length>0){
    return this.props.searchBooksList.map(book=>{

      
      if(book.volumeInfo.imageLinks){
        return (

          <div className='searchBookListItem'>

              <div key={book.id} onClick={this.handleClick.bind(this,book)} className='card card-block'>
                <div className='card-title'><p>{book.volumeInfo.title}</p></div>
                <div className='card-image'><img src={book.volumeInfo.imageLinks.thumbnail}></img></div>
            </div>

          </div>)
        }
      } )
    }
  }
  render(){
    return (<div className='text-xs-center searchBookList'>
      {this.renderList()}
      </div>)
  }


}

function mapStateToProps(state){

  return{
    searchBooksList:state.searchBooksList
  }
}
export default connect(mapStateToProps,actions)(SearchBooksList)
