import React from 'react';
import { ButtonGroup, Button, ControlLabel } from 'react-bootstrap';
import { Error, FormGroup } from '../common';

const RadioGroupField = (props) => {
  const { name, label, options, input: { value, onChange }, meta } = props;

  return (
    <FormGroup meta={meta}>
      <div className="col-md-2">
        <ControlLabel htmlFor={name}>{label}</ControlLabel>
      </div>
      <div className="col-md-10">
        <div>
          <ButtonGroup justified>
            { options.map(option => (
              <Button
                href="#"
                key={`${name}-${option.id}`}
                active={value === option.id}
                onClick={() => onChange(option.id)}
              >
                {option.name}
              </Button>
            )) }
          </ButtonGroup>
        </div>
        <Error meta={meta} />
      </div>
    </FormGroup>
  );
};

export default RadioGroupField;
