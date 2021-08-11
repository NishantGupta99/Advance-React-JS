import React from 'react'
import { data } from "./data";

function UseStateArray() {
    const [people,setPeople] = React.useState(data)

    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id );
        setPeople(newPeople);
    }
    return (
        <>
         {
             people.map((person) => {
                 const {id, name} = person;
                 return (
                     <div key={id} className ='item'>
                         <h4>{name}</h4>
                         <button onClick={() => removeItem(id)}> remove him </button>
                     </div>
                 )
             }
             )}
             <button className="btn" onClick={() =>setPeople([])}>
                 clear the Avengers
             </button>
        </>  
        
    )
}

export default UseStateArray
