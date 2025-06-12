// Import the createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";
// Define the initial state for the cake slice
const initialState = {
  numOfCake: 10,
};

// Create a slice for the cake with its name and initial state
//creating slice it will auto generate actions and reducers for us
const cakeSlice = createSlice({
  name: "cake", // The name of the slice
  initialState, // The initial state of the slice

  // Define reducers to handle actions
  reducers: {
    ordered: (state) => {
      state.numOfCake--; // Decrement the number of cakes
    },
    restock: (state, action) => {
      state.numOfCake += action.payload; // Add the payload (number) to restock cakes
    },
  },
});

// Export the reducer from the cakeSlice module
export default cakeSlice.reducer;
export const { ordered, restock } = cakeSlice.actions
