import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = ()=>{
    return(
        <nav>
        <div className="nav-wrapper white">
          <Link to="/" className="food-blog-font left">Food Blog</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to="signin">Login</Link></li>
            <li><Link to="signup">Signup</Link></li>
            <li><Link to="profile">Profile</Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar