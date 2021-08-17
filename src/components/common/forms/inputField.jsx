/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  type, name, value, ...otherprops
}) => (
  <input
    type={type}
    name={name}
    value={value}
    {...otherprops}
  />
);

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default InputField;
