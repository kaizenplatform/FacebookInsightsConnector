import React from 'react';
import { FormGroup as OrgFormGroup } from 'react-bootstrap';

const FormGroup = ({ meta: { touched, error }, children }) => {
  let validationState;
  if (touched && error) {
    validationState = 'error';
  }

  return (
    <OrgFormGroup validationState={validationState}>
      {children}
    </OrgFormGroup>
  );
};

export default FormGroup;
