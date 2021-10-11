import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

//user is key and goes to user we want
export default combineReducers({
  user: userReducer,
});
