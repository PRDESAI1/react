import React from 'react'
import Person from './Person';

function NameList() {
// 1
//  array 
//const names=["bruce" ,"clark"]
//     const nameList=names.map(name => <h2>{name}</h2>)
//   return (
//     <div>
//     {
//        nameList 
//     }
//     </div>
//   )
// const nameList=names.map(name => <h2>{name}</h2>)
//   return (
//     <div>
//     {
//        nameList 
//     }
//     </div>
//   )

//2
 //object
// const persons =[
//     {id:1,
//         name: 'bruce',
//         age: 34},
//     {id:2,
//             name: 'br',
//             age: 34} 
// ]
    


//     const personList=persons.map( person => <Person person={person}/>)//person as prop
//   return (
//     <div>
//     {
//        personList 
//     }
//     </div>
//   )

//18 
//list ank key
// const personList=persons.map( person => <Person key={person.name} person={person}/>)//key can anything id or name
// return (
//   <div>
//   {
//      personList 
//   }
//   </div>
// )

//19
//index as key in array
const names=["bruce" ,"clark","bruce"]
  const nameList=names.map((name,index) => <h2 key={index}> {index}  {name}  </h2>)//index second parameter 
  return nameList
}

export default NameList