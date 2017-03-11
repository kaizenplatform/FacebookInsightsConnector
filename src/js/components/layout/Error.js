import React from 'react';
import { Alert } from 'react-bootstrap';
import AppLayout from './App';
import FbSignInLink from '../../components/FbSignInLink';
import env from '../../env';

const Layout = (_props) => {
  let signInLink;
  let warningMessage;
  if (!env.FB_APP_ID) {
    warningMessage = (<Alert bsStyle="danger">Please set FB_APP_ID</Alert>);
  } else {
    signInLink = <FbSignInLink />;
  }

  return (
    <AppLayout>
      {warningMessage}
      <div>
        {signInLink}
      </div>
    </AppLayout>
  );
};

export default Layout;
