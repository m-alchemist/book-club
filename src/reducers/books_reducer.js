import {FETCH_SEARCH_RESULTS} from '../actions/types';

export default function(state=[], action){
  switch(action.type){
    case FETCH_SEARCH_RESULTS:
    
      return action.payload.data.items

   default:
      return state;
  }


}
