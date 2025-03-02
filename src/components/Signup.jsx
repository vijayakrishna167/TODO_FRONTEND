import React,{useState} from 'react'
import axios from 'axios'

const Signup = () => {
    const [data,setData]=useState({
        name:'',
        email:'',
        password:''
    })
    const changehandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submithandler= e=>{
        e.preventDefault();
        axios.post('http://localhost:3000/api/register',data).then(
            res => alert(JSON.stringify(res.data))
        )
    }
  return (
    <div>
        <center>
            <form onSubmit={submithandler}>
                <h3>Signup</h3>
                <input type='text' name='name' onChange={changehandler} placeholder='enter your name'/><br/>
                <input type='email' name='email'onChange={changehandler} placeholder='enter email'/><br/>
                <input type='password' name='password'onChange={changehandler} placeholder='enter password'/><br/>
                <input type='submit' value="submit"/>
            </form>
        </center>
    </div>
  )
}

export default Signup