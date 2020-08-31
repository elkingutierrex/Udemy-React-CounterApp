import React , { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10  }) => {

    const [ counter, setcounter ] = useState( value );
    // console.log( state );

    const handleAdd = () => setcounter( counter + 1 ) 
    
    const handleSubstract = () =>  setcounter( counter -1 )  
    
    const handleReset = () => setcounter( value )

    return (
        <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={ handleSubstract }>-1</button>
        <button onClick={ handleReset }>Reset</button>
        <button onClick={ handleAdd }>+1</button>
            
        </>
    )
}

CounterApp.propTypes = {
    value : PropTypes.number
}

export default CounterApp
