import React, { useState } from 'react'
// use state is a named import so we must must must must have the curly braces

// some basic rules of all hooks basically any import / function that starts with use 
// components name must be in upper case 
// must be in the function/ component body 
// cannot call conditionally 

function UseStateBasic() {
    const [day, setDay] = useState("Today is a rainy day :(");
    const handleClick = () => {
        if(day ==="Today is a rainy day :(") {
        setDay("Today is a bright and beautiful day!!")
        }
        else {
            setDay("Today is a rainy day :(")
        }

    };
    return (
        <div>
                <>
                <h1>{day}</h1>
                <button type="button" className="btn" onClick={handleClick} >
                    change my day 
                </button>
                </>
            
            {/*hdhfsdfjjsd*/}

        </div>
    )
}

export default UseStateBasic
