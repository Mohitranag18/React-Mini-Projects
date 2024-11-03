import { useCallback, useState, useEffect, useRef } from 'react'


function App() {

  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQROUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed){
      str += "1234567890"
    }
    if(charAllowed){
      str += "~!@#$%^&*(){}[]`:;'<>?"
    }

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, numAllowed, charAllowed, setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length, numAllowed, charAllowed, passwordGenerator])

  //useRef
  const passwordRef = useRef(null)
  const copyText = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
    <h1 className='text-center mt-10 mb-2'>Password Generator</h1>
    <div className='h-80 w-96 bg-gray-800 text-white m-auto p-8 rounded-md'>

      <div className="passandcopy mb-8 flex">
        <input type="text" value={password} className='w-full px-4 py-2 text-black' placeholder='password' readOnly 
        ref={passwordRef}/>
        <button className='bg-blue-700 px-4 py-2' onClick={copyText}>copy</button>
      </div>

      <div className="length flex justify-between mb-8">
        <input type="range" min={6} max={30} value={length} className='cursor-pointer' 
        onChange={(e)=>{setLength(e.target.value)}}/>
        <label>Length: {length}</label>
      </div>

      <div className="charandnum flex justify-evenly">
        <input type="checkbox" defaultChecked={numAllowed} id='numberInput'
        onChange={()=>{
          setNumAllowed((prev)=>(!prev));
          }}/>
        <label htmlFor='numberInput'>NumAllowed {numAllowed ? 'yes': 'no'}</label>

        <input type="checkbox" defaultChecked={numAllowed} id='charInput'
        onChange={()=>{
          setCharAllowed((prev)=>(!prev));
          }}/>
        <label htmlFor='charInput'>CharAllowed {charAllowed ? 'yes': 'no'}</label>
      </div>
    </div>
    </>
  )
}

export default App
