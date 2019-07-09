import React, { Component } from "react";

import "./ModeBar.css";
export default class SearchBar extends Component {
    render() {
        return (
            <div className="mode-bar">
                <ul>
                    <button onClick={()=>this.props.changemode('popular')}>POPULAR</button>
                    <button onClick={()=>this.props.changemode('top_rated')}>TOP-RATED</button>
                    <button onClick={()=>this.props.changemode('upcoming')}>UPCOMING</button>
                </ul>
            </div>
        );
    }
}
