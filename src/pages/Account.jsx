import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>Account</div>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/77a25a1d-7805-4618-8637-a5c86b205033/NG-en-20221010-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='NetflixBackground' className='w-full h-[400px] object-cover'/>
     <div className='bg-black/60 fixed-top top-0 left-0 w-full h[550px]'>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold text-white'>My Shows</h1>
      </div>
     </div>
     <SavedShows/>
    </>
  )
}

export default Account