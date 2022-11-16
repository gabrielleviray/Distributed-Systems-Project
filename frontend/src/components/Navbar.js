import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = ()=>{
    return(
        <nav>
        <div className="nav-wrapper white">
          <Link to="/" className="food-blog-font left">Food Blog</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to="login">Login</Link></li>
            <li><Link to="register">Register</Link></li>
            <li><Link to="profile">Profile</Link></li>
            <li><Link to="addRecipe">Add Recipe</Link></li>

          </ul>
        </div>
      </nav>
    )
}

export default NavBar