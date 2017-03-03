import React from 'react';
import { HelpBlock } from 'react-bootstrap';

const Error = ({ meta: { touched, error } }) => (touched && error ? <HelpBlock>{error}</HelpBlock> : null);

export default Error;
