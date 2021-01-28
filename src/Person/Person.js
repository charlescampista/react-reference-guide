import React from 'react';


const person = (props)  =>  {

    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am  {props.age} years old!</p>
            <p>{props.click}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <p>{ props.name }</p>
        </div> 
    );
    
}

export default person;
