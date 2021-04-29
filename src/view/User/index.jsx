import React, { Component } from 'react'
import UserCard from '../../component/UserCard'
import { getUserList, addUser, deleteUser, updateUser } from '../../http'
import UserTable from '../../component/UserTable'
import AddUserForm from '../../component/AddUserForm'
import AddUserModal from '../../component/AddUserModal'
import { message } from 'antd'
export default class index extends Component {
    state = {
        UserData: null,
        RoleData: null,
        showAddUserModal:false,
        addAndUpdate:true,
        clickItem:null
    }
    render() {
        return (
            <>
            {
                this.state.RoleData&&
                <UserCard  
                setShowAddUserModal={this.setShowAddUserModal}>
                    <UserTable 
                    RoleData={this.state.RoleData} 
                    setShowAddUserModal={this.setShowAddUserModal}  
                    UserData={this.state.UserData} 
                    onDeleteUser={this.onDeleteUser}>
                    </UserTable>
                </UserCard>
            }
            {
                this.state.showAddUserModal&&
                <AddUserModal 
                setShowAddUserModal={this.setShowAddUserModal}  
                addAndUpdate={this.state.addAndUpdate}> 
                    <AddUserForm 
                    clickItem={this.state.clickItem}  
                    RoleData={this.state.RoleData} 
                    addUser={this.addUser} 
                    updateUser={this.updateUser} 
                    addAndUpdate={this.state.addAndUpdate}>
                    </AddUserForm>
                </AddUserModal>
            }
            </>
        )
    }
    async componentDidMount(){
        const responce = await getUserList()
        if(responce.data.status===0){
            this.setState({UserData:responce.data.data.users.reverse()})
            const RoleData = responce.data.data.roles.map(item=>{
                return {label:item.name,value:item._id}
            })
            this.setState({RoleData:RoleData})
        }
    }
    addUser = async (AddUserFormData) =>{
        AddUserFormData.role_id = AddUserFormData.role_id[0]
        const responce = await addUser(AddUserFormData)
        if(responce.data.status===0){
            message.success('添加成功')
            this.state.UserData=[responce.data.data,...this.state.UserData]
        }else{
            message.error(responce.data.msg)
        }
        this.setState({})
    }
    updateUser = async (updateUserData) =>{
        updateUserData.role_id = updateUserData.role_id[0]
        const responce = await updateUser(updateUserData)
        if(responce.data.status===0){
            message.success('修改成功')
            Object.assign( this.state.UserData.find(item=>item._id===updateUserData._id) , updateUserData)
        }else{
            message.error('修改失败')
        }
        this.setState({})
    }
    setShowAddUserModal = (isShow,addAndUpdate,item)=>{
        this.setState({showAddUserModal:isShow,addAndUpdate,clickItem:item})
    }
    onDeleteUser = async (id) =>{
        console.log(id)
        const responce = await deleteUser(id)
        console.log(responce)
        if(responce.data.status===0){
            message.success('删除成功')
            // console.log(this.state.UserData)
            // this.state.UserData.remove()
            // this.state.UserData.find(item=>item._id===id)
        }else{
            message.error('删除失败')
        }
        this.setState({})
    }
}
