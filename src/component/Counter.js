import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    
    increment(){
    //1 use use setstate 
    //  this.setState(() => ({
    //     count:this.state.count +1
        
    // })

    //2   both 2 parametrer 1st object and 2nd callback function
    //this.setState(
    //    {                           //set satate for changing values in constructor
    //     count:this.state.count +1
    //    }, ( )=>{
    //     console.log('callbackvalue',this.state.count)})//it will show increament values in console


    //3   if call 5 times it will run only once so use prevstate
    this.setState((prevState,props) => ({
        count:prevState.count +1
        
    }))

     console.log(this.state.count) //it will show 0
    }

    incrementfive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }
  render() {
    return (<div>
      <div>Count -{this.state.count}</div>
      {/*<button onClick={() => this.increment()}>increment</button>*/}
      <button onClick={() => this.incrementfive()}>increment</button>
      </div>
    )
  }
}

export default Counter