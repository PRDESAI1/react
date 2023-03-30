import React from 'react'

function Column() {
    const items=[]
  return (
   
  <React.Fragment> 
  {//in case of array
    items.map(
        item =>(
           <React.Fragment key={item.id}> 
           <h1>Title</h1>
           <p>{item.title}</p>
           </React.Fragment> 
        )
    )
  }
  <td>name</td>
  <td>Pratiksha</td>
  </React.Fragment> // <div>
   
    
  
  )
}

export default Column