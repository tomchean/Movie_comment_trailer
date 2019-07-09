import React from "react";
import "./Comments.css";
import Stars from"./Stars"

const comment = ({
    data:{
        content,
        stars
    },
}) => {
    return (
        <div className="comment">
            <div className="content">{content}</div>
            <Stars num={stars}></Stars>
        </div>
    );
};

export default comment;