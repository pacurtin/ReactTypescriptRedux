import React from 'react';
import './App.css';
import { createStore } from 'redux'
import {addTodo, toggleTodo} from './Actions';
import reducer from './Reducers';

const store = createStore(reducer);

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));

// Stop listening to state updates
unsubscribe();

const App: React.FC = () => {
  return (
    <div className="App">
      <button onClick={()=>doThing()}>
        Click me
      </button>
    </div>
  );
};

const doThing = ():any => {
  console.log('Hello');
};

export default App;
