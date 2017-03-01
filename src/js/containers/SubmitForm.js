import React, { Component } from 'react';
import { Form, Text } from 'react-form';
import { connect } from 'react-redux';
import AdaccountsList from '../components/AdaccountsList';
import InsightsLevel from '../components/InsightsLevel';
import schema from '../schema';
import { fetchAdaccounts, selectAdaccount } from '../actions';

const tableau = window.tableau;

class SubmitForm extends Component {
  static propTypes = {
    adaccounts: React.PropTypes.object.isRequired
  }

  constructor() {
    super();
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { level: null };
  }

  handleClickSubmit(e) {
    e.preventDefault();
    const { adaccounts: { selected }, fbStatus } = this.props;
    const level = this.state.level;

    if (!selected) { return }
    if (!level) { return }

    let connectionData = {
      level: level,
      path: "v2.8/" + selected + "/insights",
      date_preset: 'lifetime',
      time_increment: 1,
      fields: schema[level].columns.map(x => x.id),
      token: fbStatus.token,
      schema: schema[level],
    };

    tableau.connectionData = JSON.stringify(connectionData);
    tableau.connectionName = "Facebook Insights Connector";
    tableau.submit();
  }

  handleChange(level) {
    this.setState({ level });
  }

  render() {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="ad_account" className="col-md-2 control-label">AdAccount</label>
          <div className="col-md-10">
            <AdaccountsList adaccounts={this.props.adaccounts} onFetchAdaccounts={this.props.fetchAdaccounts} onChange={this.props.selectAdaccount} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="level" className="col-md-2 control-label">Level</label>
          <div className="col-md-10">
            <InsightsLevel onChange={this.handleChange} value={this.state.level} />
          </div>
        </div>
        <button type="submit" className="btn btn-success" style={{margin: '10px'}} onClick={this.handleClickSubmit}>
          Get Facebook Insights Data!
        </button>
      </form>
    );
  }
};

function mapStateToProps(state) {
  return {
    adaccounts: state.adaccounts,
    fbStatus: state.fbStatus,
  }
}

export default connect(mapStateToProps, { fetchAdaccounts, selectAdaccount })(SubmitForm);

