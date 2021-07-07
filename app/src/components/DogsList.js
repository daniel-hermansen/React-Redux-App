
import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
import Dogs from "./dogs";

const DogsList = props => {
    return (
        <div>
            <button className = "dog-button" onClick={() => props.getData()}>
                {props.isLoading ? "Loading" : "Get Doggos"}
            </button>
            <div className= "dogs">
                {props.stuff 
                && 
                props.stuff.map((item, index) => 
                    <Dogs key={index} stuff={item}/>
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