import React, { Component } from 'react';
import LevelButtons from './LevelButtons';

class LevelButtonsField extends Component {
  render() {
    const { disabled, input: { value, onChange } } = this.props;
    return (
      <LevelButtons
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    );
  }
};

export default LevelButtonsField;
