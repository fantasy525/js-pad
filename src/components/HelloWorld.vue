<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <icon-svg icon-class="arrow_up"></icon-svg>
    <button @click="go">跳转游戏</button>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your  App"
    };
  },
  mounted() {
   //alert(document.documentElement.clientWidth+','+document.documentElement.clientHeight)
   mui.plusReady(function() {
      mui.toast("登陆成功", { duration: 5000, type: "div" });
      console.log("当前页面URL：" + plus.webview.currentWebview().getURL());
    });

  },
  methods:{
    go(){

    //  mui.openWindow(
    //    {url:'index.html#/person',
    //  show:{aniShow:'fade-in'}
    //    }
    //  )
     this.$router.push('person')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
