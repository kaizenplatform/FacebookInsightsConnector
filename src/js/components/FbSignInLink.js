import React from 'react';
import fb from '../utils/fb';
import env from '../env';

const FbSignInLink = (_props) => {
  const url = fb.getLogInUrl(env.FB_APP_ID, ['email', 'read_insights']);
  return (<button className="btn btn-primary" onClick={(_e) => { window.top.location = url; }}>Sign In</button>);
};

export default FbSignInLink;
