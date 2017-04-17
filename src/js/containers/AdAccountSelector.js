import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '../components/form/common/Select';
import { fetchAdAccounts, selectAdAccount } from '../actions';

class AdAccountSelector extends Component {
  componentDidMount() {
    this.props.fetchAdAccounts();
  }

  render() {
    const { adaccounts: { all, current, isFetching }, selectAdAccount } = this.props;

    return (
      <Select
        options={Object.values(all)}
        value={current}
        onChange={x => selectAdAccount(x.id)}
        isLoading={isFetching}
        disabled={isFetching}
        clearable={false}
        placeholder="Select AdAccount..."
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    adaccounts: state.adaccounts,
  };
}

export default connect(mapStateToProps, { fetchAdAccounts, selectAdAccount })(AdAccountSelector);
