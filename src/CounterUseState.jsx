import React from 'react';
import {useState} from 'react';

function CounterUseState() {
    const [count, setCount] = useState(0);
    const [valueToAdd, setValueToAdd] =useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function handleChange(event) {
        const value = parseInt(event.target.value) || 0 // to handle the case when u delete the value in the input, 
                                                            // you endup with '', if it is parsed, it gives NaN
                                                            // NaN || 0 gives  Zero
                                                            // because NaN is falsy
                                                        //in the input, valueToAdd || "" to get rid of the annyoing zero that is always there
                                                            // if value to add is zero, it will put "" instead of zero
                                                            //because zero is falsy;
                                                            //<input 
                                                            //     type="number" 
                                                            //     value={valueToAdd || ""} 
                                                            //     onChange={handleChange}
                                                            // />
        setValueToAdd(value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setCount(count + valueToAdd);
        setValueToAdd(0);
    }

    return (
        <>
            <h1>Count is {count}</h1> 
            <div>  
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
            <form onSubmit={handleSubmit}>
                <kabel>Add an amount</kabel>
                <input 
                    type="number" 
                    value={valueToAdd || ""} 
                    onChange={handleChange}
                />
                <button>Add</button>
            </form>
        </>
    )
}

export default CounterUseState;