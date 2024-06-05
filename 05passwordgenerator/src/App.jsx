import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [numallow, setnumallow] = useState(false)
  const [charallow, setcharallow] = useState(false)
  const [pass, setpass] = useState("")

  //UseRef hook
  const Passwordref = useRef(null)


  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numallow) {
      str += "0123456789"
    }
    if (charallow) {
      str += "!#$%&\()*+,-./:;<=>?@[\\]^_`{|}~"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpass(pass)

  }, [length, numallow, charallow, setpass])

  const copypasswordtoclip = useCallback(() => {
    Passwordref.current?.select()
    Passwordref.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  useEffect(() => { PasswordGenerator() }, [length, numallow, charallow, PasswordGenerator])


  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-3 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-xl text-center text-white' my-3>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-.5'>
          <input type="text" value={pass} className='outline-none w-full py-1 px-3 my-4 rounded-l-lg' placeholder='Password' readOnly ref={Passwordref} />
          <button className='outline-none bg-blue-700 text-white px-3 py-4 my-4 shrink-0 rounded-r-lg' onClick={copypasswordtoclip}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-3 '>
          <div className='flex item-center gap-x-1 mb-4'>
            <input type="range" min={6} max={20} value={length} className='cursor-pointer' onChange={(e) => { setlength(e.target.value) }} />
            <label htmlFor="" >length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1 mb-4'>
            <input type="checkbox" defaultChecked={numallow} id="numinput" onChange={(e) => { setnumallow((prev) => !prev) }} />
            <label htmlFor="numinpt">Numbers</label>
          </div>
          <div className='flex item-center gap-x-1 mb-4'>
            <input type="checkbox" defaultChecked={charallow} id="charinput" onChange={(e) => { setcharallow((prev) => !prev) }} />
            <label htmlFor="numinpt">Special Character</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
