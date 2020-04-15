
import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
import Dog from "./dogs";

const DogsList = props => {
    return (
        <div>
            <button onClick={() => props.getData()}>
                {props.isLoading ? "error" : "Get Doggies"}
            </button>
            <div className= "dogs">
                {props.stuff 
                && 
                props.stuff.map((item, index) => 
                    <Dog key={index} stuff={item}/>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        stuff: state.stuff
    };
};

export default connect (
    mapStateToProps,
    { getData }
)(DogsList);