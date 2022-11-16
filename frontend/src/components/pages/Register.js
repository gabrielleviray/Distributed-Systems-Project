import React from 'react'
import {Link} from 'react-router-dom'

const Register = ()=> {
    return(
        <div className="signin-template-card">
            <div className="card user-signin-card input-field">
                <h2 className="food-blog-logo">Food Blog</h2>

                <input
                type="text"
                placeholder="full name"
                />

                <input
                type="text"
                placeholder="email"
                />

                <input
                type="text"
                placeholder="username"
                />


                <input
                type="text"
                placeholder="password"
                />

                <button class="btn waves-effect waves-light #ff8a65 deep-orange lighten-2" >
                    Register
                </button>
                <h5>
                    <Link to= "/register">Already have an account?</Link>
                </h5>
            </div>
  
        </div>
    )
}

export default Register