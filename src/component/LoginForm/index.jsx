import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
export default class index extends Component {
    render() {
        return (
            <Form
            name="normal_login"
            initialValues={{
                remember: true,
            }}
            onFinish={this.props.onFinish}
            >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined/>} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                L o g i n
                </Button>
            </Form.Item>
            </Form>
        )
    }
}
