import React, {useState} from "react";
import PropTypes from "prop-types"

Counter.propTypes = {
 min: PropTypes.number,
 max: PropTypes.number.isRequired,
 current: PropTypes.number.isRequired,
 onChange: PropTypes.func.isRequired,
}

function Counter({min=1, max, current, onChange}) {
 // let [current, setCurrent] = useState(min);
 // console.log(max);

 function applyCurrent(num){
  let validNum = Math.max(min, Math.min(max,num));
  onChange(validNum)

 }


 function purseCurrentStr(e){
  let num = parseInt(e.target.value)
  applyCurrent(isNaN(num) ? min : max)
 }

 let inc = () => applyCurrent(current+1)
 let dec = () => applyCurrent(current - 1)

 // function inc(){
 //  if(current < max){
 //   setCurrent(current+1)
 //  } else {
 //   console.log("Stop MAX");
 //  }
 // }

 // function dec() {
 //  if (current > min) {
 //   setCurrent(current - 1)
 //  } else {
 //   console.log("Stop MIN");
 //  }
 // }

 return(
  <div>
   
   {/* <span>{current}</span> */}
   <hr />
   <button type="button" onClick={dec}>-</button>
   <input type="text" value={current} onChange={purseCurrentStr}></input>
   {/* <hr/> */}
   <button type="button" onClick={inc}>+</button>
  </div>
 )
}




export default Counter;