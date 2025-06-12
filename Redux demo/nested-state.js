const redux = require("redux");
const produce = require("immer").produce;
const initialState = {
  name: "jatin",
  address: {
    street: "12332 main st",
    city: "RBL",
    state: "UP",
  },
};
const street_update = "street_update";

function updateStreet(street) {
  return { type: street_update, payload: street };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case street_update:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = redux.createStore(reducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(updateStreet("223k"));
unsubscribe();
