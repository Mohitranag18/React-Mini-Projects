import { useState } from 'react'


function App() {
  const [color, setColor] = useState("black")
  

  return (
    <div className=" w-full h-screen flex justify-center" 
    style={{backgroundColor: color}}>
      <div className='fixed bottom-7 bg-white h-16 w-[90vw] rounded-xl flex justify-evenly items-center'>
        <button className='px-7 py-2 rounded-full text-white font-bold' 
        style={{backgroundColor:"red"}}
        onClick={()=>setColor("red")}
        >
          Red
        </button>

        <button className='px-7 py-2 rounded-full text-white font-bold'
        style={{backgroundColor:"green"}}
        onClick={()=>setColor("green")}
        >
          Green
        </button>

        <button className='px-7 py-2 rounded-full text-white font-bold'
        style={{backgroundColor:"blue"}}
        onClick={()=>setColor("blue")}
        >
          Blue
        </button>
      </div>

    </div>
  )
}

export default App
