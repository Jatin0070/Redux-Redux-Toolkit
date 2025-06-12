// Import the configureStore function and getDefaultMiddleware from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
// Import the cakeReducer and iceReducer from their respective modules
import cakeReducer from "../features/cake/cakeSlice";
import iceReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";

// Configure the Redux store with reducers and middleware
const store = configureStore({
  reducer: {
    cake: cakeReducer, // Assign the cakeReducer to the "cake" slice
    ice: iceReducer, // Assign the iceReducer to the "ice" slice
    user: userReducer,
  },
  // Add the logger middleware to log Redux actions
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Export the configured Redux store
export default store;
