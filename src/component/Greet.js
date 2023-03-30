import React from "react";


//1
//  function Greet(){
//     return <h1>hello vishwas</h1>;
// }
// export default Greet;

//2
//export const Greet =() => <h1>hello vishwas </h1> //named export

// 3 use of prop in function
// const Greet = prop =>{
//     console.log(prop) 
//    return (
//     <div>
//     <h1>hello {prop.name} a.k.a {prop.heroName} </h1>
//     {prop.children}
//     </div> );
// } //use of props

//4 this is  detructure the parameter
// const Greet = ({name,heroName}) =>{
       
//        return (
//         <div>
//         <h1>hello {name} a.k.a {heroName} </h1>
       
   

//5 this is  destructure in function body
const Greet = props =>{
       const {name, heroName }=props //extract from prop
           return (
            <div>
            <h1>hello {name} a.k.a {heroName} </h1>
           
            </div> );
               }
export default Greet;

