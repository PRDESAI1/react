import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        parentName:'parent'
      }
      this.greetParent=this.greetParent.bind(this)
    }
    //1 method
    // greetParent( ){
    //     alert (`hello  ${this.state.parentName}`)
    // }

    greetParent(childName){ //childname pass from clild function
           alert (`hello  ${this.state.parentName} from ${childName}`)
       }


  render() {
    return (
      <div>
      <ChildComponent greetHandler={this.greetParent}/> {/** this is passing referance  tranfer from parent to child*/}
      </div>
    )
  }
}

export default ParentComponent