
// Import necessary modules
const redux = require("redux");
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const createStore = redux.createStore;
const axios = require("axios");

// Define the initial state for your Redux store
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Define action types
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";
const FETCH_USER_SUCCEDED = "FETCH_USER_SUCCEDED";

// Action creators to create actions
function fetchUserRequest() {
  return {
    type: FETCH_USERS_REQUESTED,
  };
}

function fetchUserSuccess(users) {
  return {
    type: FETCH_USER_SUCCEDED,
    payload: users,
  };
}

function fetchUserFailed(error) {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
}

// Reducer function to handle state changes based on actions
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCEDED:
      return {
        users: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        loading: true,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// Thunk function for asynchronous action
const fetchUsers = () => {
  return function (dispatch) {
    // Dispatch the request action
    dispatch(fetchUserRequest());

    // Fetch data using Axios
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // Extract user IDs from the response data
        const users = response.data.map((user) => user.id);

        // Dispatch the success action with the user IDs
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        // Dispatch the failure action with the error message
        dispatch(fetchUserFailed(error.message));
      });
  };
};

// Create the Redux store with the reducer and applyMiddleware for thunk
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// Subscribe to the store and log state changes
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch the fetchUsers action to initiate the asynchronous data fetching
store.dispatch(fetchUsers());
