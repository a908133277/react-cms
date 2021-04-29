import React, { Component } from 'react'
import UserCard from '../../component/RoleCard'
import { getUserList, addRole, roleUpdate } from '../../http'
import RoleTable from '../../component/RoleTable'
import AddRole from './AddRole'
import AuthRole from './AuthRole'
import { message } from 'antd'
import { getUser } from '../../utils/storageUtils'
export default class index extends Component {
    state = {
        RoleData:null,
        showAddModal:false,
        showAuthPole:false,
        RadioItem:null
    }
    render() {
        return (
            <UserCard 
            onShowAddModal={this.onShowAddModal} 
            onshowAuthPole={this.onshowAuthPole} 
            RadioItem={this.state.RadioItem}>
                <RoleTable 
                RoleData={this.state.RoleData} 
                setRadioItem={this.setRadioItem}>
                </RoleTable>
                {
                    this.state.showAddModal
                    &&<AddRole 
                    onAddRole={this.onAddRole} 
                    showAddModal={this.state.showAddModal} 
                    onShowAddModal={this.onShowAddModal}>
                    </AddRole>
                }
                {
                    this.state.showAuthPole
                    && <AuthRole 
                    onshowAuthPole={this.onshowAuthPole} 
                    showAuthPole={this.state.showAuthPole} 
                    RadioItem={this.state.RadioItem}
                    setRoleUpdate={this.setRoleUpdate}
                    >
                    </AuthRole>
                }
            </UserCard>
        )
    }
    async componentDidMount(){
        const responce = await getUserList()
        if(responce.data.status===0){
            this.setState({RoleData:responce.data.data.roles})
        }
    }
    onShowAddModal = (isShow) =>{
        this.setState({showAddModal:isShow})
    }
    onshowAuthPole = (isShow) =>{
        this.setState({showAuthPole:isShow})
    }
    setRadioItem = (value)=>{
        this.setState({RadioItem:value[0]})
    }
    onAddRole = async(name) =>{
       const responce = await addRole(name)
       console.log(name)
        if(responce.data.status===0){
            message.success("用户添加成功")
            this.setState({showAddModal:false,RoleData:[...this.state.RoleData,responce.data.data]})
        }else{
            message.error("用户添加失败")
        }
    }
    setRoleUpdate = async (nameTreeKey) =>{
        const auth_time = new Date()
        const auth_name = getUser()
        const responce = await roleUpdate({...nameTreeKey,auth_time,auth_name})
        if(responce.data.status===0){
            message.success("权限修改成功")
            this.state.RoleData.find(item=>item._id===responce.data.data._id).menus=[...responce.data.data.menus]
            this.setState({showAuthPole:false})
        }else{
            message.error("权限修改失败")
        }
    }
}
