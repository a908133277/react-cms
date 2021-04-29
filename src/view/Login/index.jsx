import React, { Component } from 'react'
import './login.scss'
import { login } from  '../../http'
import LoginForm from '../../component/LoginForm'
import { message } from 'antd'
import { setUser } from '../../utils/storageUtils'
export default class index extends Component {
    render() {
        return (
            <div className="login_content">
                <div className="login_container">
                    <h3>后台管理系统</h3>
                    <LoginForm onFinish = {this.onFinish}></LoginForm>
                </div>
            </div>
        )
    }
    onFinish = async (values) => {
        const responce = await login(values)
        if(responce.data.status===0){
			console.log(responce)
            message.success('登录成功')
            setUser(responce.data.data.username)
            this.props.history.replace('/home')
        }else{
            message.error('用户名或密码错误')
        }
    }
}
