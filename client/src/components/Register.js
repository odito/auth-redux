import React, { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Register = () => {

    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


const handleSubmit = async(e)=>{
e.preventDefault();

try {
   
  const user = {
      name,
      email,
      password
  } 


const res = await axios.post("/register", user);

if(res.data){
    return toast.success(`Register success`)
}

setName('');
setEmail('');
setPassword('');


} catch (err) {
    if(err.response.status===400){
        toast.error(err.response.data.msg)
    }
}

}






    return (
        <div className="register">
           
         <form onSubmit={handleSubmit} >
          
         <div className="name label-input">
              <label htmlFor="name">Name</label>
              <input type="text"
               placeholder="your name..."
               value={name}
                 onChange={(e)=>setName(e.target.value)} 
                  />
          </div>

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

          <button type="submit">Register</button>

         </form>
        </div>
    )
}

export default Register
