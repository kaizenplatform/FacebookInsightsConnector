import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { ControlLabel, FormControl } from 'react-bootstrap';
import { Error, FormGroup } from '../common';

const DateRangeField = (props) => {
  const { name, label, input: { value, onChange }, meta, ...rest } = props;
  const { startDate, endDate } = value || {};
  let inputValue = '';
  if (startDate && endDate) {
    inputValue = `${startDate.format('YYYY/MM/DD')} - ${endDate.format('YYYY/MM/DD')}`;
  }

  return (
    <FormGroup meta={meta}>
      <div className="col-md-2">
        <ControlLabel htmlFor={name}>{label}</ControlLabel>
      </div>
      <div className="col-md-10">
        <div>
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            onApply={(_e, dr) => onChange({ startDate: dr.startDate, endDate: dr.endDate })}
            {...rest}
          >
            <FormControl
              type="text"
              name={name}
              value={inputValue}
              readOnly
            />
          </DateRangePicker>
        </div>
        <Error meta={meta} />
      </div>
    </FormGroup>
  );
};

export default DateRangeField;
