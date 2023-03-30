import React, { Component } from "react"; //react and component
class Welcome extends Component{
    //9 use of prop in class
    //render(){
    //   //  return <h1>Class Component</h1>
    //   return <h1> welcome {this.props.name} a.k.a {this.props.heroName}</h1>;//use this.props
    // }

    render(){
      //detructure of props and state
     const {name,heroName}=this.props
     //const {state1, state2}=this.state
      return <h1> welcome {name} a.k.a {heroName}</h1>;
    }


}
export default Welcome;