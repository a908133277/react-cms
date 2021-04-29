import React, { Component } from 'react'
import { Modal, Input } from 'antd'
export default class index extends Component {
    render() {
        const { showModal, changeItem, setshowModal, updateCategory, addCategoryList, showsubCategory, subItem } = this.props
            if(showModal===1){
                if(showsubCategory){
                    return(
                        <Modal
                        title="添加类型"
                        visible={true}
                        onOk={()=>addCategoryList(subItem._id,this.myAddInput.state.value)}
                        onCancel={()=>setshowModal(0)}
                        >
                            <span style={{color:'#008dff', fontSize:12, marginBottom:10}}>添加项: {subItem.name}</span>
                            <Input placeholder="请输入分类名称"  ref={(e)=>this.myAddInput=e} />
                        </Modal>
                    )
                }else{
                    return(
                        <Modal
                        title="添加类型"
                        visible={true}
                        onOk={()=>addCategoryList(0,this.myAddInput.state.value)}
                        onCancel={()=>setshowModal(0)}
                        >
                            <span style={{color:'#008dff', fontSize:12 , marginBottom:10}}>添加项: 一级分类</span>
                            <Input placeholder="请输入分类名称"  ref={(e)=>this.myAddInput=e} />
                        </Modal>
                    )
                }
            }else if(showModal===2){
                return (
                    <Modal
                    title="修改类型"
                    visible={true}
                    onOk={()=>updateCategory(changeItem._id,this.myUpdataInput.state.value)}
                    onCancel={()=>setshowModal(0)}
                    >
                        <Input defaultValue={changeItem.name} ref={(e)=>this.myUpdataInput=e}/> 
                    </Modal>
                )
            }else{
                return null
            }    
        }
}
