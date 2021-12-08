import React from "react";
import "./App.css";
import { connect } from "react-redux";

function mapState(state) {
  return {
    value : state
  }
}

function mapDispatch(dispatch) {
  return {
    increment: () => dispatch({type: "INCREMENT"}),
    decrement: () => dispatch({type: "DECREMENT"})
  }
}

function App({value, increment, decrement}){
  
  return (
    <div className = "App">
      <h1>Counter Application = {value}</h1>
      <button onClick={() => increment()} >Increment</button>
      <button onClick= {() => decrement()}>Decrement</button>
    </div>
    
  )
}


export default connect(mapState, mapDispatch)(App);