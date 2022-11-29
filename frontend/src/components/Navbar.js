import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../App'

const NavBar = ()=>{
  const {state, dispatch} = useContext(AuthContext)
  const history = useNavigate()
  const navBarList = () => {
    if(state){
      return [
        <li><Link to="profile">Profile</Link></li>,
        <li><Link to="addRecipe">Add Recipe</Link></li>,
        <li>
          <button className="btn #d32f2f red darken-2"
                  onClick={()=>{
                    localStorage.clear()
                    dispatch({type:"CLEAR"})
                    history('/login')
                  }}
                  >
              Logout
          </button>
        </li>
      ]
    } else {
        return [
        <li><Link to="login">Login</Link></li>,
        <li><Link to="register">Register</Link></li>
        ]
    }
  }
    return(
        <nav>
        <div className="nav-wrapper white">
          <Link to={state?"/":"/login"}className="food-blog-font left">Food Blog</Link>
          <ul id="nav-mobile" className="right">
            {navBarList()}
          </ul>
        </div>
      </nav>
    )
}

export default NavBar