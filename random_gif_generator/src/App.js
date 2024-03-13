
import './App.css';
import Random from './Components/Random';
import Custom from './Components/Custom';

function App() {
  return (
    <div className="bg-blue-950 w-full min-h-screen max-h-full flex flex-col items-center pb-8 ">
      <div className='w-11/12 bg-slate-200 rounded-lg h-[50px] flex justify-center items-center mt-5'>
      <h1 className='font-bold text-3xl font-mono' >Gif Generator</h1>
      </div>
      <div className='flex  w-full items-center justify-center gap-x-14 mt-6'>
        <Random/>
        <Custom/>
      </div>

     
    </div>
  );
}

export default App;
