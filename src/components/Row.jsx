import axios from 'axios';
import React, { useEffect, useState} from 'react'; 
import { MdChevronLeft, MdChevronRight}  from 'react-icons/md'

import Movie from './Movie';


const Row = ({title, fetchURL, rowId}) => {

    const [movies, setMovies] = useState([]);

    const slideLeft = ()=>{
        let slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft-500
    }
    const slideRight = ()=>{
        let slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft+500
    }

    useEffect(()=>{
        axios.get(fetchURL).then((resp)=>{
            setMovies(resp.data.results)
        })
    },[fetchURL])

console.log(movies)
  return (
   <>
   <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
   <div className='relative flex items-center group'>
    <MdChevronLeft onClick={slideLeft} size={40} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block cursor left-0' />
    <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
        {
            movies.map((item,id)=>(
                <Movie key={id} item={item}/>
            ))
        }
    </div>
    <MdChevronRight onClick={slideRight} size={40} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0'/>
   </div>
   </>
  )
}

export default Row
