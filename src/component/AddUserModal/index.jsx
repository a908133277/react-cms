import React, { Component } from 'react'
import { Modal } from 'antd' 
export default class index extends Component {
    render() {
        return (
            <Modal 
            title={this.props.addAndUpdate?"添加用户":"修改用户"}
            visible={true} 
            onCancel={()=>this.props.setShowAddUserModal(false)}
            footer={null}
            >
                {
                    this.props.children
                }
            </Modal>
        )
    }
}
