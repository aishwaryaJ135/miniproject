import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getData} from "./action"
export class List extends Component {
  static propTypes = {
    list: PropTypes.array
  };

  render() {
    return (
      <div>
        <h2>This is the list</h2>
        {this.props.list.map(item => (
          <div onClick={_=>{
            this.props.getData(item)
          }}>{item.title}</div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    list: store.queries
  };
};
const mapDispatchToProps={
  getData
}
const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default connected;
