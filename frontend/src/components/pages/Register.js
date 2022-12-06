import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import M from 'materialize-css'
import image from "../../images/food.jpg"

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
        <div style={{backgroundImage: `url(${image})`, position:"fixed", backgroundSize:"cover", minWidth: "100%",minHeight:"100%", backgroundPosition:"center"}}>
        <div className="signin-template-card">
            <div className="card user-signin-card input-field">
                {/* <h2 className="food-blog-logo">Food Blog</h2> */}
                {/* <h4>Learn, Share, and Create Recipes!</h4> */}
                <h2 className="food-blog-logo">Registration</h2>
                <h5><i>Food blog</i> is a web application for users who want to share their recipes and discover new foods! In addition,
                users are able to keep track of their own recipes on their account and follow other users!</h5> 
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
                type="email"
                placeholder="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />


                <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />

                <button className="btn waves-effect waves-light #ff8a65 deep-orange lighten-2" onClick={()=>PostData()}>
                    Register
                </button>
                <h5>
                    <Link to= "/login">Already have an account?</Link>
                </h5>
            </div>
  
        </div>
        </div>
    )
}

export default Register