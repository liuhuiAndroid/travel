// 单文件组件
// 组件的模板
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 显示的是当前路由 地址所对应的内容 -->
    <router-view/>
  </div>
</template>

// 组件的逻辑
<script>
export default {
  name: 'App'
}
</script>

// 组件的CSS样式
<style>

</style>
