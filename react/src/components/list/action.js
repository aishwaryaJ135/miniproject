import { ADD_QUERY, GET_DATA_REQ } from "./types";

export const addQuery = (titleValue, queryvalue) => {
  return {
    type: ADD_QUERY,
    query: queryvalue,
    title: titleValue
  };
};

export const getData = item => {
  return {
    type: GET_DATA_REQ,
    item
  };
};
