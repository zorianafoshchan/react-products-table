import React from "react";

export default class extends React.Component{
 state = {
  current: 0,
 }

 inc = () => {
  if(this.state.current < this.props.max){
   this.setState({current: this.state.current + 1})
  }
 }

 render(){
  return(
   <div>
    {this.state.current}
    <button type="button" onClick={this.inc} > + </button>
   </div>
  )
 }
}