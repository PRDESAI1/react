import React,{useState} from 'react'
//state variable is array
function HookCounterFour() {
  const [items,setItems]=useState([])
  const addItem=()=>{
    setItems([...items,{
      id:items.length,
      value:Math.floor(Math.random()* 10)+1}])//give random number
  }
  return (
    <div>
    <button onClick={addItem}>add a number</button>
    <ul>
    {items.map(
      item =>
      (<li key={item.id}>{item.value}</li>))}
    </ul>
    </div>
  )
}

export default HookCounterFour