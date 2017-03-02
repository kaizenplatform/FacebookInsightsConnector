import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import FbObjectSelectField from '../components/form/FbObjectSelectField';
import LevelButtonsField from '../components/form/LevelButtonsField';
import schema from '../schema';
import { fetchAdaccounts, selectAdaccount } from '../actions';

const tableau = window.tableau;

const validate = ({ adaccountId, level }) => {
  const errors = {};
  if (!adaccountId) {
    errors.adaccountId = 'Required'
  }
  if (!level) {
    errors.level = 'Required'
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
    const { adaccountId, level } = data;

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
    console.log(this.props)

    return (
      <form className="form-horizontal" onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="form-group">
          <Field
            name="adaccountId"
            component={FbObjectSelectField}
            options={adaccounts.all}
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
