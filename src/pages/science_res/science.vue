<style lang="scss" scoped>
  .science {
    padding: 40px 100px 0;
    .lists {
      li {
      width: 400px;
        background-color: #ffffff;
        height: 600px;
        border-radius:7px;
        .nav_button{
          width:100%;
          height:100%;
          padding-top:103px;
          text-align:center;
          .title{
            font-size:48px;/*px*/
            color:#5f5f5f;
            margin-top:90px;
          }
          .sub-title{
            margin-top:31px;
          }
        }
      }
    }
    .tools{
      background-color:#fff;
      margin-top:40px;
      height:310px;
      padding-left:74px;
      padding-right:48px;
      .tools_title{
        width:460px;
        padding-top:90px;
        background-color:#fff;
        font-size:36px;/*px*/
        .iconfont{
          font-size:70px;
          margin-bottom:30px;
        }
      }
      .tools_detail{
        margin-left:140px;
        padding-top:80px;
        flex-wrap:wrap;
        justify-content: space-between;
        p{
          flex:1 1 230px;
          text-align:left;
        }
        .icon{
          display:inline-block;
          width:50px;
          height:43px;
          background:url('../../../static/img/tools_img.png')center center no-repeat;
          font-size:40px;
          vertical-align: middle;
        }
        span{
          margin-left:30px;
          font-size:30px;/*px*/
          vertical-align: middle;
        }
      }
    }
  }
</style>
<template>
  <div class="science">
    <div class="wrap">
      <ul class="lists flex space-between">
        <li>
          <nav-button to="/main/analyze?name=描述性分析">
            <img :src="require('../../../static/img/kexue_img1.png')" >
             <p class="title">
               描述性分析
             </p>
            <p class="sub-title">
              Descriptive analysis
            </p>
          </nav-button>
        </li>
        <li>
          <nav-button to="/">
            <img :src="require('../../../static/img/kexue_img2.png')" >
             <p class="title">
               差异性分析
             </p>
            <p class="sub-title">
              Correlation analysis
            </p>
          </nav-button>
        </li>
        <li>
          <nav-button to="/">
            <img :src="require('../../../static/img/kexu_img3.png')" >
             <p class="title">
               相关性分析
             </p>
            <p class="sub-title">
              Descriptive analysis
            </p>
          </nav-button>
        </li>
      </ul>
      <div class="tools flex">
        <div class="tools_title">
          <icon-svg iconName="jieshao" class="iconfont"></icon-svg>
          <p>科研常用工具介绍</p>
        </div>
        <div class="tools_detail flex ">
          <p>
            <i class="icon"></i><span >描述性分析</span>
          </p>
          <p>
            <i class="icon"></i><span >差异性分析</span>
          </p>
          <p>
            <i class="icon"></i><span >相关性分析</span>
          </p>
          <p>
            <i class="icon"></i><span >回归统计</span>
          </p>
          <p>
            <i class="icon"></i><span >主成分分析</span>
          </p>
          <p >
            <i class="icon"></i><span  >判别分析</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>


