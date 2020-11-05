import React,{component, useState} from 'react';

import download from '../image/download.jpg';

import Navbar from '../components/Navbar';
function Body(){

    const [ida,setIda]=useState(0);
    const [count,setCount] =useState(0);
    const [loading,setLoading]=useState('false');
    const [gy,setGy]=useState('Hello');
    const [now,setNow]=useState('onetwo');
    const clickHandle=()=>
    { 
        setLoading(true);
        setCount(count +1);
        setIda(ida+2);
        setGy("Hello Guy");
        setNow("updated");

        setTimeout(function () {

         setLoading(false);

        },3000)
        
        
        }


   
 return( 

    <div className="color2">

<Navbar/>

        <h1> welcome to my web {gy} </h1>

        
<h1>   State value:{count} </h1>
<h2>   State value:{ida} </h2>
<button onClick={clickHandle}>
{ loading?<p>  loading... </p>:<p>update me </p>}


<h1> {now} </h1>

</button>


<img src={download}/>





    </div>




 )

 }
export default Body;
