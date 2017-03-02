import React, { Component } from 'react';
import FbObjectSelect from './FbObjectSelect';

class FbObjectSelectField extends Component {
  render() {
    const { input: { value, onBlur, onChange }, ...rest } = this.props;

    return (
      <FbObjectSelect
        value={value}
        onBlur={() => onBlur(value)}
        onChange={(x) => onChange(x.id)}
        {...rest}
      />
    );
  }
}

export default FbObjectSelectField;
