import React from 'react'

function FunctionalClick() {

    function clickHandler(){
        console.log('button clicked by function')
    }
  return (
    <div>
    <button onClick={clickHandler}>click</button>
    </div>
  )
}

export default FunctionalClick