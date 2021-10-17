import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

//state = sets default value
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      // when setcurrentuser is action type getting fired we want to return a new object representing the new state our user will form into, value will be ...state (everything else on state because we only want to modify the values we care about (currentUser)
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
