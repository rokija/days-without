import { UPDATE_LIST } from "../constants";

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_LIST:
      return [...state, action.payload];
    default:
      return state;
  }
};
