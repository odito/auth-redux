import React from 'react'
import {useSelector} from 'react-redux';

const Welcome = () => {

    const state = useSelector((state)=>(state))
    return (
        <div>
            <h1>welcome</h1>


    <h2>name:{state.auth.user.name}</h2>
    <h2>name:{state.auth.user.email}</h2>


        </div>
    )
}

export default Welcome
