import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Login = () => {

  
    const { user, logIn } = UserAuth();

    const navigate = useNavigate()
    const [email, setEmail]= useState(''); 
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
  
    const handleSubmit = async(e)=> {
          e.preventDefault(); 
          try {
            await logIn(email, password); 
            navigate('/')
          } catch (error) {
            console.log(error);
            setError(error.message)
          }
    }
  return (
    <div className='w-full h-screen'>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/77a25a1d-7805-4618-8637-a5c86b205033/NG-en-20221010-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='NetflixBackground' className='hidden sm:block absolute w-full h-full object-cover'/>
    <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
     <div className='fixed w-full px-4 py-24 z-50'>
      <div className='max-w-[450px] h-[680px] mx-auto bg-black/75 text-white'>
        <div className='max-w-[320px] mx-auto py-16'>
          <h1 className='text-3xl font-bold'>Sign In</h1>
          {error? <p className='p-3 bg-red-400'>{error}</p>:null}
          <form  onSubmit={handleSubmit} className='flex flex-col w-full py-4'>
            <input type='email' onChange={(e)=>setEmail(e.target.value)} placeholder='email' autoComplete='email'  className='p-3 my-2 bg-gray-700 rounded'/>
            <input type='password' onChange={(e)=>setPassword(e.target.value)}placeholder='password' autoComplete='current-password' className='p-3 my-2 bg-gray-700 rounded'/>
          <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
          <div className='text-sm text-gray-600 flex justify-between items-center'>
            <p><input className='mr-2' type='checkbox'/>Remember me</p>
            <p>Need Help?</p>
          </div>
          <p className='py-8'> <span className='text-gray-600'>Already subscribed to Netflix?</span>{''} <Link to={'/signUp'}>Sign Up</Link></p>
          </form>

        </div>
      </div>
     </div>
    </div> 
  )
}

export default Login