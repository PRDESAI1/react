import React,{useState,useEffect} from 'react'

function HookCounterOne() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')


    useEffect(() =>{// it will reflect in brower title
        // it work after every render
        
        console.log("useeffect")

        document.title=`you clicked ${count} times`
    },[count])//second parameter count change then it will change
  return (
    <div>
    <input type='text' value={name} onChange={e => setName(e.target.value)}/>
    <button onClick={() => setCount(count+1)}>click {count}</button>
    </div>
  )
}

export default HookCounterOne