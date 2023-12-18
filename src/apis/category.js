import {httpInstance} from '@/utils/http'

const getTopCategoryAPI = (id)=>{
    return httpInstance({
        url:'/category',
        params:{
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

export {
    getTopCategoryAPI,
    getCategoryFilterAPI
}