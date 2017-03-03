import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { FormControl } from 'react-bootstrap';

const DateRangeField = (props) => {
  const { input: { value, name, onChange }, meta: { touched, error }, ...rest } = props;
  let className;
  if (touched && error) {
    className = 'has-error';
  }
  const { startDate, endDate } = value || {};
  let inputValue = '';
  if (startDate && endDate) {
    inputValue = `${startDate.format('YYYY/MM/DD')} - ${endDate.format('YYYY/MM/DD')}`;
  }

  return (
    <div className={className}>
      <label htmlFor={name} className="col-md-2 control-label">DateRange</label>
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
        <div className="help-block">{touched && error}</div>
      </div>
    </div>
  );
};

export default DateRangeField;
