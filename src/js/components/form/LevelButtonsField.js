import React, { Component } from 'react';
import LevelButtons from './LevelButtons';

class LevelButtonsField extends Component {
  render() {
    const { disabled, input: { value, name, onChange }, meta: { touched, error } } = this.props;
    let className;
    if (touched && error) {
      className = "has-error"
    }

    return (
      <div className={className}>
        <label htmlFor="level" className="col-md-2 control-label">Level</label>
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
  }
};

export default LevelButtonsField;
