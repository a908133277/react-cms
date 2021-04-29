import React, { Component } from 'react'
import { Table } from 'antd'
export default class index extends Component {
    render() {
        const { subCategory, categorys, showsubCategory, unpdateShowModal, childrenCategory } = this.props
        const columns = [
            {
                title: '商品类型',
                dataIndex: 'name',
                key: '_id',
            },
            {
                title: '操作',
                key: '_id',
                width: 300,
                render: (item) => (
                    showsubCategory
                    ?<span className="category_a" 
                    onClick={()=>unpdateShowModal(item)}>
                        修改类型
                    </span>
                    :<>
                    <span className="category_a" 
                    onClick={()=>unpdateShowModal(item)}>
                        修改类型
                    </span>
                    <span className="category_a" 
                    onClick={()=>childrenCategory(item)}>
                        查看子类型
                    </span>
                    </>     
                )
            }
          ]
        if(showsubCategory){
            return subCategory
            &&<Table 
            dataSource={subCategory} 
            columns={columns} 
            rowKey="_id" />
        }else{
            return categorys
            &&<Table 
            dataSource={categorys} 
            columns={columns} 
            rowKey="_id" />
        }
    }                                                                          
}