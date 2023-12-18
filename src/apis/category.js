import { httpInstance } from '@/utils/http'

const getTopCategoryAPI = (id) => {
    return httpInstance({
        url: '/category',
        params: {
            id
        }
    })
}
// 面包屑导航数据接口
const getCategoryFilterAPI = (id) => {
    return httpInstance({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}
/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
const getSubCategoryAPI=(data)=>{
    return httpInstance({
        url:'/category/goods/temporary',
        method:'post',
        data
    })
}

export {
    getTopCategoryAPI,
    getCategoryFilterAPI,
    getSubCategoryAPI
}