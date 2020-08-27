
import React from 'react';
import ReactDom from 'react-dom';
import PrimeraApp from './PrimeraApp';

import './index.css';





const divRoot = document.querySelector('#root');
// console.log(divRoot);

ReactDom.render( <PrimeraApp />, divRoot )