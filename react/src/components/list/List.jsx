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
        <h2>List</h2>
        {this.props.list.map(item => (
          <button onClick={_=>{
            console.log(item);
            this.props.getData(item)
          }}>{item.title}</button>
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
