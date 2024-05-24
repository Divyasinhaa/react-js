import React from 'react'
import usercontext from '../context/usercontext'

function Profile() {
    const{user}=(usercontext)
 
    if (!user) return <div>pls login!!</div>
    return <div>welcome {user.username}</div>
}

export default Profile
