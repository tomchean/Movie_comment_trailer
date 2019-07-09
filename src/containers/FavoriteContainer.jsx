import React, { Component } from "react";
import { connect } from "react-redux";

import Favorite from "./../components/Pages/Favorite/favorite"


class HomeContainer extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <Favorite
                id={this.props.id}
            />
        );
    }
}

const mapStateToProps = state => {
    return state.user;
};


export default connect(
    mapStateToProps,
)(HomeContainer);