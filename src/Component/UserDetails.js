import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
    const params=useParams()
    //const {usersId}=useParam()
    const usersId=params.usersId
  return (
    <div>detail about user {usersId}</div>
  )
}
