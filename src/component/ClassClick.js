import React, { Component } from 'react'


 class ClassClick extends Component {
  eventHandler(){
        console.log('clicked by class')
    }
  render() {

    return (
      <div>
      <button onClick={this.eventHandler}>clickclass</button>
      </div>
    )
  }
}

export default ClassClick