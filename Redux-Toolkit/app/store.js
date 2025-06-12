// Import the configureStore function and getDefaultMiddleware from Redux Toolkit
const configureStore = require("@reduxjs/toolkit").configureStore;
const { getDefaultMiddleware } = require("@reduxjs/toolkit");

// Import the cakeReducer and iceReducer from their respective modules
const cakeReducer = require("../features/cake/cakeSlice");
const iceReducer = require("../features/icecream/icecreamSlice");
const userReducer = require("../features/user/userSlice");
// Import Redux Logger for logging Redux actions
const reduxlogger = require("redux-logger");

// Create a logger instance
const logger = reduxlogger.createLogger();

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
module.exports = store;
