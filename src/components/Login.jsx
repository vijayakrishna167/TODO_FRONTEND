import React,{useState,useContext} from 'react'
import { store } from '../App'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const [token,setToken]=useContext(store)
    const [data,setData]=useState({
        email:'',
        password:''
    })
    const changehandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submithandler= e=>{
        e.preventDefault();
        axios.post('http://localhost:3000/api/login',data).then(
            res => setToken(res.data.token)
        )
    }
    if(token){
        return <Navigate to='/dashboard'/>
    }
  return (
    <div>
        <center>
            <form onSubmit={submithandler} autoComplete='off'>
                <h3>Login</h3>
                <input type='email' name='email'onChange={changehandler} placeholder='enter email'/><br/>
                <input type='password' name='password'onChange={changehandler} placeholder='enter password'/><br/>
                <input type='submit' value="submit"/>
            </form>
        </center>
    </div>
  )
}

export default Login