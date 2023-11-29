// 导入axios
import axios from 'axios'


// 创建axios实例
const httpInstance = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
});


// 创建请求拦截器
httpInstance.interceptors.request.use(config=>{
    return config
},e=>{
    Promise.reject(e)
})


// 创建响应拦截器
httpInstance.interceptors.response.use(res=>{
    return res.data
},e=>{
    Promise.reject(e)
})

export {httpInstance}
