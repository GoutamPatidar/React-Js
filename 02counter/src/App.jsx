import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//hooks are used to propogate changes to ui 

  let [counter, setCounter] = useState(15)
  // let counter=15;
  const addValue = () => {
    //counter++;
    // setCounter((counter=>counter+1))// used to update like a=a+1
    // setCounter((counter=>counter+1))
    setCounter(counter+1)
  
    console.log(counter, " clicked");

  }

  const removevalue=()=>{
    setCounter(counter-1)
    console.log(counter, " clicked");
  }
  return (
    <>
      <h1>Goutam Patidar</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button><br /><button onClick={removevalue}>Remove value {counter}</button>
      <footer>footer: {counter}</footer>
    </>
  )
}

export default App
