import React, { Component } from 'react'
import { Spin, message } from 'antd'
import 'antd/dist/antd.css'
import { Switch ,BrowserRouter } from 'react-router-dom'
import routes from './router'
import Auth from './router/Auth'
import Axios from 'axios'
import './app.css'
 class app extends Component {
     state = {
         showSpin: false
     }
    render() {   
        return (
            <>
                <BrowserRouter>
                    <Switch>
                    <Auth routes={routes}></Auth>
                    </Switch>       
                </BrowserRouter>
                <Spin size="large" style={this.state.showSpin?{display:"block"}:{display:"none"}} className="spin">
                </Spin>
            </>
        )
    }
    componentDidMount(){
        Axios.interceptors.request.use(res=>{ 
            this.setState({showSpin:true})
            return res
        },err=>{
            message.error('数据发送错误检查网络')
            this.setState({showSpin:false})
            return {data:{status:1}}
        })
        Axios.interceptors.response.use(res=>{
            this.setState({showSpin:false})
            return res
        },err=>{
            message.error('服务器响应错误')
            this.setState({showSpin:false})
            return {data:{status:1}}
        })
    }
}
export default app
