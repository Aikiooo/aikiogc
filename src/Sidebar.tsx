import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to="/"><span>Latest News</span></Link>, '1', <PieChartOutlined />,),
  getItem(
    <Link to="/character-list">Character List</Link>,
    '2',
    <DesktopOutlined />,
  ),
  getItem(
    <Link to="/banner-history">Banner History</Link>,
    '3',
    <ContainerOutlined />,
  ),

  getItem('Tools', 'sub1', <MailOutlined />, [
    getItem(
      <Link to="/tools/gems-calculation">Gems calculation</Link>,
      '5',
    ),
    getItem(
      <Link to="/tools/damage-calculation">Damage calculation</Link>,
      '6',
    ),
    getItem('?', '7'),
    getItem('?', '8'),
  ]),

  getItem('Guides', 'sub2', <AppstoreOutlined />, [
    getItem(
      <Link to="/guides/demonic-beasts">Demonic Beasts</Link>,
      '9',
    ),
    getItem(
      <Link to="/guides/demon-king-battle">Demon King battle</Link>,
      '10',
    ),

    getItem('Submenu', 'sub3', null, [
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ]),
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: 256 }}>
      {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default Sidebar;