import React from "react";
import PropTypes from "prop-types";

import "./FourGrid-Collapse.css";

const FourGrid_Collapse = props => {
    const renderElements = () => {
        const gridElements = props.children.map((element, i) => {
            return (
                <div key={element.key} className="grid">
                    {element}
                </div>
            );
        });
        return gridElements;
    };
    return (
        <div className="rmdb-grid">
            <input type="checkbox" id={props.header} className="collapsegrid-input"></input>
            <label htmlFor={props.header} id="collapse_label"><h1>{props.header}</h1></label>
            <ul className="four-col-grid">{renderElements()}</ul>
        </div>
    );
};

FourGrid_Collapse.propTypes = {
    header: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired
};

export default FourGrid_Collapse;
