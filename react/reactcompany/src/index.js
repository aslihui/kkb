import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
import Lifecycle from './Lifecycle';
import CartSimple from "./CartSimple";

// ReactDOM.render(<Test name="lihui" />, document.getElementById('root'));
// ReactDOM.render(<App name="lihui" />, document.getElementById('root'));
// ReactDOM.render(<Lifecycle />, document.getElementById('root'));
ReactDOM.render(<CartSimple title="开课吧" name="lihui" />, document.getElementById('root'));
// function tick(){
//   ReactDOM.render(<h1>{new Date().toLocaleString()}</h1>, document.querySelector("#root"));
// };

// setInterval(tick, 1000);
