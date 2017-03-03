import React from 'react';
import fb from '../utils/fb';

const FbSignOutLink = (_props) => {
  const url = fb.getLogOutUrl();
  return (<button className="btn btn-danger" onClick={(_e) => { window.top.location = url; }}>Sign Out</button>);
};

export default FbSignOutLink;
