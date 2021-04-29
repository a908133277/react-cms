import React, { Component } from 'react'
import { Modal, Form, Input, Button, Tree } from 'antd'
export default class AuthRole extends Component {
    state = {
        TreeKeys:[]
    }
    render() {
        const treeData = [
            {
              title: '平台权限',
              key: 'all',
              children: [
                {
                  title: '首页',
                  key: '/home',
                },
                {
                  title: '商品',
                  key: '/products',
                  children: [
                    {
                      title: '品类管理',
                      key: '/category',
                    },
                    {
                      title: '商品管理',
                      key: '/product',
                    },
                  ],
                },
                {
                  title: '用户管理',
                  key: '/user',
                },
                {
                    title: '角色管理',
                    key: '/role',
                },
                {
                    title: '图形图标',
                    key: '/charts',
                    children: [
                        {
                          title: '柱状图',
                          key: '/charts/bar',
                        },
                        {
                          title: '折线图',
                          key: '/charts/line',
                        },
                        {
                            title: '饼图',
                            key: '/charts/pie',
                        },
                      ],
                },
              ],
            },
          ];
        return (
            <Modal title="设置角色权限"
             visible={true} 
             onCancel={()=>this.props.onshowAuthPole(false)}
             footer={null}
             >
                    <Form.Item label="角色名称">
                        {
                            this.props.RadioItem&&
                            <Input  readOnly value={this.props.RadioItem.name}/>
                        }
                    </Form.Item>                   
                    {
                        this.props.RadioItem&&
                        <Tree
                        onCheck={this.getFormData}
                        defaultExpandAll={true}
                        checkable
                        treeData={treeData}
                        defaultCheckedKeys={this.props.RadioItem.menus}
                        />
                    }
                    <div style={{textAlign:'right'}}>
                    <Button type="primary"onClick={()=>this.props.setRoleUpdate({_id:this.props.RadioItem._id,menus:this.state.TreeKeys})} >修改权限</Button>
                    </div>
            </Modal>
        )
    }
    getFormData = (TreeKeys) =>{
        this.setState({TreeKeys})
    }
}
