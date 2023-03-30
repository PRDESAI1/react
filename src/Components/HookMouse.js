import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [x,setX] =useState(0)
    const [y,setY] =useState(0)  

    const logMousePosition= e=>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>
    {
        console.log('useEffeed called')
        window.addEventListener("mousemove",logMousePosition)
    },[])//it will second parameter it prevent from come in useeffect
    return (
    <div>
    Hook X-{x} Y-{y}
    </div>
  )
}

export default HookMouse