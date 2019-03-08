import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as d3 from "d3";

export class Report extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div>
        <h2>This is the Report</h2>
        <svg id={"miniSvg"} />
      </div>
    );
  }
}
const mapStateToProps = store => {
  let index = store.queries.findIndex(
    query => query.id === store.lastSelectedId
  );
  return {
    currSelectedItem: index > -1 ? store.queries[index] : {}
  };
};

const connected = connect(
  mapStateToProps,
  null
)(Report);
export default connected;
