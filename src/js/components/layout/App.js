import React from 'react';

const Layout = (props) => {
  const { children } = props;

  return (
    <div className="container container-table">
      <div className="row vertical-center-row">
        <div className="col-md-8 col-md-offset-2">
          <h1>Facebook Insights Connector</h1>
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
