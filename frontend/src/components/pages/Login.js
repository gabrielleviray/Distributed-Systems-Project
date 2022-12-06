import React, { useState, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import M from 'materialize-css'
import { AuthContext} from '../../App.js'
import image from "../../images/food.jpg"

const Login = ()=> {
    const {state, dispatch} = useContext(AuthContext)
    const history = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "Your email is invalid.", classes: "#b71c1c red darken-4"})
            return
        }
        fetch("/api/auth/login", {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            // console.log(data)
                if(data.error){
                    M.toast({html: data.error, classes: "#b71c1c red darken-4"})
                }
                else{
                    localStorage.setItem("jwt", data.token) // save token to local storage
                    localStorage.setItem("user", JSON.stringify(data)) // save user details to local storage
                    dispatch({type:"USER", payload:data})
                    M.toast({html: "Login successful!", classes: "#43a047 green darken-1"})
                    history('/')
                }
        }).catch(err=>{
            console.log(err)
        })
    
    }

    return(
        <div style={{backgroundImage: `url(${image})`, position:"fixed", backgroundSize:"cover", minWidth: "100%",minHeight:"100%", backgroundPosition:"center"}}>
        <div className="signin-template-card" >
            <div className="card user-signin-card input-field">
                <h2 className= "food-blog-logo">Login</h2>
                <h5><strong>Learn, Share, and Create Recipes! </strong></h5> 

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

                <button className="btn waves-effect waves-light #ff8a65 deep-orange lighten-2" onClick={()=>PostData()} >
                    Login
                </button>
                <h5>
                    <Link to= "/register">Don't have an account?</Link>
                </h5>
            </div>
  
        </div>
        </div>
    )
}

export default Login