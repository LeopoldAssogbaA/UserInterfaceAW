import React from 'react';
import { Menu } from 'antd';
import {
  FolderOpenOutlined,
  SolutionOutlined,
  TeamOutlined,
  NotificationOutlined,
  UserAddOutlined
} from '@ant-design/icons';

import './index.less'

const { SubMenu } = Menu;

const RightMenu = () => {

  return (
    <div className="menuContainer">
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
      >
        <Menu.Item key="1" icon={<UserAddOutlined />}>
          Nouveau patient
        </Menu.Item>
        <Menu.Item key="2" icon={<TeamOutlined />}>
          Liste des patients
        </Menu.Item>
        <Menu.Item key="3" icon={<SolutionOutlined />}>
          Suivis des traitements
        </Menu.Item>
        <SubMenu key="sub1" icon={<NotificationOutlined />} title="Prothèses auditives">
          <Menu.Item key="5">Matériel numéro 1</Menu.Item>
          <Menu.Item key="6">Matériel numéro 2</Menu.Item>
          <Menu.Item key="7">Matériel numéro 3</Menu.Item>
          <Menu.Item key="8">Matériel numéro 4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<FolderOpenOutlined />} title="Administration">
          <Menu.Item key="9">Rendez-vous</Menu.Item>
          <Menu.Item key="10">Séminaires</Menu.Item>
          <SubMenu key="sub3" title="Comptabilité">
            <Menu.Item key="11">Factures</Menu.Item>
            <Menu.Item key="12">Devis</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default RightMenu;