import React from 'react';
import { useNavigate, Navigate} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const ProtectedRoute = ({children}) => {

    const {user} = UserAuth();
    const navigate= useNavigate(); 

 if(!user) {
    return <Navigate to='/'/>; 
 }else{
    return children; 
 }

}

export default ProtectedRoute