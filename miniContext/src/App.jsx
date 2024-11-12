import { useState } from 'react'
import UserContextProvider from './contexts/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <div className='flex flex-col justify-center items-center p-10 gap-5 h-90 w-80 bg-blue-200'>
      <Login />
      <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App
