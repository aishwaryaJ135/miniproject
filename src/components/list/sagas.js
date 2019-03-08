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
  return [
    { date: "2013-01", value: "53" },
    { date: "2013-02", value: "165" },
    { date: "2013-03", value: "269" },
    { date: "2013-04", value: "344" },
    { date: "2013-05", value: "376" },
    { date: "2013-06", value: "410" },
    { date: "2013-07", value: "421" },
    { date: "2013-08", value: "405" },
    { date: "2013-09", value: "376" },
    { date: "2013-10", value: "359" },
    { date: "2013-11", value: "392" },
    { date: "2013-12", value: "433" },
    { date: "2014-01", value: "455" },
    { date: "2014-02", value: "478" }
  ];
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
