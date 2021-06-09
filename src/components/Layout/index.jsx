import React, { useEffect, useState } from 'react'

import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom';
import { useAuthDataContext } from "../helpers/AuthProvider";

const { Header, Content, Footer, Sider } = Layout;

import {
    SearchOutlined,
    LogoutOutlined,
    HomeOutlined
  } from '@ant-design/icons';
  
import '../commons/style.css'

const MainLayout = ({children}) => { 

    const { loggedIn , onLogout }  = useAuthDataContext();

    return (
    
    <Layout>
        {loggedIn &&
        <Sider  breakpoint="lg" collapsedWidth="0" style={{ minHeight: '100vh' }}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']} >         
                <Menu.Item key="0" icon={<HomeOutlined style={{verticalAlign : 'baseline'}}/>}>
                    <Link to="/home" > Início </Link>
                </Menu.Item>         
                <Menu.Item key="1" icon={<SearchOutlined style={{verticalAlign : 'baseline'}}/>}>
                    <Link to="/profile" > Profile </Link>
                </Menu.Item>         
                <Menu.Item key="2" icon={<SearchOutlined style={{verticalAlign : 'baseline'}}/>}>
                    <Link to="/map" > Places </Link>
                </Menu.Item>         
                {loggedIn && (
                <Menu.Item key="3" icon={<LogoutOutlined style={{verticalAlign : 'baseline'}}/>}>
                    <Link onClick={ onLogout } > Logoff </Link>
                </Menu.Item>
                )}
            </Menu>
        </Sider>
        }
        <Layout style={{border: '1px solid red'}}>
            <Content style={{ margin: '16px 16px 0', backgroundColor: '#f0f2f5', display: 'flex'}}>{children}</Content>
            <Footer style={{ textAlign: 'center' }}>
                Mesa Challenge - React<br/>
            </Footer>
        </Layout>
    </Layout>
)}

export default MainLayout;