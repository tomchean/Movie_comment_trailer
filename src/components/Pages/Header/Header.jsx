import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
    return (
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
            <div>
                <Link to="/login">
                    <i className="fas fa-sign-in-alt login-icon"></i>
                </Link>
            </div>
        </header>
    );
};

export default Header;
