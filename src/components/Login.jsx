import React,{useState,useContext} from 'react'
import { store } from '../App'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import './styles/login.css'
import { useNavigate } from 'react-router-dom';
// import { FaReact } from 'react-icons/fa';
import { FaArrowRightToBracket } from "react-icons/fa6";
const Login = () => {
    const [token,setToken]=useContext(store)
    const navigate = useNavigate();
    const [data,setData]=useState({
        email:'',
        password:''
    })
    const changehandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submithandler= e=>{
        e.preventDefault();
        axios.post('https://quiz-backend-4ecb.onrender.com/api/login',data).then(
            res => setToken(res.data.token)
        )
    }
    if(token){
        return <Navigate to='/dashboard'/>
    }
  return (
    <div className="login-container">
        <div className="login-box">
        <center>
        <button onClick={() => navigate('/')}className='cancel-button'> <FaArrowRightToBracket size={30} color="#f19034"/></button>
            <form onSubmit={submithandler} autoComplete='off'>
                <h3>Login</h3>
                <input type='email' name='email'onChange={changehandler} placeholder='enter email'/><br/>
                <input type='password' name='password'onChange={changehandler} placeholder='enter password'/><br/>
                <input type='submit' value="submit"/>
            </form>
        </center>
        </div>
    </div>
  )
}

export default Login