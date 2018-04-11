<template>
    <div>
        <nav-button class="a" :to="{path:'/main/assess_list/nao_jian_kang',query:{name:'脑健康评估'}}">下一步</nav-button>
    </div>
</template>

<script>
    export default {
      name:'patient'
    }
</script>

<style lang="scss" scoped>
.a{
  width:100px;
  height:100px;
}
</style>
