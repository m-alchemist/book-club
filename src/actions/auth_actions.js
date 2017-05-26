import axios from 'axios';
import {AUTH_USER,UNAUTH_USER,AUTH_ERROR,FETCH_MESSAGE,FETCH_USER_BOOKS,FETCH_ALL_BOOKS,FETCH_USER,CLEAR_MESSAGE} from './types';
import {browserHistory} from 'react-router';

const ROOT_URL='https://book-club-server.herokuapp.com';


export function signinUser({email,password}){
  return function(dispatch){

      //Submit email/password to server

    axios.post(`${ROOT_URL}/signin`,{email,password})
    .then(response=>{
      //if request is good
      //updat state to indicate user is authenticated
      //save the jwt token
      //-redirect to the route '/feature'
      dispatch({type:AUTH_USER})

      localStorage.setItem('token',response.data.token)
      browserHistory.push('/allbooks')

    })
    .catch(()=>{

        //if request
        //show error to user

        dispatch(authError('Incorrect email or password'))

    })


  }

}

export function signupUser({name,email,password,city,state}){
  return function(dispatch){
    console.log({name,email,password,city,state});
      //Submit email/password to server

    axios.post(`${ROOT_URL}/signup`,{name,email,password,city,state})
    .then(response=>{
      dispatch({type:AUTH_USER})
      localStorage.setItem('token',response.data.token)
      browserHistory.push('/allbooks')
    })
    .catch(response=>  dispatch(authError(' Email Exists')))



  }

}
export function updateUserInfo({name,city,state}){
  return function(dispatch){

      //Submit email/password to server

    axios.post(`${ROOT_URL}/update`,{name,city,state},
      {headers:{authorization:localStorage.getItem('token')}})
    .then(response=>{
      console.log(response);
      dispatch({type:FETCH_MESSAGE,
                payload:response.data})

    })




  }

}
export function changePassword({password}){
  return function(dispatch){

      //Submit email/password to server

    axios.post(`${ROOT_URL}/changepassword`,{password},
      {headers:{authorization:localStorage.getItem('token')}})
    .then(response=>{
      console.log(response);
      dispatch({type:FETCH_MESSAGE,
                payload:response.data})

    })




  }

}




export function authError(error){

  return{
    type: AUTH_ERROR,
    payload:error
  }
}
export function signoutUser(){
    localStorage.removeItem('token');

  return{type:UNAUTH_USER}
}


export function fetchUserBooks(){
  return function(dispatch){
    axios.get(`${ROOT_URL}/getBooks`,{
      headers:{authorization:localStorage.getItem('token')}
    })
    .then(response=>{
      console.log('at fetch user ',response.data)
      dispatch({
        type:FETCH_USER_BOOKS,
        payload:response.data
      })
    })


  }
}
  export function addBook(book){
    return function(dispatch){

        //Submit email/password to server

      axios.post(`${ROOT_URL}/addBook`,book,{
        headers:{authorization:localStorage.getItem('token')}})
      .then(response=>{

        dispatch({
          type:FETCH_MESSAGE,
          payload:response.data})

      })

    }

  }
  export function tradeBook(value){
    return function(dispatch){

        //Submit email/password to server

      axios.post(`${ROOT_URL}/tradebook`,value,{
        headers:{authorization:localStorage.getItem('token')}})
      .then(response=>{

        dispatch({
          type:FETCH_USER_BOOKS,
          payload:response.data})

      })

    }

  }
  export function fetchAllBooks(){
    return function(dispatch){

        //Submit email/password to server

      axios.get(`${ROOT_URL}/allbooks`,{
        headers:{authorization:localStorage.getItem('token')}})
      .then(response=>{

        dispatch({
          type:FETCH_ALL_BOOKS,
          payload:response.data})

      })

    }

  }
  export function requestBook(book){
    return function(dispatch){

        //Submit email/password to server

      axios.post(`${ROOT_URL}/requestbook`,book,{
        headers:{authorization:localStorage.getItem('token')}})
      .then(response=>{


        dispatch({
          type:FETCH_MESSAGE,
          payload:response.data})

      })

    }

  }
  export function cancelRequest(book){
    return function(dispatch){

        //Submit email/password to server

      axios.post(`${ROOT_URL}/cancelrequest`,book,{
        headers:{authorization:localStorage.getItem('token')}})
      .then(response=>{


        dispatch({
          type:FETCH_USER_BOOKS,
          payload:response.data})

      })

    }

  }
  export function removeBook(book){
    return function(dispatch){

        //Submit email/password to server

      axios.post(`${ROOT_URL}/removebook`,book,{
        headers:{authorization:localStorage.getItem('token')}})
      .then(response=>{


        dispatch({
          type:FETCH_USER_BOOKS,
          payload:response.data})

      })

    }

  }

  export function fetchUserData(callback){
    console.log('called')
    return function(dispatch){

        //Submit email/password to server

      axios.get(`${ROOT_URL}/userdata`,{
        headers:{authorization:localStorage.getItem('token')}})
      .then(response=>{

          console.log(response);
        dispatch({
          type:FETCH_USER,
          payload:response.data})

      })
      .then(()=>callback())


    }

  }
export function clearMessage(){
  return {
    type:CLEAR_MESSAGE
  }
}
