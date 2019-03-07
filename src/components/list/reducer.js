import { ADD_QUERY } from "./types";

const initialState = {
  queries: []
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUERY: {
      return {
        queries: [...state.queries, action.query]
      };
    }
    default:
      return state;
  }
};

export default listReducer;
