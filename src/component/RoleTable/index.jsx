import React, { Component } from 'react'
import {  Table } from 'antd'
import { toTime } from '../../utils/toTime' 
export default class index extends Component {
    render() {
        const columns = [
            {
              title: '角色名称',
              dataIndex: 'name',
            },
            {
              title: '创建时间',
              dataIndex: 'create_time',
              render:(create_time)=>{
                return <span>{toTime(create_time)}</span>
              }
            },
            {
                title: '授权时间',
                dataIndex: 'auth_time',
                render:(auth_time)=>{
                  return <span>{toTime(auth_time)}</span>
                }
            },
            {
                title: '授权人',
                dataIndex: 'auth_name',
            }
          ]
        return (
            <Table  
            rowSelection={{type: "radio",onChange:(selectedRowKeys, selectedRows)=>this.onChange(selectedRowKeys, selectedRows)}} 
            columns={columns} dataSource={this.props.RoleData} 
            rowKey="_id"
            />
        )
    }
    onChange = (selectedRowKeys, selectedRows) =>{
      this.props.setRadioItem(selectedRows)
    }
}
