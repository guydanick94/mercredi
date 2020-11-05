import React, {useState,useEffect} from 'react';
import '../css/tailwindcss.css';
import Navbar from './Navbar';
import axios from 'axios';
import {useHistory} from "react-router-dom";


function Login(){
    const[username, setUsername]=useState("")
    const[password, setPassword]=useState("")
    const[loading, setLoading]=useState(false)
    const[message, setMessage]=useState("")
    const[errorMessage,setErrorMessage]=useState("")
    let history=useHistory();
    const handleLogin=(e)=>{
        setLoading(true);
        e.preventDefault();
        const data={
            "username":username,
            "password":password

        }
        // lets send data to endpoins
        axios.post("http://127.0.0.1:8000/user-creation/",data)
        .then((res)=>{
            console.log(res.data)
            
            setMessage("Login successful")
            setLoading(false)
            setTimeout(()=>{
                setMessage("Login successful")
                setLoading(false)
                history.push('/user-welcome')
            },2000)
            // history.push('/')
            //saving data into local storage
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('username',res.data.username)

        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)
            setMessage("Login failed")
        })

    



    }
    return(
        <>
        <Navbar/>
        <div className="bgimg py-12">
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/4"></div>
                <div className="w-full md:w-2/4">
                    <div className="bg-gray-100 rounded-lg py-4 shadow-2xl">
                      <p className="px-4 font-weight-bold bg-green">{message}</p>

                        <form onSubmit={handleLogin} className="p-6">
                        <label>UserName</label>
                        <input type="text" name="username" value={username} onChange={event=>setUsername(event.target.value)} className="w-full border rounded-lg py-4 px-4" placeholder="username"/>
                        <label>Password</label>
                        <input type="text" name="username" value={password} onChange={event=>setPassword(event.target.value)}  className="w-full border rounded-lg py-4 px-4" placeholder="password"/>
    <center><button type="submit" className="w-full bg-blue-500 rounded-lg py-4 px-4 text-white mt-4">{loading?<span>please wait...</span>:<span>Login</span>}</button></center>
                        <br/>
                        <center><a href="/user.signup">Don't you have an account? Register here</a></center>
                        </form>
                    </div>
                </div>
                <div className="w-full md:w-1/4"></div>
            </div>
        </div>
        </>
    )
}
export default Login;