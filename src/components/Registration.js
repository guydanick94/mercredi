import React,{useState,useEffect} from 'react';
import '../css/tailwindcss.css';
import Navbar from './Navbar';
import axios from 'axios';

function Signup(){
    const[firstname,setFirstname]=useState("");
    const[lastname,setlastname]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[loading,setLoading]=useState(false);
    const[messsage,setMessage]=useState("");
    
const handleForm=(e)=>{
    setLoading(true);
    e.preventDefault();

    const data={
        "firstname":firstname,
        "lastname":lastname,
        "phone":email,
       
        
    }
    //lets send data to end point
axios.post("http://localhost:8000/reg/endpoints",data)
.then((res)=>{
   console.log(res.data)
   setLoading(false)
   setMessage("account created successfully")
   })

   .catch((err)=>{  console.log(err); })



}
const clickHandle=()=>{

  setTimeout(() => {
      setLoading(false);
     
  }, 3000);
}

    return(
<div>
    <Navbar/>
<div className="flex flex-wrap mt-8 p-4">
    <div className="w-1/3">

    </div>
    <div className="w-1/3 mt-2 shadow-lg">
         

        <form onSubmit={handleForm} className=" p-4">
            <center>Create Account</center>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name 
      </label>
      <input value={firstname} onChange={event=>setFirstname(event.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Last Name 
      </label>
      <input value={lastname} onChange={event=>setlastname(event.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
      
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Email
      </label>
      <input value={email} onChange={event=>setEmail(event.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="Jane@gmail.com" />
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Password
      </label>
      <input value={password} onChange={event=>setPassword(event.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="password" placeholder="*****************" />
      <button name="" type="submit" onClick={clickHandle} className="bg-red-500 text-white py-2 px-2 rounded" value="Create Account">
      
      {loading?<span>  PLease wait...</span> :<span> create acount</span>}</button>
        </form>


</div>
        <div className="w-1/3">
        
        </div>
</div>


</div>)
}
export default Signup;
