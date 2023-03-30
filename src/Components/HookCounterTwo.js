import React,{useState} from 'react'

function HookCounterTwo() {

    const intial=0;
    const [count,setCount]=useState(intial)
    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            // setCount(count+1)it will not work
            setCount(prevCount => prevCount +1)//prevCount is have acess of previous value

        }

    }

  return (
    <div>
    count:{count}
    <button onClick={() =>setCount(intial)}>Reset</button>
    {/**<button onClick={() =>setCount(count +1)}>Increment</button>*/}
    <button onClick={() =>setCount(prevCount => prevCount +1)}>Increment</button>
    {/** <button onClick={() =>setCount(count -1)}>Decrement</button>*/}
    <button onClick={() =>setCount(prevCount => prevCount -1)}>Decrement</button>
    <button onClick={incrementFive}>Increment5</button>
    </div>
  )
}

export default HookCounterTwo