import { ADD_QUERY, GET_DATA_SUC } from "./types";

const initialState = {
  lastSelectedId: -1,
  queries: []
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUERY: {
      let newQuery = {
        id: state.queries.length + 1,
        title: action.title,
        query: action.query
      };
      return {
        ...state,
        queries: [...state.queries, newQuery]
      };
    }
    case GET_DATA_SUC: {
      let currentItemIndex = state.queries.findIndex(
        item => item.id === action.id
      );
      let currentItem = state.queries[currentItemIndex];

      //Update data in item
      currentItem.data = action.data;

      return {
        lastSelectedId: action.id,
        queries: [
          ...state.queries.slice(0, currentItemIndex),
          currentItem,
          ...state.queries.slice(currentItemIndex + 1, state.queries.length)
        ]
      };
    }

    default:
      return state;
  }
};

export default listReducer;
