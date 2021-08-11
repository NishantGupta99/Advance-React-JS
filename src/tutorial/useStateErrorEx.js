import axios from 'axios';
import React, { useState } from 'react'

function UseStateErrorEx() {
    let title = "random title"; // its initial value is random title
    const handleClick = (b) => {
        const promise = axios.post("http://localhost:4000/users", {
            name: 'Nishant'
        }, {
            headers: {
                ['content-type']: 'application/json'
            }
        });
        promise.then(response => {
            console.log(response);
        });
        promise.catch(error =>{
            console.error(error);
        })
        let c = b;
        console.log(c);
    }
    const getUsers = ()=>{
        axios.get('http://localhost:4000/users')
            .then(users=> {
                console.log(users);
            })
    }
    return (<React.Fragment>
        <h2>{title}</h2>

        <button type="button" className="btn" onClick={handleClick} >
            send users
        </button>
        <button  className="btn" onClick={getUsers} >
           get users
        </button>
    </React.Fragment>

    );
};

export default UseStateErrorEx
