<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>{{ courses }}</div>
</template>

<script>
import { login } from '@/api/user'

export default {
  name: 'admin',
  data () {
    return {
      title: '标题'
    }
  },
  async created () {
    // 组件实例已创建，由于未挂载，dom不存在
    const courses = await login()
    this.courses = courses
  }
}
</script>

<style>

</style>
