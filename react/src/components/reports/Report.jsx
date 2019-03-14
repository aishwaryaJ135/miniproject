import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as d3 from "d3";

export class Report extends Component {
  static propTypes = {
    prop: PropTypes
  };

  //https://medium.com/@ridermansb/update-graph-in-d3-30baaebcc8c3
  draw() {
    const _this = this;
    let data = _this.props.currSelectedItem.data;
    var barHeight = 30;
    d3.selectAll("svg > *").remove();

    var bar = d3
      .select("#miniSvg")
      .selectAll(".rect")
      .data(data);


    bar
      .enter()
      .append("rect")
      .attr("class", "rect")
      .attr("width", function(d) {
        return d.ser;
      })
      .attr("height", barHeight - 1)
      .attr("transform", function(d, i) {
        return "translate(0," + i * barHeight + ")";
      });
  }

  render() {
    return (
      <div>
        <h2>Report Chart</h2>
        <svg id={"miniSvg"} />
        {this.props.currSelectedItem.data ? this.draw() : null}
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
