import React, { Component } from 'react'
import { Card, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import './categoryCard.scss'
export default class index extends Component {
    render() {
        const { showsubCategory, setshowsubCategory, subItem, setshowModal, children } = this.props
        const extra =(
            <Button type="primary" icon={<PlusOutlined />} onClick={()=>setshowModal(1)}>
                添加
            </Button>
        )
        const cardHeader = (
            showsubCategory
            ?<div>
                <Button type="primary" onClick={()=>setshowsubCategory(false)} >返回一级</Button>
                <span className="cardTitle">{subItem.name}</span>
            </div>
            :<span>商品分类</span>
        )
        return (
            <Card title={cardHeader} extra={extra} style={{ width:'100%' }}>
                {
                children
                }
            </Card>
        )
    }
}
