
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

class UpdateInfroForm extends Component {
  constructor(props){
    super(props);
    this.props.fetchUserData(()=>{
      this.updateData();
      console.log('updated');
    })



  }
  componentWillmount(){




  }
  updateData(){
    const autofill=this.props.autofill;
    if(this.props.userData){
      var userData=this.props.userData
      Object.keys(userData).forEach(function(key) {
            autofill(key,userData[key])


        })
      }
  }

  handleFormSubmit({name ,city,state}) {

    // call action cretor to sign up
    this.props.updateUserInfo({ name ,city,state})
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>


      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field name="name"  component={renderField} type="text" label="Name"/>
        <Field name="city"  component={renderField} type="text" label="City"/>
        <Field name="state"  component={renderField} type="text" label="State"/>

        <button type="submit" className="button button3">Update</button>
      </form>

    </div>
    );

    return <div></div>
  }
}

function validate(values) {
  let errors = {}

if(!values.name){
  errors.name="Please enter a Name";
}
if(!values.city){
  errors.city="Please enter a City";
}
if(!values.state){
  errors.state="Please enter a State";
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
  form:'UpdateInfroForm',
  validate
})(UpdateInfroForm));
