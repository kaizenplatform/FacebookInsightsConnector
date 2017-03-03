import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import moment from 'moment';
import RadioGroupField from '../components/form/fields/RadioGroupField';
import DateRangeField from '../components/form/fields/DateRangeField';
import CheckboxGroupField from '../components/form/fields/CheckboxGroupField';
import insightsColumns from '../schema/insightsColumns';
import insightsFields from '../schema/insightsFields';
import insightsConverters from '../schema/insightsConverters';
import insightsBreakdowns from '../schema/insightsBreakdowns';
import insightsLevels from '../schema/insightsLevels';

const tableau = window.tableau;

const required = (value) => {
  return value ? undefined : 'Required';
};

const validateBreakdown = (value) => {
  return !value || insightsBreakdowns.indexOf(value) ? undefined : 'Invalid';
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
    const { level, dateRange, breakdowns } = data;
    const fields = insightsFields.map(f => f.id);
    const targetSchemaIds = fields.slice().concat(breakdowns);

    const connectionData = {
      path: `v2.8/${current}/insights`,
      schema: {
        id: `fb_insights_${level}`,
        alias: `FB Insights - ${level}`,
        columns: insightsColumns.filter(c => (targetSchemaIds.indexOf(c.id) !== -1)),
      },
      params: {
        level,
        access_token: fbStatus.token,
        fields: fields.join(','),
        time_increment: 1,
        breakdowns,
        time_range: {
          since: dateRange.startDate.format('YYYY-MM-DD'),
          until: dateRange.endDate.format('YYYY-MM-DD'),
        },
      },
      converters: insightsConverters,
    };

    tableau.connectionData = JSON.stringify(connectionData);
    tableau.connectionName = 'Facebook Insights Connector';
    tableau.submit();
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="form-horizontal" onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="form-group">
          <Field
            component={RadioGroupField}
            name="level"
            label="Level"
            options={insightsLevels}
            validate={[required]}
          />
        </div>
        <div className="form-group">
          <Field
            component={DateRangeField}
            name="dateRange"
            label="Date Range"
            locale={{ format: 'YYYY/MM/DD' }}
            validate={[required]}
          />
        </div>
        <div className="form-group">
          <Field
            component={CheckboxGroupField}
            name="breakdowns"
            label="Breakdowns"
            options={insightsBreakdowns}
            columnNumber="4"
            validate={[validateBreakdown]}
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
