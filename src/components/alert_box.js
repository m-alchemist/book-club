import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/auth_actions';
import {Expire} from './expire';

class AlertBox extends Component{
  clearMessageIn1second(){

    setTimeout(()=>this.props.clearMessage(),2000)
  }
  renderAlert(){


    if(this.props.message){
      if(this.props.message.success){
         this.clearMessageIn1second();
        return (
           <Expire delay={2000}><div className='alert message-alert'>
             <strong> !</strong> {this.props.message.success}

          </div></Expire>
        )
      }
      else{
        return(
         <Expire delay={2000}><div className='alert message-alert alert-danger'>
           <strong> !</strong> {this.props.message.err}

        </div></Expire>
      )

      }


    }
  }
  render() {


    return (
      <div>
          {this.renderAlert()}
      </div>
    )
  }

}
function mapStateToProps(state){
  
  return {

    message:state.auth.message
  };
}
export default connect(mapStateToProps,actions)(AlertBox);
