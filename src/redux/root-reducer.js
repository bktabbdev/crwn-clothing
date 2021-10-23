import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // tells redux-persist i want to use loacl storage (alternative is sessionStorage)

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  // JSON object specifiying options
  key: "root", // root means at what point we want to start storing
  storage,
  whitelist: ["cart"], //string names of reducers we want to store - don't persist user because being handled by firebase
};

//user is key and goes to user we want
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
