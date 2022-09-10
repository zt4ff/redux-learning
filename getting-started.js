const { configureStore } = require("@reduxjs/toolkit");

// action creator
const incrementCounter = () => {
  return {
    type: "counter/incrementCounter",
  };
};

// initial value of the store
const initialState = { value: 0 };

const counterReducer = (state = initialState, action) => {
  if (action.type === "counter/incrementCounter") {
    return { ...state, value: state.value + 1 };
  }
  return state;
};

// creating the store
const store = configureStore({ reducer: counterReducer });

// dispath is how we can update the state in our store
store.dispatch(incrementCounter());

// with redux, we can create function to fetch specific data from the store
const getCountValue = (state) => state.value;

const currentCounter = getCountValue(store.getState());

console.log(currentCounter);
