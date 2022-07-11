import Page from 'components/common/Page';
import Header from 'components/common/Header';
import React from 'react';
import Inforuser from '../components/InforUser';

function SettingAccount() {
  return (
    <Page
      title="Thiết lập tài khoản"
      header={<Header headerMobile="onlyTitle" titleMobile="Thiết lập tài khoản" />}
    >
      <Inforuser />
    </Page>
  );
}

export default SettingAccount;
