import {useState} from  'react';
import './App.css';

function App() {
  const [input, setinput] = useState(
    {firstName : "", lastName:"",  email: "" , password: "", isVisible:true , status:"", car:""});
 
  function handleInputChange(e) {
    setinput(prevInputData => {
      const {name, value, type, checked} = e.target
      return{
        ...prevInputData, 
        [name] : type==="checkbox" ? checked:value
      }
    })
  }

  function submitForm(event){
    event.preventDefault();
    console.log("Form Data");
    console.log(input);
  }

  return (
      <div className='flex justify-center items-center bg-gray-400 h-screen'>

    <form onSubmit={submitForm}>
      
      <div 
      className='flex justify-center flex-col gap-3 p-4 bg-gray-200 w-[400px] h-auto rounded-xl  items-center py-8'>
        <h2 className='text-gray-600 font-semibold text-2xl'>Form Handling</h2>
      <input onChange={handleInputChange} value={input.firstName} 
      className='p-4 px-8 border-2 border-opacity-50 rounded-md border-gray-500 bg-ehite shadow-lg' 
      type="text" placeholder='First Name' name='firstName' id='firstName' />
      <input onChange={handleInputChange} value={input.lastName}  
      className='p-4 px-8 border-2 border-opacity-50 rounded-md border-gray-500 bg-ehite shadow-lg'
      type="text" placeholder='Last Name' name='lastName' id='lastName' />
      <input onChange={handleInputChange} value={input.email}
      className='p-4 px-8 border-2 border-opacity-50 rounded-md border-gray-500 bg-ehite shadow-lg'
      type="email" placeholder='Your Email address here' name='email' id='email' />
      <input onChange={handleInputChange} value={input.password}
      className='p-4 px-8 border-2 border-opacity-50 rounded-md border-gray-500 bg-ehite shadow-lg'
      type="password" placeholder='password' name='password' id='password' />
      <div className='text-xl'>
      <input onChange={handleInputChange} checked={input.isVisible} 
      type="checkbox" name="isVisible" id="check" />
      <label htmlFor="check">Please check</label>
      </div>
      <div className='flex justify-center items-center gap-4'>
        
          <legend className=''>Status :</legend>
          <input onChange={handleInputChange} checked={input.status === 'online'} 
           value="online" type="radio" name="status" id="onlinemode" />
        <label htmlFor="onlinemode"> Online </label>
        <input onChange={handleInputChange} checked={input.status === 'offline'} 
         value="offline" type="radio" name="status" id="offlinemode" />
        <label htmlFor="offlinemode"> Offline </label>
        
      </div>
      <div className='gap-5'>
        <label className='px-2' htmlFor="car">Choose your fav. car:</label>
        <select onChange={handleInputChange}  value={input.car}
         name="car" id="car"> 
         <option value="volvo">Volvo</option>
         <option value="TATA">TATA</option>
         <option value="Toyata">Toyata</option>
         
          </select>
      </div>
      <button className='px-6 py-2 border bg-blue-400 hover:bg-blue-600 text-white rounded-md mt-3'>Submit</button>
      </div>
      </form>
    </div>
  );
}

export default App;
