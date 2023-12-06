// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

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

export { lazyPlugin }