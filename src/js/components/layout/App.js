import React from 'react';
import { connect } from 'react-redux';
import SubmitForm from '../../containers/SubmitForm';
import FbSignInLink from '../../components/FbSignInLink';

const App = (props) => {
  const { fbStatus: { status, email, name } } = props;
  let signInLink;
  if (status !== 'connected') {
    signInLink = <FbSignInLink />;
  }
  let helloMessage;
  let form;
  if (status === 'connected') {
    helloMessage = (<h3>Hello {name} ({email})</h3>);
    form = (<SubmitForm />);
  }
  return (
    <div className="container container-table">
      <div className="row vertical-center-row">
        <div className="col-md-8 col-md-offset-2">
          <h1>Facebook Insights Connector</h1>
          {helloMessage}
          {form}
          <div>
            {signInLink}
          </div>
        </div>
      </div>

      <div id="message"></div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    fbStatus: state.fbStatus
  }
}

export default connect(mapStateToProps)(App);

