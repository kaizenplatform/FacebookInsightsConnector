import React from 'react';
import { ControlLabel } from 'react-bootstrap';
import { Select, Error, FormGroup } from '../common';

const SelectField = (props) => {
  const { name, label, input: { value, onBlur, onChange }, meta, ...rest } = props;

  return (
    <FormGroup meta={meta}>
      <div className="col-md-2">
        <ControlLabel htmlFor={name}>{label}</ControlLabel>
      </div>
      <div className="col-md-10">
        <div>
          <Select
            value={value}
            name={name}
            onBlur={() => onBlur(value)}
            onChange={x => onChange(x.id)}
            {...rest}
          />
        </div>
        <Error meta={meta} />
      </div>
    </FormGroup>
  );
};

export default SelectField;
