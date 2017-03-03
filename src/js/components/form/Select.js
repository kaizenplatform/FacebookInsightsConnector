import React from 'react';
import ReactSelect from 'react-select';

const itemRenderer = (item) => {
  return (
    <div>
      <span>{item.name}</span>
      <small style={{ marginLeft: '10px' }}>{item.id}</small>
    </div>
  );
};

const Select = (props) => {
  return (
    <ReactSelect
      optionRenderer={itemRenderer}
      valueRenderer={itemRenderer}
      labelKey="name"
      valueKey="id"
      clearable={false}
      menuContainerStyle={{ zIndex: 999 }}
      {...props}
    />
  );
};

export default Select;
