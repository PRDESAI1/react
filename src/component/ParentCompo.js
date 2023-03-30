import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

 class ParentCompo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'pratiksha'
      }
    }

    componentDidMount(){//redering in 2sec
        setInterval( () => 
    {this.setState(
        {name:"pratiksha"}
    )},2000)
    }
  render() {
    console.log("*****************parent compo***************")
    return (
        
      <div>ParentCompo
    {/*   <RegularComp name={this.state.name}></RegularComp>
    <PureComp name={this.state.name}></PureComp>*/}
    <MemoComp name={this.state.name} />

      </div>
    )
  }
}

export default ParentCompo