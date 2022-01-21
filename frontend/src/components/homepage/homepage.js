import React from "react"
import "./homepage.css"

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <h1>Hello  </h1>
            <h2>Your email is :  </h2>

            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage