// Import the Redux store
const store = require("./app/store");

// Import actions from the cakeSlice and icecreamSlice modules
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceActions = require("./features/icecream/icecreamSlice").iceActions;
const fetchUser=require('./features/user/userSlice').fetchUsers
// Subscribe to changes in the Redux store and log updates
const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

// Log the initial state of the Redux store
console.log("initial state", store.getState());

store.dispatch(fetchUser())

// Dispatch cake-related actions
// store.dispatch(cakeActions.ordered()); // Order a cake
// store.dispatch(cakeActions.ordered()); // Order another cake
// store.dispatch(cakeActions.ordered()); // Order another cake
// store.dispatch(cakeActions.restock(3)); // Restock the cakes by adding 3 more

// // Dispatch ice cream-related actions
// store.dispatch(iceActions.ordered()); // Order an ice cream
// store.dispatch(iceActions.ordered()); // Order another ice cream
// store.dispatch(iceActions.ordered()); // Order another ice cream
// store.dispatch(iceActions.restock(3)); // Restock the ice creams by adding 3 more

// Unsubscribe from the Redux store to stop logging updates
// unsubscribe();
