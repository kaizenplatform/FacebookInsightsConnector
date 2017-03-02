import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchAdaccounts();
  }

  handleSubmit(data) {
    const { fbStatus } = this.props;
    const { adaccountId, level } = data;

    if (!adaccountId) { return }
    if (!level) { return }

    let connectionData = {
      level: level,
      path: "v2.8/" + adaccountId + "/insights",
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

  render() {
    const { handleSubmit, adaccounts, pristine, submitting } = this.props;

    return (
      <form className="form-horizontal" onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="form-group">
          <label htmlFor="ad_account" className="col-md-2 control-label">AdAccount</label>
          <div className="col-md-10">
            <Field
              name="adaccountId"
              component={AdaccountsList}
              options={adaccounts.all}
              isLoading={adaccounts.isFetching}
              disabled={adaccounts.isFetching || submitting}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="level" className="col-md-2 control-label">Level</label>
          <div className="col-md-10">
            <Field
              name="level"
              component={InsightsLevel}
              disabled={submitting}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          Get Facebook Insights Data!
        </button>
      </form>
    );
  }
};

SubmitForm = reduxForm({
  form: 'SubmitForm',
})(SubmitForm)

function mapStateToProps(state) {
  return {
    adaccounts: state.adaccounts,
    fbStatus: state.fbStatus,
  }
}

export default connect(mapStateToProps, { fetchAdaccounts })(SubmitForm);
