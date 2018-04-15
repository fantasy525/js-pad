<style lang="scss" scoped>
  .tools_view{
    width:1496px;
    height:931px;
    margin:50px auto 0;


    .title{
      font-size:48px;/*px*/
      text-align:center;
      height:145px;
      line-height:145px;
      background-color:#fff;
    }
    .item_list{
      width:100%;
      background-color:#fff;
      li{
        width:299px;
        height:248px;
        display: flex;
        flex-direction: column;
        justify-content: center;
       border:1px solid #e8eff8;
      }
      .iconfont{
        font-size:60px;

      }
    }
    .sub_title{
      font-size:24px;/*px*/
      margin-top:40px;
      line-height:30px;
    }
  }
</style>

<template>
    <div class="tools_view">
      <h2 class="title">
        测评工具库
      </h2>
      <ul class="flex item_list space-between justify-center flex-wrap">

          <nav-button :to="{path:'/main/test_list/2',query:{name:'临床常用测评量表'}}">
           <li>
        <icon-fontclass iconName="zhizhangzhangdan" style="color:#1fa2fe;"></icon-fontclass>
        <p class="sub_title">临床常用<br>测评量表</p>
      </li>
          </nav-button>


          <nav-button :to="{path:'/main/test_list/2',query:{name:'总体认知能力'}}">
           <li>
        <icon-fontclass iconName="duoweidu" style="color:#fbc783;"></icon-fontclass>
        <p class="sub_title">总体<br>认知能力</p>
      </li>
          </nav-button>


       <nav-button :to="{path:'/main/test_list/2',query:{name:'记忆力'}}">
         <li>
           <icon-fontclass iconName="brain__easyic" style="color:#fb8c83;"></icon-fontclass>
           <p class="sub_title">记忆力</p>
         </li>
       </nav-button >
        <li>
         <nav-button :to="{path:'/main/test_list/2',query:{name:'注意力'}}">
           <icon-fontclass iconName="yanjing-2" style="color:#83a5fb;"></icon-fontclass>
           <p class="sub_title">注意力</p>
         </nav-button>
        </li>
        <li>
          <icon-fontclass iconName="zhihangli" style="color:#fbc783;"></icon-fontclass>
          <p class="sub_title">执行功能 </p>
        </li>
        <li>
          <icon-fontclass iconName="huatong1 " style="color:#fb8c83;"></icon-fontclass>
          <p class="sub_title">言语能力</p>
        </li>
        <li>
          <icon-fontclass iconName="box" style="color:#83a5fb;"></icon-fontclass>
          <p class="sub_title">视空间能力</p>
        </li>
        <li>
          <icon-fontclass iconName="kexue" style="color:#fbc783;"></icon-fontclass>
          <p class="sub_title">逻辑推理</p>
        </li>
        <li>
          <icon-fontclass iconName="weixiao" style="color:#fb8c83;"></icon-fontclass>
          <p class="sub_title">情绪情愿</p>
        </li>
        <li>
          <icon-fontclass iconName="ren" style="color:#83a5fb;"></icon-fontclass>
          <p class="sub_title">人格表征</p>
        </li>
        <li>
          <icon-fontclass iconName="lubiao" style="color:#fbc783;"></icon-fontclass>
          <p class="sub_title">行为习惯</p>
        </li>
        <li>
          <icon-fontclass iconName="shuijue" style="color:#fb978f;"></icon-fontclass>
          <p class="sub_title">睡眠情况</p>
        </li>
        <li>
          <icon-fontclass iconName="taiyang" style="color:#83a5fb;"></icon-fontclass>
          <p class="sub_title">主观幸福感</p>
        </li>
        <li>
          <icon-fontclass iconName="idcard" style="color:#fbc783;"></icon-fontclass>
          <p class="sub_title">一般资料</p>
        </li>
        <li>
          <icon-fontclass iconName="wodeyisheng" style="color:#fb8c83;"></icon-fontclass>
          <p class="sub_title">证候体征</p>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name:'tools'
    }
</script>

