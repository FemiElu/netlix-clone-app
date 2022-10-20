import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import {db} from '../firebase'; 
import {arrayUnion, doc, updateDoc} from 'firebase/firestore';



const Movie = ({item}) => {

  const {user} = UserAuth()

  const [like, setLike] = useState(true)
  const [saved, setSaved] = useState(false)


  const saveShow = async() =>{
    if(user?.email) {
        setLike(!like)
        setSaved(true); 
        await updateDoc(movieID, {
          savedShows:arrayUnion({
            id:item.id,
            title:item.title,
            img:item.backdrop_path
          })
        })
    }
    else {
      alert('Please log in to save a movie'); 
    }
  }
  const movieID = doc(db, 'users', `${user?.email}`)


  return (
    <>
    <div className='w-[168px] sm:w-[200px] md:w-[240px] lg:w-[268px] inline-block cursor-pointer relative py-2'>
                    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item?.title} />
                
                <div className='absolute top-0 left-0 w-full hover:gb-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='white-space-normal text-xs md:text-sm font-bold justify-center items-center h-full text-center'>{item?.title}</p>
                <p onClick={saveShow}>{like? <FaHeart className='absolute top-4 left-4 text-gray-300'/> :<FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}</p>
                </div>
                </div>
    </>
  )
}

export default Movie