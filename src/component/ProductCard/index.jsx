import React, { Component } from 'react'
import { Card, Button, Select, Input, Form } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import './ProductCard.scss'
export default class index extends Component {
    render() {
        const cardHeader = (
            <>
            <Form initialValues={{productType:'productName'}} 
            className="productForm" 
            layout="horizontal" 
            onFinish={(value)=>this.props.searchProductList(value)}> 
                <Form.Item name="productType">
                    <Select  style={{width:150}} >
                    <Select.Option value="productName">更具名称搜索</Select.Option>
                    <Select.Option value="productDesc">更具描述搜索</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name="productName">
                    <Input  style={{width:200}} placeholder="关键字"/>
                </Form.Item>
                <Button type="primary" htmlType="submit">搜索</Button>
            </Form>
            </>
        )
        const extra = (
            <Button type="primary" icon={<PlusOutlined />} onClick={()=>this.props.pushAddUpdate()}>
                添加商品
            </Button>
        )
        return (
            <Card title={cardHeader} extra={extra}>
                {this.props.children}
            </Card>
        )
    }
}
