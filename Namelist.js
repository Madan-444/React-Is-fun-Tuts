import React from 'react'
import Person from './Person'

function Namelist() {
    const names = ['Madan','Bikul','Sarita','Madan']
    const person  = [
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Clark',
            age:24,
            skill:'Javascript'
        },
        {
            id:3,
            name:'Diana',
            age:70,
            skill:'Python'
        }
    ] 
const nameList = names.map((name,index)=><h2 key = {index} > {index} {name}</h2>)
    return (
        <div> 
        {nameList}
        {/* <div>
            {
                names.map(name=><h2>{name}</h2>)
            }
        </div> */}
            
        </div>
    )
}

export default Namelist
