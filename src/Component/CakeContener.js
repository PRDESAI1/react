import React from 'react'

function CakeContener() {
  return (
    <div>
    
    <h1>no of cakes</h1>
    <button>buy cake</button>
    
    </div>
  )
}
const mapStateToProps =state=>{
    return {
        numOfCakes:state.numOfCakes
    }
}
export default CakeContener