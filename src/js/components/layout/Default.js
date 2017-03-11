import React from 'react';
import AppLayout from './App';
import AdaccountSelector from '../../containers/AdaccountSelector';
import SubmitForm from '../../containers/SubmitForm';

const Layout = (props) => {
  const { name, email, currentAdaccountId } = props;
  let form;
  if (currentAdaccountId) {
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
        {form}
      </div>
    </AppLayout>
  );
};

export default Layout;
