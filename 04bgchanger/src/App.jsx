import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setcolor]=useState("Black")
  return (
   
     <div className='w-full h-screen duration-200 'style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center absolute inset-x-0 bottom-8 h-16 .'>
        <div className='flex flex-wrap justify-center gap-4 bottom-1 shadow-lg bg-white px-3 py-3 rounded-3xl'>
       <button onClick={()=>setcolor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>
       <button onClick={()=>setcolor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}>Green</button>
       <button onClick={()=>setcolor("yellow")} className='outline-none px-4 py-1 rounded-full text-Black shadow-lg' style={{backgroundColor: "yellow"}}>Yellow</button>
       <button onClick={()=>setcolor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>
       <button  onClick={()=>setcolor("pink")} className='outline-none px-4 py-1 rounded-full text-Black shadow-lg' style={{backgroundColor: "pink"}}>Pink</button>
       <button onClick={()=>setcolor("White")} className='outline-none px-4 py-1 rounded-full text-Black shadow-lg' style={{backgroundColor: "White"}}>White</button>
       <button  onClick={()=>setcolor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "black"}}>Black</button>
       <button onClick={()=>setcolor("Gray")} className='outline-none px-4 py-1 rounded-full text-Black shadow-lg' style={{backgroundColor: "Gray"}}>Gray</button>
       <button onClick={()=>setcolor("Purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Purple"}}>Purple</button>
       <button onClick={()=>setcolor("Lavender")} className='outline-none px-4 py-1 rounded-full text-Black shadow-lg' style={{backgroundColor: "Lavender"}}>Lavender</button>



        </div>
        </div>
     </div>
    
  )
}

export default App
