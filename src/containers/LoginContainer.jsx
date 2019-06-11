import React, { Component } from "react";
import SocialButton from '../components/Pages/Login/SocialButton'
import { FacebookLoginButton } from "react-social-login-buttons"

const handleSocialLogin = (user) => {
    console.log(user)
}
  
const handleSocialLoginFailure = (err) => {
    console.error(err)
}



class MovieContainer extends Component {
    componentDidMount(){
        console.log('success')
    }

    render() {
        return (
            <div>
                <SocialButton
                provider='facebook'
                appId='470809556989398'
                onLoginSuccess={handleSocialLogin}
                onLoginFailure={handleSocialLoginFailure}
                >
                Login with Facebook
                </SocialButton>
                <SocialButton
                provider='google'
                appId='1071549838231-ai1mvkl3rtee87tjc5mkcambq1eln86a.apps.googleusercontent.com'
                onLoginSuccess={handleSocialLogin}
                onLoginFailure={handleSocialLoginFailure}
                >
                Login with Google
                </SocialButton>
            </div>
        );
    }
}


export default (MovieContainer);