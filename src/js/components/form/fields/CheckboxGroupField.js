import React from 'react';
import { ControlLabel, ButtonGroup, Button } from 'react-bootstrap';
import { Error, FormGroup } from '../common';

const eachSlice = (array, size = 1) => {
  const res = [];
  const sizeNum = parseInt(size, 10);
  for (let i = 0; i < array.length; i += sizeNum) {
    res.push(array.slice(i, i + sizeNum));
  }
  return res;
};

const CheckboxGroupField = ({ label, name, options, columnNumber = 1, input, meta }) => {
  const { onChange, value } = input;
  return (
    <FormGroup meta={meta}>
      <div className="col-md-2">
        <ControlLabel htmlFor={name}>{label}</ControlLabel>
      </div>
      <div className="col-md-10">
        { eachSlice(options, columnNumber).map(optionsSlice => (
          <div key={`${name}-slice-${optionsSlice.map(o => o.id).join('-')}`}>
            <ButtonGroup justified>
              { optionsSlice.map(option => (
                <Button
                  href="#"
                  key={`${name}-${option.id}`}
                  active={value.indexOf(option.id) !== -1}
                  onClick={() => {
                    const newValue = [...value];
                    if (value.indexOf(option.id) === -1) {
                      newValue.push(option.id);
                    } else {
                      newValue.splice(newValue.indexOf(option.name), 1);
                    }

                    return onChange(newValue);
                  }}
                >
                  {option.name}
                </Button>
              )) }
            </ButtonGroup>
          </div>
        )) }
        <Error meta={meta} />
      </div>
    </FormGroup>
  );
};

export default CheckboxGroupField;
