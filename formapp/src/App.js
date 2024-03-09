import {useState}  from 'react';
import { useCallback } from 'react';
import './App.css';

function App() {

  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharallowed ] = useState(false);
  const [length , setLength] = useState(8);
  const  [password, setPassword] = useState("");
  
  const passowrdGenerator = useCallback(() => {

    let pass = " "
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) 
      str  += "0123456789"
    if (charAllowed)
       str += "!@#$%^&*()-_+=[]{};:'"

       for (let i = 0; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass = str.charAt(char);
        
       }
     

      
    }, [numberAllowed, charAllowed, length, setPassword]);

  


  return (
    <div className='flex justify-center items-center bg-slate-800 w-full h-screen flex-col'>
      <h2 className='text-white text-4xl'>Password Generator</h2>
      <div className='mt-10'>
        <div className=' flex w-[270px] h-auto p-1 border-2 border-gray-400 rounded-lg'>
        <input 
        className=' max-w-[200px] h-auto p-4 border-2 rounded-lg'
        type="text" id='name' placeholder="password"/>
        <button className='px-2 text-white text-lg '>Copy</button>
        </div>
        <div className='mt-4 flex justify-center gap-3 text-white font-semibold'>
          <input type="range" name="" id="" min="8" max="30" />
          <label>Length : 8</label>
        </div>
        <div className='mt-2 text-lg flex justify-center gap-3 text-white font-semibold '>
          <input type="checkbox" name="" id="num" />
          <label htmlFor="num">Numbers</label>
          <input type="checkbox" name="" id="char" />
          <label htmlFor="char">Numbers</label>
        </div>


      </div>

    </div>
  );
}

export default App;
