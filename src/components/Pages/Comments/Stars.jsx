import React, { Component } from "react";
import "./Comments.css";

export default class SearchBar extends Component {
    static defaultProps = {
        rateNum: 10,
    }

    constructor (props) {
        super(props)
        this.state = {
            rateValue: this.props.num,
            rateArray: new Array(Number(props.rateNum)).fill('')
        }
    }
    render () {
        const {rateArray, rateValue} = this.state
        const {rateNum} = this.props
        return(
            <div className="stars">
                <div className="rate__bg">
                    {rateArray.map((item, index) => <span  key={`rate_${index}`}>☆</span>)}
                    <div className="bg__realrate" style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                        {rateArray.map((item, index) => <span key={`rate_selected_${index}`}>★</span>)}
                    </div>
                </div>
            </div>
        )            
    }
}
