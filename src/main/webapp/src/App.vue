<template>
  <div>{{ appMessage }}</div>
  <router-link to="/home">home</router-link>
  <router-link to="/about">about</router-link>
  <router-link to="/user/lczmx">user</router-link>

  <router-view></router-view>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "App",
    setup() {
      const appMessage = "App组件";
      return {
        // 返回的数据
        appMessage,
      };
    }
  });
</script>

<style scoped>
  div{color: red;}
</style>
