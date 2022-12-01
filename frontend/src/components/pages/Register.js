import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import M from 'materialize-css'

const Register = ()=> {
    const history = useNavigate()
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "Your email is invalid.", classes: "#b71c1c red darken-4"})
            return
        }
        fetch("/api/auth/register", {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                username,
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
                if(data.error){
                    M.toast({html: data.error, classes: "#b71c1c red darken-4"})
                }
                else{
                    M.toast({html: data.message, classes: "#43a047 green darken-1"})
                    history('/login')
                }
        }).catch(err=>{
            console.log(err)
        })
    
    }

    return(
        <div className="signin-template-card">
            <div className="card user-signin-card input-field">
                <h2 className="food-blog-logo">Food Blog</h2>

                <input
                type="text"
                placeholder="full name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />


                <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />

                <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />


                <input
                type="text"
                placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />

                <button className="btn waves-effect waves-light #ff8a65 deep-orange lighten-2" onClick={()=>PostData()}>
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