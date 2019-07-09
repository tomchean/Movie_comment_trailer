import React, { Component } from "react";
import { connect } from "react-redux";
import Evaluation from "./../components/Pages/Evaluation/Evaluation";

class EvaluationContainer extends Component {

    render() {
        return (
            <Evaluation
                userId={this.props.id}
                movie={this.props.movie}
            />
        );
    }
}

const mapStateToProps = state => {
    return state.user;
};

export default connect(
    mapStateToProps,
)(EvaluationContainer);
