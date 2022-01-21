import React from "react"
import "./homepage.css"
import axios from "axios";
import { useState } from "react";

const Homepage = ({setLoginUser}) => {


     const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",

    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const update = () => {
        const { name, email, password } = user
        if( name && email && password){
            axios.put(`http://localhost:8000/user/update/${setLoginUser._id}`, user)
            .then( res => {
                alert("User  Updated!")
            })
        } else {
            alert("invlid input")
        }
        
    }






    return (
        
        <div className="homepage">
            <h1>Hello {setLoginUser.name} </h1>
            <h2>Your email is : {setLoginUser.email}  </h2>
<br/><br/><br/>
<h3>Edit your Details</h3>
<br/><br/><br/>
            <div className="update">
            <input type="text" name="name" value={setLoginUser.name} placeholder="Your Name" onChange={ handleChange } required></input>
            <input type="text" name="email" value={setLoginUser.email} placeholder="Your Email" onChange={ handleChange } required></input>
            <input type="password"  name="password" value={setLoginUser.password} placeholder="Your Password" onChange={ handleChange } required></input>
            <div className="button" onClick={update} >Update</div>
            </div>
        </div>
    )
}

export default Homepage