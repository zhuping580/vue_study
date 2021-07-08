<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- 子组件在页面的位置，并向子组件传递参数 -->
    <HelloWorld msg="Welcome"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Options({
  // 引入组件
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
}
</script>
