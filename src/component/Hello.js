import React from "react";

const Hello =()=>{
    // return (<div>    //jsx
    //     <h1>Hello Vishwas</h1>
    //     </div>)

   // return React.createElement('div',null,React.createElement('h1',null,"hello pratiksha"))
   return React.createElement(
    'div',
    {id:'hello',className:'dummyclass'},React.createElement('h1',null,"hello pratiksha"))
}//element,key value,


export default Hello;