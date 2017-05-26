import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/auth_actions';
import {Expire} from './expire';
import AlertBox from './alert_box'
class AllBooks extends Component{
  constructor(props) {
      super(props);
      this.props.fetchAllBooks();
        this.props.fetchUserBooks();

    }

    handleClick(book){

      this.props.requestBook(book);

    }
    renderButton(book){
        var isOwner=false;
        this.props.userBooks.currentBooks.map(userBook=>{
         if(userBook._id==book._id){
           isOwner=true;
         }


      })
      if(isOwner){


        return(
          <div></div>
         )

        }
        else{

          return(
            <button onClick={this.handleClick.bind(this,book)}
            className='card-button-request-trade btn'> <i className="fa fa-retweet"
             aria-hidden="true"></i></button>
           )

          }


    }
  renderBooks(){
    if(this.props.allBooks){

    return this.props.allBooks.map(book=>{


        return (

          <div className='searchBookListItem'>

              <div key={book.title}  className='card card-block'>
                {this.renderButton(book)}
                <div className='card-title'><p>{book.title}</p></div>
                <div className='card-image'><img src={book.image_url}></img></div>

            </div>

          </div>)
      } )
    }
  }

  render(){
    return (
      <div>
        <AlertBox />
        <div className='text-xs-left'>

        </div>
      <div className='text-xs-center main-page-text text-warning'>  <h1></h1></div>
      <div className='text-xs-center searchBookList'>
        {this.renderBooks()}
      </div>
    </div>)
  }


}
function mapStateToProps(state){

  return {
    authenticated:state.auth.authenticated,
    allBooks:state.auth.allBooks,
    userBooks:state.auth.userBooklist,
    message:state.auth.message
  };
}
export default connect(mapStateToProps,actions)(AllBooks);
