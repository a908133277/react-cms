import React, { Component } from 'react'
import { productList, searchProduct, updateStatus } from './../../http'
import ProductTable from '../../component/ProductTable'
import ProductCard from '../../component/ProductCard'
import { message } from 'antd'
export default class index extends Component {
    state = {
        dataSource: null,
    }
    render() {
        return (
            <div>
                <ProductCard
                pushAddUpdate={this.pushAddUpdate} 
                searchProductList={this.searchProductList}>
                    <ProductTable 
                    updateStatusList={this.updateStatusList} 
                    dataSource={this.state.dataSource}
                    >
                    </ProductTable>
                </ProductCard>
            </div>
        )
    }
    async componentDidMount(){
        const responce = await productList(1,150)
        if(responce.data.status===0){
            this.setState({dataSource:responce.data.data.list.reverse()})
    } 
    }
    searchProductList = async ({productName,productType="productName"})=>{
        const responce = await searchProduct(1,100,productName,productType)
        if(responce.data.status===0){
            this.setState({dataSource:responce.data.data.list.reverse(),tableKey:1})
        }else{
            message.error('搜索失败')
        }
    }
    updateStatusList = async (list, status) =>{
        const responce = await updateStatus(list._id, status)
        if(responce.data.status===0){
            this.state.dataSource.find(item=>item._id===list._id).status=status
            if(status===1){
                message.success('以上架')
            }else{
                message.success('以下架')
            }
            this.setState({})
        }
    }
    pushAddUpdate = ()=>{
        this.props.history.push('/product/addupdate')
    }
}
