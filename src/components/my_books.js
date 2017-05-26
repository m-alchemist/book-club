import React,{Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/auth_actions';

class MyBooks extends Component{
  constructor(props) {
      super(props);
      this.props.fetchUserBooks();
    }


//all handle function for calling action creater
    handleClick(book,accepted){
      this.props.tradeBook({book,accepted});
    }
    handleCancel(book){
      this.props.cancelRequest({book});
    }
    handleRemoveBook(book){
        this.props.removeBook({book});
    }
    renderButton(book,incomingRequestSection){
      if(book && book.requested){

        if(book.requested.requested &&incomingRequestSection)
        return(
          <span className='table-buttons'>

          <button onClick={this.handleClick.bind(this,book,true)}  className='btn-primary btn'>
          <i className="fa fa-check" aria-hidden="true"></i></button>
          <button onClick={this.handleClick.bind(this,book,false)}  className='btn-danger btn'>
          <i className="fa fa-times" aria-hidden="true"></i></button>


        </span>)
      }
    }
//all button rendering function (given the section it will know whether to render or not)
    renderCancelRequestButton(book,outgoingRequestSection){
      if(outgoingRequestSection){
        return(
          <span className='table-buttons'>
          <button onClick={this.handleCancel.bind(this,book)}  className='btn-danger btn'>
          <i className="fa fa-times" aria-hidden="true"></i></button>
        </span>)
      }
    }

    renderRemoveBookButton(book,mybooksSection){
      if(mybooksSection){
        return(
          <span className='table-buttons'>
          <button onClick={this.handleRemoveBook.bind(this,book)} className='btn-danger btn'>
          <i className="fa fa-times" aria-hidden="true"></i></button>
        </span>)
      }
    }
    //rendering requester info
    renderRequesterInfo(book,incomingRequestSection){
      if(book && book.requested)
        if(book.requested.requested &&incomingRequestSection)
      return(
        <div className='text-xs-left'>
          <p className='text-primary'>  Name:
            <span className='text-black'>  {book.requested.requesters.name}</span>
            </p>
            <p className='text-primary'>  Email:
              <span className='text-black'>  {book.requested.requesters.email}</span>
              </p>

      </div>
    )
    }
  //function for rendering book lists. it is given the section which then passed to the render button  functions.
  renderBooks(prop,incomingRequestSection,outgoingRequestSection,mybooksSection){
    var section=incomingRequestSection;
    if(prop){
    return prop.map(book=>{

        if(incomingRequestSection && !book.requested.requested){
          return (<div></div>)
        }
        return (

          <div className=''>
              <li key={book.title}  className='list-group-item' >

                <p className='table-title'> <img className='table-image' src={book.image_url}></img>
                  {book.title}
                   {this.renderButton(book,section)}
                   {this.renderCancelRequestButton(book,outgoingRequestSection)}
                   {this.renderRequesterInfo(book,incomingRequestSection)}
                   {this.renderRemoveBookButton(book,mybooksSection)}

                   </p>


            </li>

          </div>)
      } )
    }
  }

  render(){
    return (<div>

      <div className='my-books-titles'><h3>Pending Incoming Requests:</h3></div>
      <ul className='list-group'>
          {this.renderBooks(this.props.currentBooks,true,false,false)}
        </ul>
        <div className='my-books-titles'><h3>Pending Outging Requests:</h3></div>
        <ul className='list-group'>
            {this.renderBooks(this.props.outgoingRequests,false,true,false)}
          </ul>
      <div className='my-books-titles'><h3>My Books: </h3></div>
        <ul className='list-group'>
        {this.renderBooks(this.props.currentBooks,false,false,true)}
        </ul>
        <div className='my-books-titles'><h3>recently Traded:</h3></div>
        <ul className='list-group'>
          {this.renderBooks(this.props.recentlyTraded,false,false,false)}
          </ul>

      </div>)
  }


}
function mapStateToProps(state){

  return {
    authenticated:state.auth.authenticated,
    currentBooks:state.auth.userBooklist.currentBooks,
    recentlyTraded:state.auth.userBooklist.recentlyTraded.slice(0,5),
    outgoingRequests: state.auth.userBooklist.pendingRequests


  };
}
export default connect(mapStateToProps,actions)(MyBooks);
