import { ADD_DATA, DELETE_DATA } from "../constant/actionType";

export const reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_DATA:
      return [...state, action.payload];
    case DELETE_DATA:
      return state.filter((data) => data.email !== action.payload);
    default:
      return state;
  }
};
