import React, { Component } from 'react'
import { PageHeader, List} from 'antd'
import './detail.scss'
import { categoryinfo } from '../../http'
export default class Detail extends Component {
    state = {
        category:'',
        pcategory:''
    }
    render() {
        const { desc, name, price, detail, imgs } = this.props.location.state
        return (
            <>
            <PageHeader
            onBack={() => this.props.history.go(-1)}
            title="商品详情"
            />
            <List className="detailList" >
                <List.Item>
                    <span className="detailListTitle">商品名称:</span>
                    <span className="detailListText">{name}</span>
                </List.Item>
                <List.Item>
                    <span className="detailListTitle">商品描述:</span>
                    <span className="detailListText">{desc}</span>
                </List.Item>
                <List.Item>
                    <span className="detailListTitle">商品价格:</span>
                    <span className="detailListText">￥{price}</span></List.Item>
                <List.Item>
                    <span className="detailListTitle">所属分类:</span>
                    <span className="detailListText">{this.state.pcategory}  -→  {this.state.category}</span>
                </List.Item>
                <List.Item>
                    <span className="detailListTitle">商品图片:</span>
                {
                    imgs.length!==0
                    ?imgs.map((item,index)=>{
                        return <img  src={'http://120.55.193.14:5000/manage/img/upliad/'+item} key={index} alt="img"/>
                    })
                    :<span className="detailListText">无图片</span>
                }
                </List.Item>
                <List.Item>
                    <span className="detailListTitle">商品详情:</span>
                    <div className="detailListdetail" dangerouslySetInnerHTML={{__html: detail}}></div>
                </List.Item>
            </List>
            </>
        )
        
    }
    async componentDidMount(){
        const  { categoryId, pCategoryId} = this.props.location.state
        const responce1 = await categoryinfo(categoryId)
        if(responce1.data.status===0){
            this.setState({category:responce1.data.data.name})
        }
        const responce2 = await categoryinfo(pCategoryId)
        if(responce2.data.status===0){
            this.setState({pcategory:responce2.data.data.name})
        }
    }
}