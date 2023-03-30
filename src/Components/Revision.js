import React ,{useState}from 'react'

function Revision() {
    const[item,setItem]=useState([])
    const addItem= () =>{
        setItem([...item,{
            id:item.length,
            value:Math.floor(Math.random()*10)+1}
        ])
        
            
        
    }
  return (
    <div>
    <button onClick={addItem}>add</button>
    <ul>
    {
item.map(i => <li key={i.id}>{i.value}</li>)

    }
    </ul>
    
    
    </div>
  )
}

export default Revision


