import { httpInstance } from '@/utils/http'

// 封装商品详情接口
const getDetail = (id) => {
    return httpInstance({
        url: '/goods',
        params: {
            id
        }
    })
}

// 封装热榜数据接口
const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
    return httpInstance({
        url: '/goods/hot',
        params: {
            id,
            type,
            limit
        }
    })
}

export {
    getDetail,
    getHotGoodsAPI

}