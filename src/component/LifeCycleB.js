import React, { Component } from 'react'

 class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'pratiksha'
      }
      console.log(" lifecycle B lifecycle")
    }

    static getDerivedStateFromProps(props,state){
        console.log("lifecycle B getDerivedStateFromProps")
        return null;
    }
    componentDidMount(){
        console.log("lifecycle B componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("lifeclycle B shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("lifeclycle B getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("lifeclycle B componentDidUpdate")
    }
  render() {
    console.log("lifecycle B render")
    return (
       
      <div>
      <h1>lifecycleB render B</h1>
      </div>
    )
  }
}

export default LifeCycleB