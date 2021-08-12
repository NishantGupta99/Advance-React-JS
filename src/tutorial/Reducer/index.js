import React, { useState, useReducer } from 'react'
import Modal from "./Modal";
import { data } from "../data";

function Index() {
    const [name, setName] = useState('') // use state to take name input
    const [people, setPeople] = useState(data); 
    const [showModal, setShowModal] = useState(false);
    const handleSubmit = (e) => {
       e.preventDefault();
       
    }
    return (<>
        {showModal && <Modal />}
        <form onSubmit={handleSubmit} className='form'>
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <button type="submit"> add user</button>
        </form>             </>

    )
}

export default Index
