import React, { Component } from 'react'
import { Form, Input, Button, Cascader } from 'antd'
export default class index extends Component {
    state = {
        categoryList:[],
    }
    
    render() {
        return (
        <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={this.props.updataData && {...this.props.updataData,category:[this.props.updataData.pCategoryId,this.props.updataData.categoryId]}}
        onFinish={(formData)=>this.props.addProduct(formData)}
        size='large'
        className="addUpdateForm"
        >
            <Form.Item label="商品名称" name="name" rules={[{ required: true, message: 'Missing area' }]}>
                <Input placeholder="商品名称" />
            </Form.Item>
            <Form.Item label="商品描述"  name="desc" rules={[{ required: true, message: 'Missing area' }]}>
                <Input.TextArea
                placeholder="商品描述"
                autoSize={{ minRows: 2, maxRows: 6 }}
                />
            </Form.Item>
            <Form.Item label="商品价格" name="price" rules={[{ required: true, message: 'Missing area' }]}>
                <Input prefix="￥" placeholder="商品价格" type="number"/>
            </Form.Item>
            <Form.Item label="商品分类 " name="category" rules={[{ required: true, message: 'Missing area' }]}>
                <Cascader  
                options={this.props.categoryList} 
                loadData={this.props.loadData}  
                changeOnSelect />
            </Form.Item>
            {/* <Form.Item label="商品图片" name="img" rules={[{ required: true, message: 'Missing area' }]}>

            </Form.Item> */}
            <Form.Item label="商品详情"  name="detail" rules={[{ required: true, message: 'Missing area' }]}>
                <Input.TextArea
                placeholder="商品详情"
                autoSize={{ minRows: 2, maxRows: 6 }}
                />
            </Form.Item>
                <Button  type="primary" htmlType="submit">{this.props.updataData?'修改商品':'添加商品'}</Button>
        </Form>
        )
    }
}
