import React, { Component } from 'react'
import './Category.scss'
import { category, updateCategory, addCategory } from '../../http'
import CategoryTable from '../../component/CategotyTable'
import CategoryCard from '../../component/CategoryCard'
import CatagoryModal from '../../component/CategoryModal'
import { message } from 'antd'   
export default class index extends Component {
    state = {
        categorys: null, //父分类数据
        childrenCategory: null, //子分类数据
        showsubCategory: false, //是否切换至子分类
        showModal: 0, //显示 modal
        subItem: null, //点击查看子类型保存的item
        changeItem: null, //点击修改类型保存的item
    }
    render() {
        const { categorys, childrenCategory, showsubCategory, showModal, subItem, changeItem } = this.state
        return ( 
            <>
            <CategoryCard 
            showsubCategory = { showsubCategory } 
            setshowsubCategory = { this.setshowsubCategory } 
            subItem = { subItem }
            setshowModal = { this.setshowModal }
            >
                    <CategoryTable 
                    subCategory = { childrenCategory } 
                    categorys = { categorys } 
                    showsubCategory = { showsubCategory }
                    unpdateShowModal = {this.unpdateShowModal}
                    childrenCategory = {this.childrenCategory}
                    >
                    </CategoryTable>
            </CategoryCard>
            <CatagoryModal 
            showModal = { showModal } 
            changeItem= { changeItem}  
            setshowModal = { this.setshowModal }
            updateCategory = { this.updateCategoryList }
            addCategoryList = { this.addCategoryList }
            showsubCategory = { showsubCategory }
            subItem = { subItem }
            >
            </CatagoryModal>
            </>
        )
    }
    setshowModal=(id)=>{ //设置显示或隐藏的 修改modal 添加modal
        this.setState({showModal:id})
    }
    getCategoryList = async(parentId)=>{  //获取category数据 parentId为0获取父category 非0获取子category
        const tabList = await category(parentId)
        if(tabList.data.status===0){
            if(parentId===0){
                this.setState({categorys : tabList.data.data.reverse()})
            }else{
                this.setState({childrenCategory : tabList.data.data.reverse()})
            }
        }else{
            message.error('获取数据失败')
        }
    }
    setshowsubCategory = (sh)=>{ //是否切换到子类型
        this.setState({showsubCategory:sh,childrenCategory:null})
    }
    unpdateShowModal = (item)=>{ //点击修改类型 显示修改类型的modal
        this.setState({showModal:2,changeItem:item})
    }
    componentDidMount(){ //初始化获取category数据
        this.getCategoryList(0)
    }
    childrenCategory=(item)=>{ //点击查看子类型 table切换至子table 保存点击的item 获取子类型数据
        this.setState({showsubCategory:true,subItem:item})
        this.getCategoryList(item._id)
    }
    updateCategoryList = async (id,value)=>{ //点击修改类型  修改成功后刷新列表
        this.setshowModal(0)
        const responce = await updateCategory(id,value)
        if(responce.data.status===0){
            message.success('修改数据成功')
            if(this.state.showsubCategory){
                this.state.childrenCategory.find(item=>item._id===id).name = value
            }else{
                this.state.categorys.find(item=>item._id===id).name = value

            }
            this.setState({})
        }else{
            message.error('修改数据失败')
        }
    }
    addCategoryList = async (parentId, categoryName)=>{ //添加类型 添加成功后刷新
        this.setshowModal(0)
        let responce = await addCategory(categoryName,parentId)
        if(responce.data.status===0){
            message.success('添加数据成功')
            console.log(responce)
            if(parentId===0){ //向category数据中添加新添加的数据
                this.state.categorys = [{...responce.data.data},...this.state.categorys]
            }else{
                this.state.childrenCategory = [{...responce.data.data},...this.state.childrenCategory]
            }
            this.setState({})
        }else{
            message.error('修改添加失败')
        }
    }
}
