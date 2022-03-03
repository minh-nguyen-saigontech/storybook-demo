import React from "react";
import PropTypes from "prop-types";

const Checkbox = (props) => {
  const { checked, label } = props;
  return (
    <div>
      <input type="checkbox" checked={checked} />
      <label>{label}</label>
    </div>
  );
};

Checkbox.propTypes = {
  /**
   * Check or uncheck in checkbox
   */
  checked: PropTypes.bool,
  /**
   * Label of checkbox
   */
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  checked: false,
  label: "",
};

export default Checkbox;
