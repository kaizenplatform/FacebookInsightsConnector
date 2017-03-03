import React from 'react';
import Select from 'react-select';

const itemRenderer = item => (
  <div>
    <span>{item.name}</span>
    <small style={{ marginLeft: '10px' }}>{item.id}</small>
  </div>
  );

const FbObjectSelect = props => (
  <Select
    optionRenderer={itemRenderer}
    valueRenderer={itemRenderer}
    labelKey="name"
    valueKey="id"
    clearable={false}
    menuContainerStyle={{ zIndex: 999 }}
    {...props}
  />
  );

export default FbObjectSelect;
