import React,{useState, useContext} from 'react'
import UserContext from '../contexts/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div className='flex flex-col gap-4 items-center'>
        <h2>Login</h2>
        <input type="text" placeholder='usename' 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='bg-gray-600 p-2 text-white'
        />

        {" "}

        <input type="text" placeholder='password' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        className='bg-gray-600 p-2 text-white'
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login