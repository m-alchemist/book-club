import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/auth_actions.js';
import Header from '../header'
import {Link} from 'react-router';
class Signout extends Component{
  componentWillMount(){
    this.props.signoutUser();
  }

  render(){
    return (
      <div>
      <div className='header-top text-xs-right'>
        <Header />
        <div className='header-title '><h3> <i className="fa fa-book" aria-hidden="true"></i> BookClub</h3></div>
       </div>
      <div className='signoutContainer'>
      <h1 className='signin-title'>See you next time, bub!</h1>
      <br/>
      <Link to='/main'>
      <button className='buttonLong button2'>Go Back to Main Page</button>
      </Link>
      </div>
      </div>
    )
  }

}
export default connect(null,actions)(Signout)
