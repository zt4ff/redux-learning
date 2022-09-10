const { configureStore, createSlice } = require("@reduxjs/toolkit");

// slice is a collection of redux reducer logic and action for a single feature in your application
// slice for names
const nameSlice = createSlice({
  name: "name",
  initialState: [],
  reducers: {
    addName: (state, action) => [...state, action.payload],
  },
});

// slice for churches

const churchSlice = createSlice({
  name: "church",
  initialState: [],
  reducers: {
    addChurch: (state, action) => [...state, action.payload],
  },
});

// create the store
const store = configureStore({
  reducer: {
    name: nameSlice.reducer,
    church: churchSlice.reducer,
  },
});

// update the church store
store.dispatch({ type: "church/addChurch", payload: "FBC Alapere" });

// update the name store
store.dispatch({ type: "name/addName", payload: "Kayode" });

// selectore
const getNamesState = (state) => state.name;
const getChurchState = (state) => state.church;

console.log("NAME STORE: ", getNamesState(store.getState()));
console.log("CHURCH STORE: ", getChurchState(store.getState()));

console.log("WHOLE STATE: ", store.getState());
