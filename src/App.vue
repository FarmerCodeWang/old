<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'

export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  background-color: #efefef;
  text-decoration:none
}
a:active { 
  color: #007bbd; 
  text-decoration:none; 
} 
</style>