import React from 'react'
import {Link} from 'react-router-dom'

const Login = ()=> {
    return(

        <div className="signin-template-card">
            <div className="card user-signin-card input-field">
                <h2 className= "food-blog-logo">Food Blog</h2>

                <input
                type="text"
                placeholder="username"
                />

                <input
                type="text"
                placeholder="password"
                />

                <button class="btn waves-effect waves-light #ff8a65 deep-orange lighten-2" >
                    Login
                </button>
                <h5>
                    <Link to= "/signin">Already have an account?</Link>
                </h5>
            </div>
  
        </div>
    )
}

export default Login