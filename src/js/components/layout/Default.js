import React from 'react';
import AppLayout from './App';
import AdaccountSelector from '../../containers/AdaccountSelector';
import AdSetSelector from '../../containers/AdSetSelector';
import SubmitForm from '../../containers/SubmitForm';

const Layout = (props) => {
  const { name, email, currentAdaccountId } = props;
  let form;
  let adSet;
  if (currentAdaccountId) {
    adSet = (
      <div style={{ marginBottom: '20px' }}>
        <AdSetSelector currentAdAccountId={currentAdaccountId} />
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
          <AdaccountSelector />
        </div>
        {adSet}
        {form}
      </div>
    </AppLayout>
  );
};

export default Layout;
