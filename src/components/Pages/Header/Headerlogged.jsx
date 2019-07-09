import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

    

const Header = ({profilePicURL,name,logout,userId}) => { 
    return (
        <React.Fragment>
            <header className="header">
            <div>
                <Link to="/">
                    <img
                        src="./images/reactMovie_logo.png"
                        alt=""
                        className="react-movie"
                    />
                </Link>
            </div>
            <button >
                <Link to="/favorite">
                    favorite
                </Link>
            </button>
            <div className="user_bar">
                <i className="fas fa-sign-out-alt login-icon  fa-3x" style={{color:"#16a150"}} onClick={logout}></i>
                <img
                    src={profilePicURL}
                    alt=""
                    className="profileimg"
                />
            </div>
        </header>        
        </React.Fragment>
        
    );
};

export default Header;
