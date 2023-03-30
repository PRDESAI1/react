import { Outlet,useSearchParams } from "react-router-dom"

export const User = () => {
    const [searchParam,setSearchParam]=useSearchParams()
    const showActiveUsers=searchParam.get('filter')==='active'
  return (
    <div>
    <h1>User 1</h1>
    <h1>User 2</h1>
    <h1>User 2</h1>
    <Outlet/>
    <div>
    <button onClick={()=>setSearchParam({filter:'active'})}>Active Users</button>
    <button onClick={()=>setSearchParam({})}>Reset Filter</button>
    </div>
    {
        showActiveUsers ? <h2>showing active</h2>:<h2>showing all users</h2>
    }
    </div>

  )
}
