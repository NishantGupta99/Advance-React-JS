import React, { useState, useReducer } from 'react'
import Modal from "./Modal";
import { data } from "../data";
// lets import reducer
import  {reducer}  from './Reducer';


const defaultState = {
    people:data,
    isModalOpen: false,
    modalContent:"",
}


function Index() {
    const [name, setName] = useState('') // use state to take name input
    const [state,dispatch] = useReducer(reducer,defaultState) // here we have defined our reducer
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newItem = {id: new Date().getTime().toString(), name};
            dispatch({type:"ADD_ITEM" , payload: newItem});  
            setName("");       
        }
        else {
            dispatch({type:'No_VALUE'});           
        }
    }
    const closeModal = () => {
        dispatch({type: 'CLOSE_MODAL'});
    }
    return (<>
        {state.isModalOpen && (<Modal closeModal={closeModal} modalContent={state.modalContent} />)}
        <form onSubmit={handleSubmit} className='form'>
            <div>
                <input type="text"
                       value={name} 
                       onChange={(e) => setName(e.target.value)} />
            </div>
            <button type="submit"> add user</button>
        </form>
        {state.people.map((person) => {
            return <>
                <div key={person.id} className='item'>
                    <h4>{person.name}</h4>
                    <button onClick={()=>
                    dispatch({type:"REMOVE_ITEM", payload: person.id})}>remove</button>

                </div>
            </>
        }
        )}
    </>
    )
}
export default Index
