import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '../components/form/common/Select';
import { fetchAdSets, selectAdSet } from '../actions';

class AdSetSelector extends Component {
  componentDidMount() {
    const { currentAdAccountId } = this.props;
    this.props.fetchAdSets(currentAdAccountId);
  }

  render() {
    const { adSets: { all, current, isFetching }, selectAdSet, currentAdAccountId } = this.props;

    if (currentAdAccountId) {
      return (
        <Select
          options={Object.values(all)}
          value={current}
          onChange={x => selectAdSet(x.id)}
          isLoading={isFetching}
          disabled={isFetching}
          clearable={false}
          placeholder="Select AdSet..."
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    adSets: state.adSets,
  };
}

export default connect(mapStateToProps, { fetchAdSets, selectAdSet })(AdSetSelector);
