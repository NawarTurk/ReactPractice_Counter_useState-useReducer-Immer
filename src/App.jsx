import React from 'react';
import CounterUseState from './CounterUseState';
import CounterUseReducer from './CounterUseReducer';
import CounterUseReducerImmer from './CounterUseReducerImmer'


function App() {   
    return (
        <>
        <h1>UseState</h1>
        <CounterUseState />
        <h1>UseReducer</h1>
        <CounterUseReducer />
        <h1>UseReducer and Immer Library</h1>
        <CounterUseReducerImmer></CounterUseReducerImmer>
        </>
    )
}

export default App;