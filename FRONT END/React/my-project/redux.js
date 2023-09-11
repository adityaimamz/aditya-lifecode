// Import createStore dari Redux
import { legacy_createStore } from "redux";

// Definisikan initial state yang sesuai
const initialState = {
  cart: [{
    id: 1,
    qty: 20
  }],
};

// Buat reducer dengan initial state yang sesuai
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};

// Buat store dengan menggunakan reducer
const store = legacy_createStore(cartReducer);
console.log("oncreate store :", store.getState());

// subscribe dan dispatch bisa Anda tambahkan sesuai kebutuhan Anda
store.subscribe(() => {
  console.log("onchange store :", store.getState());
})

//dispatch
const action1= { type: "ADD_TO_CART", payload: {id: 1, qty: 20}};
store.dispatch(action1);

const action2 = { type: "ADD_TO_CART", payload: { id: 10, qty: 20 } };
store.dispatch(action2);