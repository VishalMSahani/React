import React, { useState } from 'react'
import Card from './Card'
import {FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Testimonial = (props) => {

    let reviews = props.reviews;
    const[index, setIndex] = useState(0);

    function leftHandler(){
        if(index-1  < 0){
            setIndex(reviews.length -1 );
        }
        else{
            setIndex(index -1 )
        }
    
    }
    function rightHandler(){
        if(index + 1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1)
        }
    
    }
    function surpriseHandler(){
        let randomNumber = Math.floor(Math.random() * reviews.length);
        setIndex(randomNumber);
    
    }

  return (
    <div className="w-[75vw] md:w-[650px] flex flex-col justify-center items-center bg-white py-8 px-4
    rounded-lg shadow-md transition-all duration-1000">
      <Card review = {reviews[index]}/>
      <div className='text-2xl opacity-90 text-violet-700 '>
            <button
            onClick={leftHandler}
            ><FaAngleLeft /></button>
            <button
            onClick={rightHandler}
            ><FaAngleRight /></button>
        </div>
        <div className='mt-3 '>
            <button
            onClick={surpriseHandler}
             className='p-2 px-8 bg-violet-500 hover:bg-violet-700 transition-all duration-200  text-white rounded-md '>Surpris Me</button>
        </div>
    </div>
  )
}

export default Testimonial  
