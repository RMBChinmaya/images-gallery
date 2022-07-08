import React from 'react';
import { Spinner as Loader } from 'react-bootstrap';

const spinnerStyle = {
  position: 'absolute',
  top: 'cal(50% - 1rem)',
  left: 'cal(50% - 1rem)',
};

const Spinner = () => (
  <Loader style={spinnerStyle} animation="border" variant="primary" />
);

export default Spinner;
