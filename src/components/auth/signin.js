import React,{Component} from 'react';
import {Link} from 'react-router';
import {Field,  reduxForm} from 'redux-form';
import * as actions from '../../actions/auth_actions';
import {connect} from 'react-redux';
import Header from '../header';
import {browserHistory} from 'react-router';
class Signin extends Component{
  componentWillMount(){
    if(this.props.authenticated){
      
    browserHistory.push('/allbooks')

  }
  }
  handleFormSubmit({email,password}){

    this.props.signinUser({email,password})

  }
  renderAlert(){

    if(this.props.errorMessage){
      return (
        <div className='alert alert-danger'>
           <strong>Oops! </strong> {this.props.errorMessage}

        </div>
      )
    }
  }
  render(){
    const {handleSubmit}=this.props


   return (
     <div>
     <div className='header-top text-xs-right'>
       <Header />
       <div className='header-title '><h3> <i className="fa fa-book" aria-hidden="true"></i> BookClub</h3></div>
      </div>

      <div className='signinContainer'>
     <h1 className='signin-title'> SIGN IN </h1>
     <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
     <fieldset className='form-group'>
         <label><p>Email:</p></label>
         <Field className="form-control" name="email" component="input" type="email"/>

     </fieldset>
     <fieldset className='form-group'>
         <label><p>Password:</p></label>
         <Field className="form-control" name="password" component="input" type="password"/>

     </fieldset>
     {this.renderAlert()}
     <button action='submit' className='button button3'>
     Sign In
     </button>
    </form>
    <br/>
    <Link to='/signup'>
    <button  className='buttonLong button1'>
    Go to Sign Up
    </button>
    </Link>
    </div>
  </div>
)}

}
function mapStatetoProps(state){
 return {errorMessage: state.auth.error,
 authenticated:state.auth.authenticated}
}
const signinForm= reduxForm({
  form:'signin'
},null,actions)
(Signin)

export default connect(mapStatetoProps, actions)(signinForm);
