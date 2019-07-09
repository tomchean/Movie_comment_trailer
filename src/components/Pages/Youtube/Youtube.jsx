import React from "react";

import "./Youtube.css";

const Youtube = ({videos}) =>{
    if(videos.results.length>0){
        const url = `https://www.youtube.com/embed/${videos.results[0].key}`
        return(
            <div className='youtube_container'>
                <iframe className='youtube' title=''
                    src={url} >
                </iframe>
            </div>
            
        )
    }
    else return(
        <div></div>
    )

}

export default Youtube;