
import React from 'react';
import ReactDom from 'react-dom';


const saludo  = <h1> Hola mundo!!!</h1>
// console.log(saludo);

const divRoot = document.querySelector('#root');
// console.log(divRoot);

ReactDom.render( saludo, divRoot )