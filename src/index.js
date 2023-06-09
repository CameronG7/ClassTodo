import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore,combineReducers } from 'redux';

//  Action Types A bunch of action types normally go in 1 file
const ALTERCATION = 'ALTERCATION';

//  Action Creators
//by default, action creators must be PURE functions
//they cannot modify the input
// given the same input, they must always return the same output no matter what
// they cannot have side effects
const altercation = (numInvolved) => {
  return {
    type: ALTERCATION,
    payload: numInvolved,
  };
};


//  Reducers
const INITIAL_STATE = {
  numStaff: 99,
  numCars: 50,
  isNightShift: true,
};

const sarahReducer = (state = INITIAL_STATE, action) => {
  console.log('Hit at sarah reducer');
  console.log(action);
  switch (action.type) {
    case ALTERCATION:
      // whatever the reducer returns, becomes the new state
      return {
        ...state,
        numStaff: state.numStaff - (action.payload * 2),
        numCars: state.numCars - (action.payload * 1),
      };
    default:
      // if we dont care about action type, we return state by default
      //  to prevent ourselves from losing any state
      return state;
  }
};

const lauReducer = (state = INITIAL_STATE, action) => {
  console.log('Hit at lau reducer');
  console.log(action);
  switch (action.type) {
    
    default:
      // if we dont care about action type, we return state by default
      //  to prevent ourselves from losing any state
      return state;
  }
};

const chrisReducer = (state = INITIAL_STATE, action) => {
  console.log('Hit at chris reducer');
  console.log(action);
  switch (action.type) {
    case ALTERCATION:
      // whatever the reducer returns, becomes the new state
      return {
        ...state,
        numStaff: state.numStaff - (action.payload * 2),
        numCars: state.numCars - (action.payload * 1),
      };
    default:
      // if we dont care about action type, we return state by default
      //  to prevent ourselves from losing any state
      return state;
  }
};
const rootReducer = combineReducers({
  paramedics: sarahReducer,
  fireFighters: lauReducer,
  police: chrisReducer});



const store = createStore(rootReducer);

console.log(store);

console.log('state before dispatch');
console.log(store.getState());
console.log('----------------dispatching');
store.dispatch(altercation(2));
console.log(store.getState());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


//  Single Page Application