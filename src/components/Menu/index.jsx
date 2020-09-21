import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { Menu } from 'antd';
import {
  FolderOpenOutlined,
  SolutionOutlined,
  TeamOutlined,
  NotificationOutlined,
  UserAddOutlined,
  HomeOutlined
} from '@ant-design/icons';

import './index.less'

const { SubMenu } = Menu;

const RightMenu = () => {
  const history = useHistory();
  const [path, setPath] = useState(window.location.pathname)

  const redirectTo = (i) => {
    setPath(i.key)
    history.push(i.key);
  }
  return (
    <div className="menuContainer">
      <Menu
        selectedKeys={[path]}
        mode="inline"
        theme="light"
      >
        <Menu.Item key="/" icon={<HomeOutlined />} onClick={redirectTo}>
          Accueil
        </Menu.Item>
        <Menu.Item key="/registration" icon={<UserAddOutlined />} onClick={redirectTo}>
          Nouveau patient
        </Menu.Item>
        <Menu.Item key="/patientList" icon={<TeamOutlined />} onClick={redirectTo}>
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