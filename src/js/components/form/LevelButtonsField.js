import React from 'react';
import LevelButtons from './LevelButtons';

const LevelButtonsField = (props) => {
  const { disabled, input: { value, onChange }, meta: { touched, error } } = props;
  let className;
  if (touched && error) {
    className = 'has-error';
  }

  return (
    <div className={className}>
      <label className="col-md-2 control-label">Level</label>
      <div className="col-md-10">
        <div>
          <LevelButtons
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
        </div>
        <div className="help-block">{touched && error}</div>
      </div>
    </div>
  );
};

export default LevelButtonsField;
