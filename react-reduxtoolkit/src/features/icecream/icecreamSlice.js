// Import createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrderd } from "../cake/cakeSlice";
// Define the initial state for the ice cream slice
const initialState = {
  numOfIceCream: 20,
};

// Create a slice for the ice cream with its name and initial state
const iceSlice = createSlice({
  name: "ice", // The name of the slice
  initialState, // The initial state of the slice

  // Define reducers to handle actions
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--; // Decrement the number of ice cream
    },
    restock: (state, action) => {
      state.numOfIceCream += action.payload; // Add the payload (number) to restock ice cream
    },
  },

  // Define extra reducers using the builder
  extraReducers: (builder) => {
    // Add an extra reducer that listens to the "ordered" action from the cake slice
    builder.addCase(cakeOrderd, (state) => {
      state.numOfIceCream--; // Decrement the number of ice cream when a cake is ordered
    });
  },
});

// Export the reducer from the iceSlice module
export default iceSlice.reducer;

// Export the actions from the iceSlice module
export const { ordered, restock } = iceSlice.actions
