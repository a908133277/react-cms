import React, { Component } from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { isUser } from '../utils/storageUtils'
import Layout from '../view/Layout'
class Auth extends Component {
    render() {
        const path = this.props.location.pathname
        const isLogin = isUser()
        const isPath = this.props.routes.find(item=>item.path===path)
        if(isLogin){
            if(path==="/login" || path==="/"){
                return <Redirect to="/home"></Redirect>
            }else{
                if(isPath){
                    return <Layout><Route path={isPath.path} component={isPath.component} exact={isPath.exact}></Route></Layout>
                }else{
                    return <Redirect to="/home"></Redirect>
                }
            } 
        }else{
            if(isPath){
                if(isPath.Auth){
                    return <Route path={isPath.path} component={isPath.component}></Route>
                }else{
                    return <Redirect to="/login"></Redirect>
                }
            }else{
                return <Redirect to="/login"></Redirect>
            }
        }
    }
}
export default withRouter(Auth)
