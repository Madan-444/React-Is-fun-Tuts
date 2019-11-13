import React from 'react'

function Person({person}) {
    return (
        <div>
        <h2>My name is {person.name}. I am {person.age} years old. I have {person.skill} skill</h2>
            
        </div>
    )
}

export default Person
