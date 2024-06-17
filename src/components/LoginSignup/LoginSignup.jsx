import React, { useState } from "react";
import Styless from "./LoginSignup.module.scss";

const LoginSignup = () =>{
    
    const [action,setAction] = useState("Login");

    return(

        <div className={Styless.container}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
         <div className={Styless.header}>
            <div className={Styless.text}>{action}</div>
            <div className={Styless.underline}></div>
         </div>
            <div className={Styless.inputs}>
                {action==="Login"?<div></div>:<div className={Styless.input}>
                <i class="fa-solid fa-user"></i>
                    <input type="text" placeholder="Name" />
                </div>}
              

                <div className={Styless.input}>
                <i class="fa-solid fa-at"></i>
                    <input type="email" placeholder="Email" />
                </div>

                <div className={Styless.input}>
                <i class="fa-solid fa-key"></i>
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className={Styless.forgotpassword}>Forget Password <span>Click Here!</span></div>}

            

            <div className={Styless.submitcontainer}>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    );
}

export default LoginSignup;