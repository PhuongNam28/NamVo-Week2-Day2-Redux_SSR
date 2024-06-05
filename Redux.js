// Redux is a JS library pattern. We can use it to manage and update state of our application
// Redux helps us transmit the data from parent component to children component by storing data in a global STORE
// Redux will catch data from server

// We will use Redux when:
/*
1. we have an enormous state, or our state update frequently. 
2. we want to share the state between multiple components.
3. We have a complicated logic code.
*/ 

// In Redux
/*
1. Redux is a immutability pattern, that means we can't change the original state. Instead we will use spread in ES6 to create a new state.
2. Moreover, we can't use asynchronous, Math.random(), Date.now() or anything that isn't predictable. Because, when we are using Redux, our result can be predictable.
*/


// Architecture
/*
1. Reducer: reducer is a function which receive 2 arguments state and action. It is used to update state.
2. Action: action is a function which contains type and payload.
3. Dispatch: Dispatch is a function which updates state in our store.
*/

// HERE IS AN EXAMPLE, I WILL EXPLAIN MORE CLEARLY WHEN I DO A TODO APP WITH REDUX:


// actions.js
export const increment = () => ({
    type: 'INCREMENT',
  });
  
  export const decrement = () => ({
    type: 'DECREMENT',
  });
  
// reducer.js
const initialState = { count: 0 };
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}


// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button> {/* DISPATCH */}
        <button onClick={() => dispatch(decrement())}>Decrement</button> {/* DISPATCH */}
    </div>
  );
}

/*
Actions and Reducers: When the Increment or Decrement button is clicked, an action is dispatched. 
The reducer handles the action and returns a new state.
*/
