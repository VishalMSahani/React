
import './App.css';
import Testimonial from './components/Testimonial'
import reviews from './data'

function App() {
  return (
    <div className=' flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-300 '>
    <div className="text-center ">
     <div className="text-4xl mb-10 font-bold flex items-center flex-col">
      <h2>Our Testimonials</h2>
      <div className="p-[1.5px] w-[130px] mt-2  bg-violet-700"></div>
     </div>
     <div>
      <Testimonial  reviews={reviews} />
     </div>
    </div>
    </div>
  );
}

export default App;
