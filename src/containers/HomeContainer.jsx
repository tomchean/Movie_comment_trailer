import React, { Component } from "react";
import { connect } from "react-redux";

import Home from "./../components/Home/Home";

import {
    showLoadingSpinner,
    getMovies,
    searchMovies,
    loadMoreMovies,
    clearMovies,
    setPopularState,
    changemode
} from "./../actions";

class HomeContainer extends Component {
    componentDidMount() {
        /*if (localStorage.getItem("HomeStorage")) {
            const home = JSON.parse(localStorage.getItem("HomeStorage"));
            this.props.setPopularState(home);
        } else {
            this.getMovies();
        }*/
        this.getMovies(this.props.displaymode);
    }

    componentDidUpdate() {
        /*
        // First check movies loaded or not
        if (this.props.movies.length > 0) {
            if (this.props.searchTerm === "") {
                localStorage.setItem("HomeStorage", JSON.stringify(this.props));
            }
        }*/
    }

    getMovies = (mode) => {
        this.props.showLoadingSpinner();
        this.props.getMovies(mode);
    };

    searchMovies = (searchTerm) => {
        const {displaymode} =  this.props;
        this.props.clearMovies();
        this.props.showLoadingSpinner();
        this.props.searchMovies(searchTerm,displaymode);
    };

    loadMoreMovies = () => {
        const { searchTerm, currentPage,displaymode } = this.props;

        this.props.showLoadingSpinner();
        this.props.loadMoreMovies(searchTerm, currentPage,displaymode);
    };
    changemode = (mode) =>{
        this.props.changemode(mode);
        this.props.clearMovies();
        this.props.showLoadingSpinner();
        this.props.getMovies(mode);
    }

    render() {
        return (
            <Home
                {...this.props}
                searchMovies={this.searchMovies}
                loadMoreMovies={this.loadMoreMovies}
                changemode = {this.changemode}
            />
        );
    }
}

const mapStateToProps = state => {
    return state.home;
};

const mapDispatchToProps = {
    showLoadingSpinner,
    getMovies,
    searchMovies,
    loadMoreMovies,
    clearMovies,
    setPopularState,
    changemode
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);