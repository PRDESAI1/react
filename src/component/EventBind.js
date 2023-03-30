import React, { Component } from 'react'

 class EventBind extends Component {
constructor(props) {
  super(props)

  this.state = {
     message:'hello'
  }
 // this.clickHandler=this.clickHandler.bind(this) //third approach binding in class constructor
}
//1
// clickHandler(){
//     this.setState({
//         message:'goodBye'
//     })
// console.log(this)   //undefined so we need eventBlinder
//  }

clickHandler=() =>{ //arrow function
    this.setState({
        message:'goodBye'})
}


  render() {
    return (
      <div>
      <div>{this.state.message}</div>
      {/*<button onClick={this.clickHandler.bind(this)}>click</button>  **bind method for event handler*/}
      {/*<button onClick={( )=> this.clickHandler()}>click</button> ***arrow event handler*/}
      {/*<button onClick={ this.clickHandler}>click</button>  ***third approach by constructor */  }
      <button onClick={ this.clickHandler}>click</button>    {/*by function arrow */}

      </div>
    )
  }
}

export default EventBind