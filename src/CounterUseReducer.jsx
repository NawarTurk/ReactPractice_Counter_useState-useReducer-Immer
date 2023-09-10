import React from 'react';
import {useReducer} from 'react';

const INCREMENT= 'increment';
const SET_VALUE_TO_ADD="change value to add";  // constant action type
const DECREMENT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add value to count';

function reducer (state, action) {

    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd:action.payload
            }
        case  ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd:0
            }
        default:
            return state;
    }
}  


function CounterUseReducer() {

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        valueToAdd: 0
    });

    function increment() {
        dispatch({
            type: INCREMENT
        });
    }

    function decrement() {
        dispatch({
            type: DECREMENT
        });
    }

    function handleChange(event) {
        const value = parseInt(event.target.value) || 0 
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        dispatch({
            type:ADD_VALUE_TO_COUNT,
        })
    }

    return (
        <>
            <h1>Count is {state.count}</h1> 
            <div>  
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add an amount</label>
                <input 
                    type="number" 
                    value={state.valueToAdd || ""} 
                    onChange={handleChange}
                />
                <button>Add</button>
            </form>
        </>
    )
}

export default CounterUseReducer;