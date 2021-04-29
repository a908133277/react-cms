import React, { Component } from 'react'
import { Button, Card } from 'antd'
import './UserCard.scss'
export default class index extends Component {
    render() {
        let titleE = (
            <>
            <span className="title_button">
                <Button type="primary" onClick={()=>this.props.onShowAddModal(true)}>创建角色</Button>
            </span>
            <span className="title_button">
                <Button type="primary" disabled={!this.props.RadioItem} onClick={()=>this.props.onshowAuthPole(true)}> 设置角色权限</Button>
            </span>
            </>
        )
        return (
            <div>
                <Card title={titleE} bordered={false} className="UserCard">
                    {
                        this.props.children
                    }
                </Card>
            </div>
        )
    }
}
