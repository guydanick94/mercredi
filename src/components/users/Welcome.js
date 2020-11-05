import React , {useState} from 'react';
import '../../css/tailwindcss.css'
import {useHistory} from 'react-router-dom';


function Welcome(){
const[localuser,setLocaluser]=useState("");
let history=useHistory();
const user=localStorage.getItem("username")

const Logout=()=>{
localStorage.removeItem("username");
history.push("/user-login")

}

if(!user){

    history.push("/user-login")
}

return (
 <>
<div> welcome to admin page</div>




 </>



)










}
export default Welcome;