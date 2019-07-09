import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Pages/Header/Header";
import Headerlogged from "../components/Pages/Header/Headerlogged"
import {
    SET_USER,
    CLEAR_USER
} from "./../actions";


class HeaderContainer extends Component{
   
    componentDidMount() {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));
            this.props.SET_USER(user);
        }
    }
    
    render(){ 
        if(this.props.id){
            return (
                <Headerlogged profilePicURL={this.props.profilePicURL} name={this.props.name} logout={this.props.CLEAR_USER} userId={this.props.id}>                    
                </Headerlogged>
            );
        }
        else{
            return (
                <Header/>
            );
        }
    }
}
const mapStateToProps = state => {
    return state.user;
};
const mapDispatchToProps = {
    SET_USER,
    CLEAR_USER
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);