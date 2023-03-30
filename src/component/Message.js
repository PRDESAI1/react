import React, { Component } from "react"
class Message extends Component{

    constructor(){
        super()//extract rreact
        this.state={
            message:'welcome visitor'
        }
    
    }
    changeMessage() {
        this.setState({
            message:'thank you'
        })
    }
    render(){
      //  return <h1>Class Component</h1>
      return(
        <div> 
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()} >subscribe</button>

        </div>) 

    }
}
export default Message;