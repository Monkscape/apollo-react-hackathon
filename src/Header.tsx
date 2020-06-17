import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import { UserOutlined, BarsOutlined } from '@ant-design/icons'

const Header = () => {
    return (
        <Menu mode="horizontal" theme="dark">
            <Menu.Item key="1" icon={<BarsOutlined />}>
                <NavLink to="/batteryrecords">Battery Records</NavLink>  
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined/>}>
                <NavLink to="/users">Users</NavLink>
            </Menu.Item>
        </Menu>
    )
}

export default Header
