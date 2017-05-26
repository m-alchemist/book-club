import {AUTH_USER,UNAUTH_USER, AUTH_ERROR,FETCH_MESSAGE,FETCH_USER_BOOKS, FETCH_ALL_BOOKS,FETCH_USER,CLEAR_MESSAGE} from '../actions/types';
export default function(state={},action){

  switch(action.type){

    case AUTH_ERROR:
      return {...state, error:action.payload  }
    case AUTH_USER:
      return {...state, error:"", authenticated:true ,allBooks:[],userBooklist:{currentBooks:[],recentlyTraded:[],requestedBooks:[]} };

    case UNAUTH_USER:
      return {...state,authenticated:false  };
    case FETCH_USER:

      return{...state,userData: action.payload.userData};
    case FETCH_MESSAGE:

      return{...state,message: action.payload};
      case FETCH_USER_BOOKS:

        return {...state,userBooklist:action.payload };
      case FETCH_ALL_BOOKS:
      console.log(action.payload.books);
      return {...state,allBooks:action.payload.books };

      case CLEAR_MESSAGE:
        return{...state,message: null};

    default:
      return state;
  }


}
