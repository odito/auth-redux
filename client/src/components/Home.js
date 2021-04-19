import React from 'react';
import {useSelector} from 'react-redux'

const Home = () => {

const {auth} = useSelector(state=>({...state}))

console.log(auth);


    return (
        <div>
           <h1>Hello from home  </h1> 
        </div>
    )
}

export default Home
