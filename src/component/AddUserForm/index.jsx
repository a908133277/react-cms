import React, { Component } from 'react'
import { Form, Button, Input, Cascader } from 'antd'
export default class index extends Component {
    render() {
        const formItemLayout = {
            labelCol: {
              span: 4,
            },
            wrapperCol: {
              span: 20,
            },
        }
        const clickItem = {...this.props.clickItem}
        clickItem.role_id=[clickItem.role_id]
        return (
        <Form
        initialValues={this.props.addAndUpdate?{}:clickItem}
        onFinish = {
            (formdata)=>{
                if(this.props.addAndUpdate){
                    this.props.addUser(formdata)
                }else{
                    this.props.updateUser({_id:clickItem._id,...formdata})
                }
            }
        }
        >
            <Form.Item label="角色" name="role_id" {...formItemLayout}>
            <Cascader options={this.props.RoleData} placeholder="Please select" />
            </Form.Item>
            <Form.Item label="用户名" name="username" {...formItemLayout}>
                <Input placeholder="用户名" />
            </Form.Item>
            {
                this.props.addAndUpdate
                &&<Form.Item label="密码" name="password" {...formItemLayout}>
                    <Input placeholder="密码" />
                </Form.Item>
            }
            <Form.Item label="手机号" name="phone" {...formItemLayout}>
                <Input placeholder="手机号" />
            </Form.Item>
            <Form.Item label="邮箱" name="email" {...formItemLayout}>
                <Input placeholder="邮箱" />
            </Form.Item>
            <Form.Item>
                <div style={{textAlign:'right'}}>
                    <Button type="primary" htmlType="submit">{this.props.addAndUpdate?'添加用户':'修改用户'}</Button>
                </div>
            </Form.Item>
        </Form>
        )
    }
}
