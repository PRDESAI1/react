import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'pratiksha'
      }
      console.log("lifecycle A constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("lifecycle A getDerivedStateFromProps")
        return null;
    }
    componentDidMount(){
        console.log("lifecycle A componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("lifeclycle A shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("lifeclycle A getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("lifeclycle A componentDidUpdate")
    }
    changeState =() =>{
        this.setState({
            name:"working"
        })
    }

    
  render() {
    console.log("lifecycle A render")
    return (
       <div>
      <div> lifecycle A render  </div>
      <button onClick={this.changeState}>change</button>
      <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA