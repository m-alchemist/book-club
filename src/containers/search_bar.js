import React,{Component} from 'react';
import * as actions from '../actions/index';
import {connect} from 'react-redux';
import _ from 'lodash';
class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      term:''
      }
    }
  onInputChange=(event)=>{
    const body=event.target.value;
    this.setState({term:body});
    if(body){
    const fetchBooks=_.debounce((term)=>{this.props.fetchBooks(term)},200);
      fetchBooks(body);
    }
  

  }
  render(){

  return (  <div>
      <input className='form-control search-bar' onChange={this.onInputChange} value={this.state.term } placeholder='Enter Book Title ...'/>

    </div>)
  }


}

export default connect(null,actions)(SearchBar);
