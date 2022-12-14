import React , { useEffect, createContext, useReducer, useContext }from 'react';
import NavBar from './components/Navbar'
import "./App.css"
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Profile from './components/pages/Profile'
import AddRecipe from './components/pages/AddRecipe'
import { reducer, initialState } from './reducers/useReducer'
import UserProfile from './components/pages/UserProfile'
import MyFeed from './components/pages/MyFeed'

export const AuthContext = createContext()

// Separate Component to access history
const Routing = () => {
  const history = useNavigate()
  const {state, dispatch} = useContext(AuthContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))

    //console.log(typeof(user), user)
    // if there is a user, push to home screen else redirect to login screen
    if(user){
      dispatch({type:"USER", payload:user})
      // history('/')
    } else {
      history('/login')
    }
    
  },[])
  return(
    // make sure only one route is active at a time
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addRecipe" element={<AddRecipe />} />
        <Route path="/user/:username" element= {<UserProfile />} />
        <Route path="/myFeed" element= {<MyFeed />} />
      </Routes>

  )
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AuthContext.Provider value={{state,dispatch}}>
    < BrowserRouter>
        <NavBar />
        <Routing />
    </BrowserRouter> 
    </AuthContext.Provider>
  );
}

export default App;
