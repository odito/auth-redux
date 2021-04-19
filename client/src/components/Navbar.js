import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Link, useHistory} from 'react-router-dom';






const Navbar = () => {

const {auth} = useSelector(state=>({...state}))
const dispatch = useDispatch();
const history = useHistory();


// logout
const logOut = ()=>{

dispatch({
    type:"LOGOUT",
    payload:null
})

window.localStorage.removeItem("auth")
history.push('/')


}




    return (
        <nav className="navbar">
           <Link to="/" className="logo">Logo</Link>

           <ul className="links">
               <li><Link to="/"  >Home</Link></li>


            {auth !==null && (

             <>
             <li><Link to="/welcome"  >welcome</Link></li>
               <li><Link to="/" onClick={logOut}  >logout</Link></li>
             
             </>

            )}


            {
                auth ===null && (
                 <>
                  <li><Link to="/register"  >register</Link></li>
               <li><Link to="/login"  >login</Link></li>
                 
                 
                 </>

                )
               
            }



               
              
           </ul>
        </nav>
    )
}

export default Navbar
