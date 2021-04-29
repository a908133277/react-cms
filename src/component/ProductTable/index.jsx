import React, { Component } from 'react'
import { Table, Button } from 'antd'
import { Link } from 'react-router-dom'
export default class index extends Component {
    render() {
        const columns = [
            {
              title: '商品名称',
              dataIndex: 'name',
              key:'_id',
            },
            {
              title: '商品描述',
              dataIndex: 'desc',
              key:'_id',
            },
            {
              title: '价格',
              dataIndex: 'price',
              key:'_id',
              render:(price)=>{
                return <span>￥{price}</span>
            }
            },
            {
                title: '状态',
                key:'_id',
                render:(item)=>{
                    return<>
                        <div>
                            {
                            item.status===1 
                            ?<Button onClick={()=>this.props.updateStatusList(item,2)} type='primary'>下架</Button> 
                            :<Button onClick={()=>this.props.updateStatusList(item,1)} type='primary'>上架</Button>
                            }
                        </div>
                        <div>
                            <span>
                                {
                                item.status===1 
                                ? '在售' 
                                : '已下架'
                                }
                            </span>
                        </div>
                    </>
                }
            },
            {
                title:'操作', 
                key:'_id',
                render:(item)=>{
                    return  <>
                        <div>
                            <Link 
                            style={{display:'block', margin:10}} 
                            to={{pathname:"/product/detail",state:item}}>
                            详情
                            </Link>
                        </div>
                        <div>
                            <Link 
                            style={{display:'block', margin:10}} 
                            to={{pathname:"/product/addupdate",state:item}}>
                                修改
                            </Link>
                        </div>
                    </>
                }
            }
          ];
        return (
            <Table 
            dataSource={this.props.dataSource}  
            columns={columns} 
            rowKey='_id'/>
        )
    }
}
