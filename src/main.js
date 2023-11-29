// 系统默认css
// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 导入自己需要的初始化样式文件css
import '@/styles/common.scss'

const app = createApp(App)


app.use(createPinia())
app.use(router)

app.mount('#app')
