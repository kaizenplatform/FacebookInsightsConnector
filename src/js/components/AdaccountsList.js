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
  constructor() {
    super();
    this.reloadAdaccounts = this.reloadAdaccounts.bind(this);
  }

  componentDidMount() {
    this.props.onFetchAdaccounts();
  }

  reloadAdaccounts(e) {
    e.preventDefault();
    this.props.onFetchAdaccounts();
  }

  render() {
    const { adaccounts } = this.props;
    let reloadButtonClass = "btn btn-default";
    if (adaccounts.isFetching) {
      reloadButtonClass += " disabled";
    }

    return (
      <div className="row">
        <div className="col-md-11">
          <Select
            name="adaccounts"
            value={adaccounts.selected}
            options={adaccounts.all}
            onChange={e => this.props.onChange(e.id)}
            optionRenderer={itemRenderer}
            valueRenderer={itemRenderer}
            labelKey="name"
            valueKey="id"
            clearable={false}
            isLoading={adaccounts.isFetching}
            disabled={adaccounts.isFetching}
          />
        </div>
        <div className="col-md-1">
          <button className={reloadButtonClass} onClick={this.reloadAdaccounts}>
            <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    );
  }
}

export default AdaccountsList;

