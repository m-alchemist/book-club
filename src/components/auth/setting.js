
import React, { Component } from 'react'
import ChangePasswordForm from './change_password';
import UpdateInfroForm from './update_user_info';
import AlertBox from '../alert_box'
// hoisted up not to render each time from scratch in the component (which would result in loosing focus)

 export default class Setting extends Component {

  render() {


    return (
      <div>
        <AlertBox />

         <div className='signupContainer'>

           <h1 className='signin-title'> SETTING </h1>
           <h3> Update Information</h3>
           <UpdateInfroForm />
           <h3>Change password</h3>
           <ChangePasswordForm />
          </div>
        </div>

    );

  }
}
