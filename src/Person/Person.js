import React from 'react';
//import styled from 'styled-components'; //RETURNS A REACT COMPONENT WHENEVER USED

import classes from './Person.css'
//import './Person.css';

const person = (props)  =>  {

    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    //styled.div DOWN BELLOW RETURNS A REACT COMPONENT.
    // const StyledDiv = styled.div`

    // width: 60%;
    // margin: 16px auto;
    // border: 1px solid #eee;
    // box-shadow: 0 2px 3px #ccc;
    // padding: 16px;
    // text-align: center;

    // @media (min-width: 500px) {
    //     width: 450px;
    // }
    // `

    return (
        //<div className="Person" style={style}>
        
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am  {props.age} years old!</p>
            <p>{props.click}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <p>{ props.name }</p> 
        </div>

    );
    
}

export default person;

