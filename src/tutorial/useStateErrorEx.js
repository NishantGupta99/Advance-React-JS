import React, { useState } from 'react'

function UseStateErrorEx() {
    let title = "random title"; // its initial value is random title
    const handleClick = (b) => {
        
        let c = b;
        console.log(c);
    }

    return (<React.Fragment>
        <h2>{title}</h2>
        <button type="button" className="btn" onClick={handleClick(800000)} >
            change title
        </button>
    </React.Fragment>

    );
};

export default UseStateErrorEx
