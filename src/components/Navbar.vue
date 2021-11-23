<template>
  <div class="navbar">
    <p class="title">老照片修复精灵</p>
    <router-link class="navigation" to="/home">首页</router-link>
    <router-link class="navigation" to="/about">用户协议</router-link>
    <router-link class="navigation" to="/privacy">隐私</router-link>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="scss">
.navbar {
  height: 100px;
  line-height: 100px;
  margin: 0 20%;
  .title {
    float: left;
    font-family: MicrosoftYaHei-Bold;
  	font-size: 36px;
  	letter-spacing: 1px;
	  color: #333333;
    font-weight:bold;
  }
  .navigation {
    float: right;
    color: #333333;
    font-family: MicrosoftYaHei;
    font-size: 24px;
    padding-left: 70px;
}
}
</style>