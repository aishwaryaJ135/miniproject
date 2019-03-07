import { ADD_QUERY } from "./types";

export const addQuery = queryvalue => {
  return {
    type: ADD_QUERY,
    query: queryvalue
  };
};
