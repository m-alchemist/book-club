import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Header from './header';
 class Main extends Component{
  renderButtons(){
    if(this.props.authenticated){
      return (
          <Link className='text-danger nav-link' to='/signout'><button className='button button2'> Sign Out </button></Link>
)
    }
    else{
      return(
        <div>
            <h2 className='main-page-subtext text-warning ' >Get Started!  </h2>
            <Link className='text-danger nav-link' to='/signin'>  <button className='button button1'> Sign In </button></Link>
            <Link className='text-danger nav-link' to='/signup'><button className='button button3'> Sign Up </button></Link>
        </div>

      )
    }
  }
render(){
  return(
    <div>
    <div className='text-xs-center'>


    <div className='header-top text-xs-right'>
      <Header />
      <div className='header-title '><h3> <i className="fa fa-book" aria-hidden="true"></i> BookClub</h3></div>
     </div>
     <div className='main-page-title'>
      welcome To
     Book Club
       </div>
       <h2 className='main-page-text '>Where books come to find new homes</h2>

       {this.renderButtons()}
    </div>

    </div>




  )
}



}
function mapStateToProps(state){
  return {
    authenticated:state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Main)
