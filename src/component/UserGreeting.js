import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {
    //4
    //short circuit
    //if left is true then right is exeuted but false then nothing
    return this.state.isLoggedIn && <div>welcome pratiksha</div> 

    //3
    //ternairy conditional operator
   // return (
        // this.state.isLoggedIn ?  //check true and false 
        // (<div>welcome pratiksha</div>  )
        // :
        // ( <div>welcome guest</div>)
        
        // )

    //2
    //elment variable approach  
    //  let Message 
    //  if(this.state.isLoggedIn){
    //     Message= <div>welcome pratiksha</div>  
    // }
    //  else{
    //     Message=<div>welcome guest</div>
    // }
    // return <div>{Message}</div> ;


    // 1  
    //if else rendering
    //if(this.state.isLoggedIn){
    //     return <div>welcome pratiksha</div>  
    // }
    //  else{
    //     return <div>welcome guest</div>
    // }


    // return (
    //   <div>
    //   <div>Welcome</div>
    //   <div>welcome,pratiksha</div>
    //   </div>
    // )
  }
}

export default UserGreeting