// import { combineReducers } from 'redux';
// import authReducer from './authReducer';
// import errorReducer from './errorReducer';
// import profileReducer from './profileReducer';


// export default combineReducers({
//   auth: authReducer,
//   errors: errorReducer,
//   profile: profileReducer,
// })
const SET_CURRENT_USER = 'SET_CURRENT_USER';

export default function RootReducers(state = {},action){
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: action.payload
      }
    default:
      return state;
  }
}