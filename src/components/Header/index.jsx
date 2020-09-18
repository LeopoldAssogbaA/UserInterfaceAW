import React from 'react';
import { Menu, Dropdown, Button, PageHeader, AutoComplete, Input } from 'antd';

import './index.less';


const menu = (
  <Menu>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="2">
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item key="3">
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const SearchAuto = () => {

const customers = [
  { value: 'Jean Marche' },
  { value: 'Paul Dumont' },
  { value: 'Marie Dupont' },
  { value: 'Valérie Bouchet'}
];

 return (
  <AutoComplete
    style={{ width: 200 }}
    options={customers}
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  >
          <Input.Search size="middle" placeholder="Find a patient" enterButton />
    </AutoComplete>
  );
}



const Header = () =>  {
  return (
        <PageHeader
          className="site-page-header"
          title="AudioWizard"
          avatar={{ src: 'assets/LogoAW.png' }}
          subTitle="OnBoarding"
          extra={[
            <SearchAuto className="searchAuto" key="autoComplete"/>,
            <Dropdown overlay={menu} placement="bottomRight" key="menuDropdown">
              <Button>Menu</Button>
            </Dropdown>
          ]}
        />
  );
}




export default Header;
