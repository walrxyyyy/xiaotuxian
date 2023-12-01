<script setup>
import { RouterView } from 'vue-router'
// import {ref} from 'vue'
// 这里的@符号仅仅是进行联想提示

// import { getCategoryAPI } from '@/apis/testAPI'
//
// getCategoryAPI().then((res) => {
//   console.log(res.result);
// })


// elementPlus样式

</script>

<template>
  <!-- 一级路由出口组件 -->
  <RouterView />
  <!-- <div class="test">
    test css
  </div> -->
  <!-- <RouterLink to="/">首页</RouterLink> -->
  <!-- 测试elementPlus组件是否可用 -->
  <!-- <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
      </el-row> -->
</template>

<style scoped lang="scss">
// .test{
//   background-color: $xtxColor;
// }

// header {
//   line-height: 1.5;
//   max-height: 100vh;
// }

// .logo {
//   display: block;
//   margin: 0 auto 2rem;
// }

// nav {
//   width: 100%;
//   font-size: 12px;
//   text-align: center;
//   margin-top: 2rem;
// }

// nav a.router-link-exact-active {
//   color: var(--color-text);
// }

// nav a.router-link-exact-active:hover {
//   background-color: transparent;
// }

// nav a {
//   display: inline-block;
//   padding: 0 1rem;
//   border-left: 1px solid var(--color-border);
// }

// nav a:first-of-type {
//   border: 0;
// }

// @media (min-width: 1024px) {
//   header {
//     display: flex;
//     place-items: center;
//     padding-right: calc(var(--section-gap) / 2);
//   }

//   .logo {
//     margin: 0 2rem 0 0;
//   }

//   header .wrapper {
//     display: flex;
//     place-items: flex-start;
//     flex-wrap: wrap;
//   }

//   nav {
//     text-align: left;
//     margin-left: -1rem;
//     font-size: 1rem;

//     padding: 1rem 0;
//     margin-top: 1rem;
//   }
// }
</style>
