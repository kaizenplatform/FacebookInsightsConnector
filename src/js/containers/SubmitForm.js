import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import moment from 'moment';
import LevelButtonsField from '../components/form/LevelButtonsField';
import DateRangeField from '../components/form/DateRangeField';
import insightsColumns from '../schema/insightsColumns';

const tableau = window.tableau;

const required = (value) => {
  return value ? undefined : 'Required';
};

let SubmitForm = class SubmitForm extends Component {
  static propTypes = {
    adaccounts: React.PropTypes.object.isRequired,
  }

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    const { adaccounts: { current }, fbStatus } = this.props;
    const { level, dateRange } = data;

    const connectionData = {
      path: `v2.8/${current}/insights`,
      schema: {
        id: `fb_insights_${level}`,
        alias: `FB Insights - ${level}`,
        columns: insightsColumns,
      },
      params: {
        level,
        access_token: fbStatus.token,
        fields: insightsColumns.map(x => x.id).join(','),
        time_increment: 1,
        time_range: {
          since: dateRange.startDate.format('YYYY-MM-DD'),
          until: dateRange.endDate.format('YYYY-MM-DD'),
        },
      },
    };

    tableau.connectionData = JSON.stringify(connectionData);
    tableau.connectionName = 'Facebook Insights Connector';
    tableau.submit();
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form className="form-horizontal" onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="form-group">
          <Field
            name="level"
            component={LevelButtonsField}
            disabled={submitting}
            validate={[required]}
          />
        </div>
        <div className="form-group">
          <Field
            name="dateRange"
            component={DateRangeField}
            disabled={submitting}
            locale={{ format: 'YYYY/MM/DD' }}
            validate={[required]}
          />
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
  initialValues: { level: 'campaign', dateRange: { startDate: moment().add(-30, 'd'), endDate: moment() } },
})(SubmitForm);

function mapStateToProps(state) {
  return {
    adaccounts: state.adaccounts,
    fbStatus: state.fbStatus,
  };
}

export default connect(mapStateToProps)(SubmitForm);
