import React from 'react'
import axios from 'axios'

function LearnJSON() {
    const handleClick = (b) => {
        const promise = axios.post("http://localhost:4000/users",{ // setting the port code
            name: "Peter" },{ // setting up th object we want or create 
                headers: {
                    ['content-type']: 'application/json' // setting the server type
                }}
                )
                promise.then(response => {
                    console.log(response); // this is used to console log our response from the server 
                })
                promise.catch(error=>{ 
                    console.error(error); // this is used to console our error in case we get one
                })
                let c = b ;
                console.log(c);
            }

        const getUsers = () =>
        {

        axios.get("http://localhost:4000/users").then(users => {
             {/*we are getting the data from our json server and then storing it in users and then consoling the array of the objects */}
                console.log(users);
            })
        }
    
   
    return (
        <>
        <h2>Random Title</h2>
        <button type="button" className="btn" onClick={handleClick}>
            post Users
        </button>
        <button type="button" className="btn" onClick={getUsers}>
            get Users
    </button>
        
        </>
    )
}

export default LearnJSON
