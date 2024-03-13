import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loader from './Loader';

const Random = () => {
    const [gif, setGif] = useState((''));
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true);
        try{
            const url = `https://api.giphy.com/v1/gifs/random?api_key=qn8eAo8DlNYWglt6GvYrmfpqLgVYzZer&tag=&rating=g`
            let {data} = await axios.get(url);
            const result = data.data.images.downsized.url
            setGif(result);   
            setLoading(false);
        }
        catch(err){
            console.log("Error");
        }
    }
    useEffect(() => {
    fetchData();
    }, [])

    function gifHandler(){
        fetchData();
    }

  return (
    <div className='w-1/3 bg-blue-400 flex flex-col items-center rounded-lg border-2 shadow-md'>
      <h2 className='font-bold text-xl mt-4 mb-4'>Random Gif</h2>
      <div className='border w-[80%] min-h-[400px] max-h-[auto] flex justify-center items-center'>
      {
        loading ? (<Loader/>) : (<img className='rounded-lg p-2' src={gif} alt=""   width="auto" />)
      }
      </div>
      <button onClick={gifHandler}
       className='py-3 px-8 border bg-blue-950 hover:bg-blue-900 mb-4 mt-4 text-white text-xl rounded-md'>Generate Random Gif</button>
    </div>
  )
}

export default Random
