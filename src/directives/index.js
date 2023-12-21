// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
import ImgView from '@/components/ImgView/index.vue'
import Sku from '@/components/xtxSKU/index.vue'

const lazyPlugin = {
  install(app) {
    // 懒加载指令逻辑
    app.directive('img-lazy', {
      mounted(el, binding) {
        // el: 指令绑定的那个元素 img
        // binding: binding.value  指令等于号后面绑定的表达式的值  图片url
        //   console.log(el, binding.value)
        // 解构出stop方法
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            // console.log(isIntersecting)
            if (isIntersecting) {
              // 进入视口区域
              el.src = binding.value
              // stop方法的作用就是在图片第一次加载出来后取消监听
              stop()
            }
          },
        )
      }
    })
  }
}
// 把components中的所组件都进行全局化注册
// 通过插件的方式
const componentPlugin = {
  install(app) {
    // app.component('组件名字'，组件配置对象)
    app.component('ImgView', ImgView)
    app.component('Sku', Sku)
  }
}


export {
  lazyPlugin,
  componentPlugin
}