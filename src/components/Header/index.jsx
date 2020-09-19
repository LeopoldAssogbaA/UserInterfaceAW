import React from 'react';
import { Menu, Dropdown, Button, PageHeader, AutoComplete, Input } from 'antd';
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined
} from '@ant-design/icons';

import PATIENTS from '../../constants/patients';
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

const SearchAuto = () => {

  const patients = PATIENTS.map(item => ({ value: `${item.firstName} ${item.lastName}` }));

  return (
    <AutoComplete
      style={{ width: 200 }}
      options={patients}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    >
      <Input.Search size="middle" placeholder="Find a patient" enterButton />
    </AutoComplete>
  );
}



const Header = () => {
  return (
    <PageHeader
      className="site-page-header"
      title="AudioWizard"
      avatar={{ src: '/assets/LogoAW.png' }}
      subTitle="OnBoarding"
      extra={[
        <SearchAuto className="searchAuto" key="autoComplete" />,
        <Dropdown overlay={menu} placement="bottomRight" key="menuDropdown">
          <Button>Menu</Button>
        </Dropdown>
      ]}
    />
  );
}




export default Header;
