import React, { Component } from 'react'
import { PageHeader, message } from 'antd'
import AddUpdateFrom from '../../component/AddUpdateFrom'
import { category, addProduct, updateProduct} from '../../http'
export default class Addupdate extends Component {
    state = {
        categoryList: null
    }
    render() {
        return (
            <>
            {
                this.props.location.state
                ?<PageHeader
                onBack={() => this.props.history.go(-1)}
                title="修改商品"
                />
                :<PageHeader
                onBack={() => this.props.history.go(-1)}
                title="添加商品"
                />
            }
            <AddUpdateFrom
            categoryList = {this.state.categoryList}
            loadData = {this.loadData}
            addProduct = {this.addUpdateProduct}
            updataData = {this.props.location.state}
            ></AddUpdateFrom>
            </>
        )
    }
    async componentDidMount(){
        const responce = await this.getCategoryList(0)
        if(this.props.location.state){
            if(this.props.location.state.pCategoryId!==0){
                 const res = await this.getCategoryList(this.props.location.state.pCategoryId)
                responce.find(item=>item.value===this.props.location.state.pCategoryId).children=res
            }
        }
        this.setState({categoryList:responce})
    }
    getCategoryList = async(parentId=0)=>{  //获取category数据 parentId为0获取父category 非0获取子category
        let tabList = await category(parentId)
        if(tabList.data.status===0){
            if(parentId===0){
                return tabList.data.data.reverse().map(item=>{
                    return {label:item.name, value:item._id, isLeaf:false, isChildren:false }
                })
            }else{
                return tabList.data.data.reverse().map(item=>{
                    return {label:item.name, value:item._id, isLeaf:false, isChildren:true }
                })
            }
        }else{
            message.error('获取数据失败')
        }
    }
    loadData = async selectedOptions => {
        const targetOption = selectedOptions[selectedOptions.length - 1]
        if(!targetOption.isChildren){
            targetOption.loading = true
            const responce = await this.getCategoryList(targetOption.value)
            targetOption.loading = false
            targetOption.children = responce
            this.setState({})
        }
    }
    addUpdateProduct = async (formData) =>{
        formData.pCategoryId=formData.category[0]
        formData.categoryId=formData.category[1]
        delete formData.category
        if(this.props.location.state){
            const responce = await updateProduct({...formData,_id:this.props.location.state._id})
            if(responce.data.status===0){
                message.success('商品修改成功')
            }
        }else{
            const responce = await addProduct(formData)
            if(responce.data.status===0){
                message.success('商品添加成功')
            }
        }
    }
}
