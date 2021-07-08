<template>
  <div class="hello">
    <h1>{{ cmsg }}</h1><button @click="changeMsg">change</button>
    <h1>{{ count }}</h1><button @click="increment">+</button><button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

// Component definition
@Options({
  props: {
    msg: String // props 接受父组件的参数，特点 ： 只读
  },
  // watch 监视器监视数据变化
  watch: {
    count: value => {
      console.log('count:' + value)
    }
  }
})
export default class HelloWorld extends Vue {
  msg!: string
  // Notice this '!' modifier.
  // This is the "definite assignment assertion"
  //  把接收过来的数据，保存到 data 中一个临时值 (适用在该组件接收数据只会在当前组件内使用)
  cmsg = this.msg
  changeMsg ():void {
    console.log(this.cmsg)
    this.cmsg = 'I have changed!'
  }

  get name ():string {
    return this.msg + 'beijing'
  }

  count = 0

  // Methods will be component methods
  increment ():void {
    this.count++
  }

  decrement ():void {
    this.count--
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
