import { httpInstance } from '@/utils/http'

// 封装商品详情接口
const getDetail = (id) => {
    return httpInstance({
        url:'/goods',
        params:{
            id
        }
    })
}

export {
    getDetail
}