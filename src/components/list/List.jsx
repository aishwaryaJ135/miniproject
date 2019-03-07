import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
export class List extends Component {
  static propTypes = {
    list: PropTypes.array
  };

  render() {
    return (
      <div>
        <h2>This is the list</h2>
        {this.props.list.map(item => (
          <div>{item}</div>
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

const connected = connect(
  mapStateToProps,
  null
)(List);

export default connected;
