import React, { Component } from 'react'
import { Modal, Form, Input, Button} from 'antd';
export default class AddRole extends Component {
    render() {
        return (
            <Modal title="添加角色"
             visible={true} 
             onCancel={()=>this.props.onShowAddModal(false)}
             footer={null}
             >
                <Form
                onFinish={(values)=>this.props.onAddRole(values)}
                >
                    <Form.Item name="roleName" label="角色名称">
                        <Input  rules={[{ required: true, message: 'Please input your password!' }]}/>
                    </Form.Item>
                    <div style={{textAlign:'right'}}>
                    <Button type="primary" htmlType="submit">添加</Button>
                    </div>
                </Form>
            </Modal>
        )
    }
}
