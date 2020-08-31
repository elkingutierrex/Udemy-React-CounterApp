import React , { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {

    const [ counter, setcounter ] = useState( 0 );
    // console.log( state );

    const handleAdd = (e) =>{
        setcounter( counter + 1 )
        // console.log(e);
       
    }

    return (
        <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={ handleAdd }>+1</button>
            
        </>
    )
}

CounterApp.propTypes = {
    value : PropTypes.number
}

export default CounterApp
