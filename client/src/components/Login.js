import React, { useState } from 'react'
import axios from 'axios';
import {toast} from 'react-toastify'
import {useHistory} from 'react-router-dom';
import {useDispatch} from  'react-redux';
 





const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();



const handleSubmit = async(e)=>{

e.preventDefault();

try {
    
const user = {
    email,
    password
}

const res = await axios.post("/login", user);

if(res.data){

// save user data to redux and localstorage

window.localStorage.setItem('auth',JSON.stringify(res.data))

dispatch({
    type:"LOGGED_IN",
    payload:res.data
})

history.push('/welcome')





}



} catch (err) {
    console.log(err);

    if(err.response.status===400){
        toast.error(err.response.data.msg)
    }
}






    }



    return (
        <div className="login">
        <form onSubmit={handleSubmit} >
          
 
           <div className="email label-input">
               <label htmlFor="email">Email</label>
               <input type="email" 
               placeholder="your email..."
               value={email}
               onChange={(e)=>setEmail(e.target.value)} 
               />
           </div>
 
           <div className="password label-input">
               <label htmlFor="password">Password</label>
               <input type="password"
                placeholder="your password..."
                value={password}
                onChange={(e)=>setPassword(e.target.value)} 
                />
           </div>
 
           <button type="submit">Login</button>
 
          </form>
       </div>
    )
}

export default Login
