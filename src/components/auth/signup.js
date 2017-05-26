
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions/auth_actions'
import Header from '../header';
import {browserHistory} from 'react-router';
// hoisted up not to render each time from scratch in the component (which would result in loosing focus)
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <fieldset className="form-group">
    <label className='field' htmlFor={input.name}>{label}</label>
    <input className="form-control" {...input} type={type}/>
    { touched && error && <span className="text-danger">{error}</span> }
  </fieldset>
)

class SignUp extends Component {
  componentWillMount(){
    if(this.props.authenticated){
        console.log('is auth')
    browserHistory.push('/allbooks')

  }
  }
  renderAlert(){
    if(this.props.errorMessage){
      return(
        <div className='alert alert-danger'>
        <strong>Oops!</strong>{this.props.errorMessage}
        </div>
      )
    }
  }

  handleFormSubmit({name,email, password ,city,state}) {

    // call action cretor to sign up
    this.props.signupUser({ name, email, password ,city,state})
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
      <div className='header-top text-xs-right'>
        <Header />
        <div className='header-title '><h3> <i className="fa fa-book" aria-hidden="true"></i> BookClub</h3></div>
       </div>
   <div className='signupContainer'>

     <h1 className='signin-title'> SIGN UP </h1>
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field name="name" component={renderField} type="text" label="Name"/>
        <Field name="email" component={renderField} type="email" label="Email"/>
        <Field name="password" component={renderField} type="password" label="Password"/>
        <Field name="passwordConfirm" component={renderField} type="password" label="Password Confirmation"/>
        <Field name="city" component={renderField} type="text" label="City"/>
        <Field name="state" component={renderField} type="text" label="State"/>
        {this.renderAlert()}
        <button type="submit" className="button button3">Sign Up</button>
      </form>
    </div>
    </div>
    );
  }
}

function validate(values) {
  let errors = {}
  if(!values.name)
  {
  errors.name="Please enter an name";
  }
  if(!values.email)
{
  errors.email="Please enter an email";
}
if(!values.password){
  errors.password="Please enter a password";
}
if(!values.passwordConfirm){
  errors.passwordConfirm="Please enter a password confirmation";
}
 if (values.password != values.passwordConfirm) {
    errors.password = 'Password and password confirmation don\'t match!'
  }
  if(!values.city)
{
  errors.city="Please enter an city";
}
if(!values.state)
{
errors.state="Please enter an state";
}
  return errors
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    authenticated:state.auth.authenticated
  }
}

export default connect(mapStateToProps, actions)(reduxForm({
  form:'SignUp',
  validate
})(SignUp));
