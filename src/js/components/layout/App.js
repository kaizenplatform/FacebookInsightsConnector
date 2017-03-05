import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import AdaccountSelector from '../../containers/AdaccountSelector';
import SubmitForm from '../../containers/SubmitForm';
import FbSignInLink from '../../components/FbSignInLink';
import env from '../../env';

const App = (props) => {
  const { fbStatus: { status, email, name }, adaccounts: { current } } = props;
  let signInLink;
  let helloMessage;
  let main;
  if (!env.FB_APP_ID) {
    helloMessage = (<Alert bsStyle="danger">Please set FB_APP_ID</Alert>);
  } else if (status === 'connected') {
    helloMessage = (<h3>Hello {name} ({email})</h3>);
    let form;
    if (current) {
      form = (
        <div>
          <SubmitForm />
        </div>
      );
    }
    main = (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <AdaccountSelector />
        </div>
        {form}
      </div>
    );
  } else {
    signInLink = <FbSignInLink />;
  }

  return (
    <div className="container container-table">
      <div className="row vertical-center-row">
        <div className="col-md-8 col-md-offset-2">
          <h1>Facebook Insights Connector</h1>
          {helloMessage}
          {main}
          <div>
            {signInLink}
          </div>
        </div>
      </div>

      <div id="message" />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    fbStatus: state.fbStatus,
    adaccounts: state.adaccounts,
  };
}

export default connect(mapStateToProps)(App);
