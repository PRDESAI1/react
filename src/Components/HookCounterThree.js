import React,{useState} from 'react'

function HookCounterThree() {
    const [name,setName]=useState({firstName:'',lastName:''})//object
  return (
    //...spread operator to copy the data
    <div>
    <form>
    <input type="text" value={name.firstName} onChange={e => setName({...name,firstName:e.target.value})} />
    <input type="text" value={name.lastName} onChange={e => setName({...name,lastName:e.target.value})}/>
    <h2>ur firstName is -{name.firstName}</h2>
    <h2>ur lastName is -{name.lastName}</h2>
    <h2>{JSON.stringify(name)}</h2>

    </form>
    </div>
  )
}

export default HookCounterThree