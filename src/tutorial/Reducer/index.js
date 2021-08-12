import React, { useState, useReducer } from 'react'
import Modal from "./Modal";
import { data } from "../data";

function Index() {
    const [name, setName] = useState('') // use state to take name input
    const [people, setPeople] = useState(data); // we have created a program where we are taking values from user and displaying the same 
    const [showModal, setShowModal] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            setShowModal(true);
            setPeople([...people, { id: new Date().getTime().toString(), name }])
            setName('')
        }
        else {
            setShowModal(true)
        }
    }
    return (<>
        {showModal && <Modal />}
        <form onSubmit={handleSubmit} className='form'>
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <button type="submit"> add user</button>
        </form>
        {people.map((person) => {
            return <>
                <div key={person.id}>
                    <h4>{person.name}</h4>

                </div>
            </>
        }
        )}
    </>
    )
}
export default Index
