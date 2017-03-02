import React, { Component } from 'react';
import Select from 'react-select';

const itemRenderer = (item) => {
  return (
    <div>
      <span>{item.name}</span>
      <small style={{ marginLeft: "10px" }}>{item.id}</small>
    </div>
  );
};

class AdaccountsList extends Component {
  render() {
    const { input: { value, onBlur, onChange }, ...rest } = this.props;

    return (
      <Select
        optionRenderer={itemRenderer}
        valueRenderer={itemRenderer}
        labelKey="name"
        valueKey="id"
        clearable={false}
        menuContainerStyle={{'zIndex': 999}}
        value={value}
        onBlur={() => onBlur(value)}
        onChange={(x) => onChange(x.id)}
        {...rest}
      />
    );
  }
}

export default AdaccountsList;
