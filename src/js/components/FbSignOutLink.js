import React from 'react';
import fb from '../utils/fb';

const FbSignOutLink = (_props) => {
  const url = fb.getLogOutUrl();
  return (<a href={url} className="btn btn-danger">Sign Out</a>);
};

export default FbSignOutLink;

