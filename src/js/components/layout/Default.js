import React from 'react';
import AppLayout from './App';
import AdAccountSelector from '../../containers/AdAccountSelector';
import AdSetSelector from '../../containers/AdSetSelector';
import SubmitForm from '../../containers/SubmitForm';

const Layout = (props) => {
  const { name, email, currentAdAccountId } = props;
  let form;
  let adSet;
  if (currentAdAccountId) {
    adSet = (
      <div style={{ marginBottom: '20px' }}>
        <AdSetSelector currentAdAccountId={currentAdAccountId} />
      </div>
    );

    form = (
      <div>
        <SubmitForm />
      </div>
    );
  }

  return (
    <AppLayout>
      <h3>Hello {name} ({email})</h3>
      <div>
        <div style={{ marginBottom: '20px' }}>
          <AdAccountSelector />
        </div>
        {adSet}
        {form}
      </div>
    </AppLayout>
  );
};

export default Layout;
