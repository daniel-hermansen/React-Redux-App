import React from 'react';

const Dogs = props => {
    console.log("Doggies test: ", props.stuff);
    return (
        <div className= "dog-images" key= {props.id}>
            <img src={props.stuff} alt = "Image of random dog"/>
        </div>
    )
}

export default Dogs;