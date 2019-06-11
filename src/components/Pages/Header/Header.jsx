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
                    <img
                        src="./images/login.png"
                        alt=""
                        className="login"
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;
