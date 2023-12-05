// 系统默认css
// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 导入自己需要的初始化样式文件css
import '@/styles/common.scss'
// 定义懒加载插件
import {useIntersectionObserver} from '@vueuse/core'

const app = createApp(App)


app.use(createPinia())
app.use(router)

app.directive('img-lazy',{
    mounted(el,binding){
        // el: 指令绑定的那个元素 img
        // binding: binding.value  指令等于号后面绑定的表达式的值  图片url 
        const {stop}=useIntersectionObserver(el,([{isIntersecting}])=>{
            console.log(isIntersecting);
            if(isIntersecting){
                // 进入视口区域
                el.src=binding.value
                stop()
            }
        })
    }
})

app.mount('#app')


