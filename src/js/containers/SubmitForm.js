import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import FbObjectSelectField from '../components/form/FbObjectSelectField';
import LevelButtonsField from '../components/form/LevelButtonsField';
import DateRangeField from '../components/form/DateRangeField';
import schema from '../schema';
import { fetchAdaccounts, selectAdaccount } from '../actions';

const tableau = window.tableau;

const validate = ({ adaccountId, level, dateRange }) => {
  const errors = {};
  if (!adaccountId) {
    errors.adaccountId = 'Required'
  }
  if (!level) {
    errors.level = 'Required'
  }
  if (!dateRange || !dateRange.endDate || !dateRange.startDate) {
    errors.dateRange = 'Required'
  }
  return errors;
}

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
    const { adaccountId, level, dateRange } = data;

    let connectionData = {
      path: "v2.8/" + adaccountId + "/insights",
      schema: schema[level],
      params: {
        level,
        access_token: fbStatus.token,
        fields: schema[level].columns.map(x => x.id).join(','),
        time_increment: 1,
        time_range: {
          since: dateRange.startDate.format("YYYY-MM-DD"),
          until: dateRange.endDate.format("YYYY-MM-DD")
        },
      },
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
          <Field
            name="adaccountId"
            component={FbObjectSelectField}
            options={Object.values(adaccounts.all)}
            isLoading={adaccounts.isFetching}
            disabled={adaccounts.isFetching || submitting}
            clearable={false}
          />
        </div>
        <div className="form-group">
          <Field
            name="level"
            component={LevelButtonsField}
            disabled={submitting}
          />
        </div>
        <div className="form-group">
          <Field
            name="dateRange"
            component={DateRangeField}
            disabled={submitting}
            locale={{ format: 'YYYY/MM/DD' }}
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
  validate
})(SubmitForm)

function mapStateToProps(state) {
  return {
    adaccounts: state.adaccounts,
    fbStatus: state.fbStatus,
  }
}

export default connect(mapStateToProps, { fetchAdaccounts })(SubmitForm);
