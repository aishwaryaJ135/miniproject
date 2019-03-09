import React, { Component } from "react";
import PropTypes from "prop-types";
import { addQuery } from "../list/action";
import { connect } from "react-redux";
export class Form extends Component {
  static propTypes = {
    prop: PropTypes.array
  };

  render() {
    const _this = this;
    return (
      <div>
        <h2>This is the Form</h2>
        <div id="form">
          <input type="text" name="Title" placeholder="" ref={"titleField"} />
          <br />
          <input type="text" name="Query" placeholder="" ref={"queryField"} />
          <br />
          <button
            onClick={_ => {
              _this.props.addQuery(
                _this.refs.titleField.value,
                _this.refs.queryField.value
              );
            }}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  addQuery
};
const connected = connect(
  null,
  mapDispatchToProps
)(Form);

export default connected;
