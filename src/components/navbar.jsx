import { useState } from "react";
import "../styles/navbar.css"

const Navbar = () => {

    const [loginStatus, setLoginStatus] = useState(false);
    const [signUpStatus, setSignUpStatus] = useState(true);

    return(
        <div className="navbar">
            <div className="left">
                <p className="brand">Rentide</p>
            </div>
            <div className="center menus">
                <span><a href="#home">Home</a></span>
                <span><a href="#business">Business</a></span>
                <span><a href="#features">Features</a></span>
                <span><a href="#newsletter">Connect</a></span>
            </div>
            <div className="right buttons">
                <span>
                    <button
                    className={loginStatus==false ? "btn-hover inactive" : "btn-hover active"}
                    onClick={
                        () => {
                        setLoginStatus(true) 
                        setSignUpStatus(false)}
                    }
                    type="button">
                    Login
                    </button>
                </span>
                <span>
                    <button
                    className={signUpStatus==true ? "btn-hover active" : "btn-hover inactive"}
                    onClick={
                        () => {
                        setLoginStatus(false) 
                        setSignUpStatus(true)}
                    }
                    type="button">
                    Sign up
                    </button>
                </span>
            </div>
        </div>
    )
}

export default Navbar;