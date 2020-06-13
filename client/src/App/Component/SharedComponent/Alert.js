/** @format */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <SweetAlert
      type={"success"}
      title='Success Data!'
      onConfirm={this.onConfirm}
      onCancel={this.onCancel}
      timeout={2000}>
      This success message will automatically close after 2 seconds
    </SweetAlert>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Alert);
