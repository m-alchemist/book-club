
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, change,autofill} from 'redux-form'
import * as actions from '../../actions/auth_actions'

// hoisted up not to render each time from scratch in the component (which would result in loosing focus)
const renderField = ({ input, label,userData, name, type, meta: { touched, error, warning } }) => (
  <fieldset className="form-group">
    <label className='field' htmlFor={input.name}>{label}</label>
    <input className="form-control" {...input}  type={type}/>
    { touched && error && <span className="text-danger">{error}</span> }
  </fieldset>
)

class ChangePasswordForm extends Component {

  handleFormSubmit({ password }) {

    // call action cretor to sign up
    this.props.changePassword({  password })
  }

  render() {
    const { handleSubmit } = this.props;


    return (
      <div>



      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

        <Field name="password" component={renderField} type="password" label="Password"/>
        <Field name="passwordConfirm" userData={""} component={renderField} type="password" label="Password Confirmation"/>

        <button type="submit" className="button button3">Update</button>
      </form>

    </div>
    );


  }
}

function validate(values) {
  let errors = {}

if(!values.password){
  errors.password="Please enter a password";
}
if(!values.passwordConfirm){
  errors.passwordConfirm="Please enter a password confirmation";
}
 if (values.password != values.passwordConfirm) {
    errors.password = 'Password and password confirmation don\'t match!'
  }

  return errors
}

function mapStateToProps(state) {

  return {
    errorMessage: state.auth.error,
    userData:state.auth.userData
  }
}

export default connect(mapStateToProps, actions)(reduxForm({
  form:'ChangePasswordForm',
  validate
})(ChangePasswordForm));
