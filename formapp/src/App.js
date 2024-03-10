import {useState, useEffect, useRef}  from 'react';
import { useCallback } from 'react';
import './App.css';

function App() {

  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharallowed ] = useState(false);
  const [length , setLength] = useState(8);
  const  [password, setPassword] = useState("");
  const passwordRef = useRef(null) ;

  const cpoyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);

  },[password]);

  
  const passwordgenerator = useCallback(() => {

    let pass = " "
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) 
      str  += "0123456789"
    if (charAllowed)
       str += "!@#$%^&*"

       for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char);
        
       }
    setPassword(pass);

      
    }, [numberAllowed, charAllowed, length, setPassword]);

  useEffect(() => {
    passwordgenerator()
  }, [numberAllowed, charAllowed, length, passwordgenerator])


  return (
    <div className='flex justify-center items-center bg-slate-800 w-full h-screen flex-col'>
      <h2 className='text-white text-4xl'>Password Generator</h2>
      <div className='mt-10'>
        <div className=' flex w-[270px] h-auto p-1 border-2 border-gray-400 rounded-lg'>
        <input value={password} ref={passwordRef}  readOnly type="text" 
        className=' max-w-[200px] h-auto p-4 border-2 rounded-lg'
         id='name' placeholder="password"/>
        <button onClick={cpoyPassword} className='px-2 text-white text-lg'>Copy</button>
        </div>
        <div className='mt-4 flex justify-center gap-3 text-white font-semibold'>
          <input value={length} onChange={(e) => {setLength(e.target.value)}} type="range" name="" id="" min="1" max="30" />
          <label>Length :{length}</label>
        </div>
        <div className='mt-2 text-lg flex justify-center gap-3 text-white font-semibold '>
            <input type="checkbox" defaultChecked={numberAllowed} onChange={() => setNumberAllowed((prev) => !prev)} name="" id="num"  />
          <label htmlFor="num">Numbers</label>
          <input defaultChecked={charAllowed} onChange={() => setCharallowed((prev) => !prev)} type="checkbox" name="" id="char" />
          <label htmlFor="char">Spl Char.</label>
        </div>


      </div>

    </div>
  );
}

export default App;
