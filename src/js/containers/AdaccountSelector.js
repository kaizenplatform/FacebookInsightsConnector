import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '../components/form/Select';
import { fetchAdaccounts, selectAdaccount } from '../actions';

class AdaccountSelector extends Component {
  componentDidMount() {
    this.props.fetchAdaccounts();
  }

  render() {
    const { adaccounts: { all, current, isFetching }, selectAdaccount } = this.props;

    return (
      <Select
        options={Object.values(all)}
        value={current}
        onChange={x => selectAdaccount(x.id)}
        isLoading={isFetching}
        disabled={isFetching}
        clearable={false}
        placeholder="Select Adaccount..."
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    adaccounts: state.adaccounts,
  };
}

export default connect(mapStateToProps, { fetchAdaccounts, selectAdaccount })(AdaccountSelector);
