import { takeLatest, call, put } from "redux-saga/effects";
import { GET_DATA_REQ, GET_DATA_SUC } from "./types";
import axios from "axios";

const getDataFromServer = query => {
  return axios
    .post("http://localhost:9000/run", { query })
    .then(d => {
      console.log(d);
      return d;
    })
    .catch(e => {
      console.log(e);
    });
  // let cat = ["A", "B", "C", "D"];
  // return cat.map(d => ({ cat: d, ser: Math.random() * 100 }));
};

function* dataSaga(action) {
  let id = action.item.id;
  let query = action.item.query;

  //Get data from backend
  const data = yield call(getDataFromServer, query);

  //Update store by calling action with new data
  yield put({ type: GET_DATA_SUC, data: data.data, id });
}

export function* dataWatcher() {
  yield takeLatest(GET_DATA_REQ, dataSaga);
}
export default dataWatcher;
