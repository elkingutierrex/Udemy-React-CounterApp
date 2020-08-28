
import React from 'react';
import ReactDom from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';


import './index.css';





const divRoot = document.querySelector('#root');

// console.log(divRoot);

ReactDom.render( <CounterApp value={ 20 } />, divRoot )