const redux = require("redux");
const createStore = redux.createStore;
const cake_ordered = "Cake-Ordered";
const cake_restorcked = "cake_restorcked";
const iceCream_ordered = "IceCream-Ordered";
const iceCream_restorcked = "IceCream_restorcked";
const combineReducer = redux.combineReducers;
const bindActionCreators = redux.bindActionCreators;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require("redux-logger");
//logger middleware
const logger = reduxLogger.createLogger();
//defining actions
function orderCake() {
  return {
    type: cake_ordered,
    payload: 1,
  };
}
function cakeRestorcked(qty = 1) {
  return {
    type: cake_restorcked,
    payload: qty,
  };
}
function orderIceCream(qty = 1) {
  return {
    type: iceCream_ordered,
    payload: qty,
  };
}
function iceCreamRestorcked(qty = 1) {
  return {
    type: iceCream_restorcked,
    payload: qty,
  };
}

const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCreams: 20,
};

//defining reducers
// (previousState,action)=>newState
const cakereducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case cake_ordered:
      return { numOfCakes: state.numOfCakes - 1 };
    case cake_restorcked:
      return { ...state, numOfCakes: state.numOfCakes + action.payload };
    default:
      return state;
  }
};
const icereducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case iceCream_ordered:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    case iceCream_restorcked:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

//combine reducer
const rootReducer = combineReducer({ cake: cakereducer, ice: icereducer });

//store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {});

const actions = bindActionCreators(
  { orderCake, cakeRestorcked, orderIceCream, iceCreamRestorcked },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.cakeRestorcked(3);
actions.orderIceCream(1);
actions.orderIceCream(1);
actions.iceCreamRestorcked(2);
unsubscribe();
