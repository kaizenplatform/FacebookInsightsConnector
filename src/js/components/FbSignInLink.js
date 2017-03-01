import React from 'react';
import fb from '../utils/fb';
import env from '../env';

const FbSignInLink = (_props) => {
  const url = fb.getLogInUrl(env.FB_APP_ID, ['email', 'read_insights']);
  return (<a href={url} className="btn btn-primary">Sign In</a>);
};

export default FbSignInLink;

