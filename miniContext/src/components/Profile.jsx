import React,{useContext} from 'react'
import UserContext from '../contexts/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return(
        <h2>please login</h2>
    )
  return (
    <div>welcome {user.username}</div>
  )
}

export default Profile