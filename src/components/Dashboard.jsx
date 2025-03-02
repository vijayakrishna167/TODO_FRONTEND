import React from 'react'
import { useState,useContext,useEffect } from 'react'
import { store } from '../App'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
const Dashboard = () => {
    const [token,setToken] =useContext(store);
    const [data,setData]=useState(null);
    useEffect(()=>{
        axios.get('http://localhost:3000/api/dash',{
            headers:{
                'x-token':token
            }
        }).then(res=>{setData(res.data)}).catch((err)=>console.log(err))
    },[token])
    if(!token){
        return <Navigate to='/login'/>
    }
  return (
    <div>{ data &&
        <center>
            welcome user : {data.exist.name};<br/>
            <button onClick={()=>setToken(null)}>logout</button>
        </center>
}
    </div>
  )
}

export default Dashboard