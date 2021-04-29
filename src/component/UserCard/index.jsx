import React, { Component } from 'react'
import { Card, Button } from 'antd'
export default class index extends Component {
    render() {
        const cardHeader = (
        <Button 
        type="primary" 
        onClick = { ()=>{this.props.setShowAddUserModal(true,true)}}>创建用户</Button>
        )
        return (
            <Card title={cardHeader} bordered={false} style={{height:800}}>
                {
                    this.props.children
                }
            </Card>
        )
    }
}
