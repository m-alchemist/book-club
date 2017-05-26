import React,{Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      term:'';
      }
    }
  onInputChange=(event)=>{
    const body=event.target.value;
    setState({term:body});
    
  }
  render(){
    <form className='form-group-item'>
      <input className='form-control' onChange={onInputChange} value=this.state.term placeholder='Enter Book Title ...'/>

    </form>
  }


}
