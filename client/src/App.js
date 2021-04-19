
import Navbar from './components/Navbar';
import Register from './components/Register'
import Login from './components/Login';
import Home from './components/Home';
import Welcome from './components/Welcome';
import ProtectedRoute from './components/ProtectedRoute';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './App.css';



function App() {


  return (


<BrowserRouter>
<div className="App">
  <Navbar />
  <ToastContainer style={{marginTop:"40px"}} />

  <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/register" component={Register} />
  <Route exact path="/login" component={Login} />
  {/* <Route exact path="/welcome" component={Welcome} /> */}

  <ProtectedRoute component={Welcome} />
  


  
  </Switch>
 


 
 </div>
</BrowserRouter>

  
  );
}

export default App;
