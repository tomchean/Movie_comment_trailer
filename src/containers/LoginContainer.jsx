import React, { Component } from "react";
import SocialButton from '../components/Pages/Login/SocialButton'
import { connect } from "react-redux";

import {
    CLEAR_USER,
    ADD_USER
} from "./../actions";



class LoginContainer extends Component {

    handleSocialLogin = (user) => {
        localStorage.setItem( "user", JSON.stringify(user._profile) );
        this.props.ADD_USER(user);
        this.props.history.push("/");
    }
      
    handleSocialLoginFailure = (err) => {
    }
    
    render() {
        return (
            <div style={{width:'80%',margin:'20% auto',top:'100px'}}>
                <SocialButton
                provider='facebook'
                appId='470809556989398'
                onLoginSuccess={this.handleSocialLogin}
                onLoginFailure={this.handleSocialLoginFailure}
                >
                Login with Facebook
                </SocialButton>
                <SocialButton
                provider='google'
                appId='1071549838231-ai1mvkl3rtee87tjc5mkcambq1eln86a.apps.googleusercontent.com'
                onLoginSuccess={this.handleSocialLogin}
                onLoginFailure={this.handleSocialLoginFailure}
                >
                Login with Google
                </SocialButton>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.user;
};
const mapDispatchToProps = {
    ADD_USER,
    CLEAR_USER
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);