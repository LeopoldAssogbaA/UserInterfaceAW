import React from 'react';
import { useHistory } from 'react-router-dom';
import { Menu, Dropdown, Button, PageHeader, AutoComplete, Input } from 'antd';
import { UserOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';

import './index.less';

const menu = (
  <Menu>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        <UserOutlined /> Mon compte
      </a>
    </Menu.Item>
    <Menu.Item key="2">
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        <LogoutOutlined /> Déconnexion
      </a>
    </Menu.Item>
    <Menu.Item key="3">
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        <SettingOutlined /> Options
      </a>
    </Menu.Item>
  </Menu>
);

const SearchAuto = ({ patients }) => {
  const history = useHistory();
  const data = patients.map((item, i) => ({ value: `${item.firstName} ${item.lastName}`}));

  const redirectToPatient = (patient) => {
    const patientName = patient.split(' ');
    const patientIndex = patients.findIndex(item => (item.firstName === patientName[0] && item.lastName === patientName[1]))
    
    history.push(`/patientCard/${patientIndex}`)
  };
  
  return (
    <AutoComplete
      onSelect={(item) => redirectToPatient(item)}
      style={{ width: 200 }}
      options={data}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    >
      <Input.Search size="middle" placeholder="Find a patient" enterButton />
    </AutoComplete>
  );
}

const Header = ({ patients }) => {
  return (
    <PageHeader
      className="site-page-header"
      title="AudioWizard"
      avatar={{ src: '/assets/LogoAW.png' }}
      subTitle="OnBoarding"
      extra={[
        <SearchAuto patients={patients} className="searchAuto" key="autoComplete" />,
        <Dropdown overlay={menu} placement="bottomRight" key="menuDropdown">
          <Button>Menu</Button>
        </Dropdown>
      ]}
    />
  );
}




export default Header;
