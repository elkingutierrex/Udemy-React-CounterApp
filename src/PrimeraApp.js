import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

//FC functional components

const  PrimeraApp = ( { saludo } ) => {

    return (
        <>
            <h1> { saludo } </h1>
            {/* <h1> { JSON.stringify(saludo)  } !!!</h1> */}
            <p>Mi primera aplicación!!</p>

        </>
    )

}

PrimeraApp.propTypes = {
    saludo : PropTypes.string.isRequired
}

export default PrimeraApp;