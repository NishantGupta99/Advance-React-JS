import React from 'react'
import { Link } from "react-router-dom";

function Error() {
    return (
        <div>
            <h2>Error 404 page not found </h2>
            <Link to="/" className='btn'>
                Go back to HomePage
            </Link>
            
        </div>
    )
}

export default Error
