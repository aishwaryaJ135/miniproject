import { takeLatest, call, put } from "redux-saga/effects";
import { GET_DATA_REQ, GET_DATA_SUC } from "./types";
import axios from "axios";

const getDataFromServer = query => {
  //   return axios
  //     .get(
  //       "http://bl.ocks.org/d3noob/raw/8952219/d45ad0a7caf9c499d1a1e975b3760c90f5321072/bar-data.csv"
  //     )
  //     .then(d => {
  //       console.log(d);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  let cat = ["A", "B", "C", "D"];
  return cat.map(d => ({ cat: d, ser: Math.random() * 100 }));
};

function* dataSaga(action) {
  let id = action.item.id;
  let query = action.item.query;

  //Get data from backend
  const data = yield call(getDataFromServer, query);

  //Update store by calling action with new data
  yield put({ type: GET_DATA_SUC, data, id });
}

export function* dataWatcher() {
  yield takeLatest(GET_DATA_REQ, dataSaga);
}
export default dataWatcher;
