import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

const NavBar: React.FC = () => {
    return (
        <div className="bg-gray-800 p-4">
            <Menu mode="horizontal" theme="dark">
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    Home
                </Menu.Item>
                <Menu.Item key="profile" icon={<UserOutlined />}>
                    Profile
                </Menu.Item>
                <Menu.Item key="settings" icon={<SettingOutlined />}>
                    Settings
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default NavBar;