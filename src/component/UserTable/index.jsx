import React, { Component } from 'react'
import { Table, Modal } from 'antd'
import { toTime } from '../../utils/toTime' 
export default class index extends Component {
    render() {
        const columns = [
            {
                title: '用户名',
                dataIndex: 'username',
                key: '_id',
            },
            {
                title: '邮箱',
                dataIndex: 'email',
                key: '_id',
            },
            {
                title: '电话',
                dataIndex: 'phone',
                key: '_id',
            },
            {
                title: '注册时间',
                dataIndex: 'create_time',
                key: '_id',
                render:(create_time)=>{
                    return <span>{toTime(create_time)}</span>
                }
            },
            {
                title: '所属角色',
                dataIndex: 'role_id',
                key: '_id',
                render:(id)=>{
                    const item = this.props.RoleData.find(item=>item.value===id)
                    return(
                        <span>
                            {
                            item
                            ?item.label
                            :"未设置角色"
                            }
                            
                        </span>
                    )
                }
            },
            {
                title: '操作',
                render:(item)=>{
                    return(
                        <>
                        <span style={{padding:'5px 10px'}} onClick={()=>this.props.setShowAddUserModal(true,false,item)}>修改</span>
                        <span style={{padding:'5px 10px'}} onClick={()=>this.showModal(item)}>删除</span>
                        </>
                    )
                }
            }
          ]
        return (
            <Table dataSource={this.props.UserData} columns={columns} rowKey="_id"/>
        )
    }
    showModal=(item)=>{
        console.log(item)
        Modal.confirm({
            title: '是否删除该用户',
            onOk:()=> {
                this.props.onDeleteUser(item._id)
            }
          })
    }
}
