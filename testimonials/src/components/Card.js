import React from 'react'
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";


const Card = (props) => {
    let review = props.review;
  return (
    <div className="felx flex-col md:relative  ">

        <div className="absolute top-[-7rem] m-auto z-10">
        <img className="w-28 h-28 aspect-square rounded-full" src={review.image} alt="product" />
        <div className="w-28 h-28 bg-violet-700 rounded-full top-[-6px] left-[10px] absolute z-[-5]"></div>
        </div>

        <div>
            <p className='text-balck text-2xl font-bold'>{review.name}</p>
            <p className='uppercase text-xs text-gray-500 '>{review.job}</p> 
        </div>
        <div className=' mt-6 mb-2 opacity-50 text-violet-700 flex justify-center'>
        <FaQuoteRight />
        </div>
        <div className='text-gray-500 text-sm p-1 mr-4 ml-4' >
            <p>{review.text}</p>
        </div>
        <div className=' mt-4 mb-4 opacity-50 text-violet-700 flex justify-center'>
        <FaQuoteLeft />
        </div>
        
      
    
    </div>
  )
}

export default Card
