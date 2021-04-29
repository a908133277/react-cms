import React, { Component } from 'react'
import { Layout, Menu, Button } from 'antd';
import {
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    HomeOutlined,
    PoweroffOutlined
  } from '@ant-design/icons';
import { Link, withRouter } from 'react-router-dom'
import { getUser, removeUser } from '../../utils/storageUtils'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

 class index extends Component {
    state = {
        collapsed: false,
    }
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider 
                collapsible collapsed={this.state.collapsed} 
                onCollapse={this.onCollapse}
                >
                <Header className="site-layout-background" style={{ padding: 0 }} >
                </Header>
                <Menu theme="dark" 
                defaultSelectedKeys={[this.props.location.pathname]} 
                defaultOpenKeys = {this.props.location.pathname.split('/')[1]==="category"
                ?['category']
                :this.props.location.pathname.split('/')[1]==="product"
                ?['category']
                :[]} 
                mode="inline">
                    <Menu.Item key="/home" icon={<HomeOutlined/>}>
                        <Link to="/home">
                            首页
                        </Link>
                    </Menu.Item>
                    <SubMenu key='category' icon={<UserOutlined />} title="商品">
                    <Menu.Item key="/category">
                        <Link to="/category">
                            品类管理
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/product">
                        <Link to="/product">
                            商品管理
                        </Link>
                    </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="/user" icon={<FileOutlined />}>
                        <Link to="/user">
                            用户管理
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/role" icon={<FileOutlined />}>
                        <Link to="/role">
                            角色管理
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="图形列表">
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="7">Team 2</Menu.Item>
                    </SubMenu>
                </Menu>
                </Sider>
                <Layout className="site-layout">
                <Header className="layout_header" style={{ color:"#fff",textAlign:'right'}} >
                    <span className="username">用户名:{getUser()}</span> 
                    <Button
                    type="primary"
                    icon={<PoweroffOutlined />}
                    onClick={this.unlogin}
                    />
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: '100%' }}>
                    {
                        this.props.children
                    }
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
    unlogin=()=>{
        removeUser()
        this.props.history.replace('/login')
    }
}
export default withRouter(index)