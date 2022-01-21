import React from "react"
import "./homepage.css"


const Homepage = ({setLoginUser}) => {


    return (
        
        <div className="homepage">
            <h1>Hello {setLoginUser.name} </h1>
            <h2>Your email is : {setLoginUser.email}  </h2>
<br/><br/><br/>
<h3>Edit your Details</h3>
<br/><br/><br/>
           <form >
               Name:
               <input type="text" value={setLoginUser.name} /><br/><br/>
               Email:
               <input type="text" value={setLoginUser.email} /><br/><br/>
               Password:
               <input type="text" value={setLoginUser.password} /><br/><br/>
               <center><input type="submit" className="btn btn-success" value="Update"/></center>
           </form>
        </div>
    )
}

export default Homepage