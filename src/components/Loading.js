import React from 'react';

//Loading image
import spinning from "../images/loader.gif"

const loading = () => {
    return (
        <div>
            <img src={spinning} alt='loading'/>            
            <h1>Loading...</h1>
        </div>
    );
};

export default loading;