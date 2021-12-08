import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { createStore } from "redux";
import './index.css';
import App from './App';


function reducer(state = 0, action) {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;  
    default :
      return state;
  }
  return state;
}

function main() {
  window.removeEventListener("load", main, false);

  const store = createStore(reducer);
  ReactDOM.render(
 
    <Provider store = {store}>
      <App />
    </Provider>
    ,
    

  document.getElementById('root')
);
}

window.addEventListener("load", main, false);

