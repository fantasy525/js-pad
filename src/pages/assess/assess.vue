<style lang="scss" scoped>
  .assess_view{
    padding:20px 40px 0;
  }
  .list_item{
    width:760px;
    background-color:#fff;
    height:340px;
    padding:40px 40px 40px 45px;
    margin-bottom:20px;
    border-radius:10px;
    box-shadow: 14px 13px 64px -10px #dadee8;

    .title{
      font-size:30px;/*px*/
      text-align:left;
      margin-bottom:70px;
      .button-more{
        font-size:24px;/*px*/
        float:right;
        color:#1fa2fe;
      }
    }
    .item_list{

      .iconfont{
        font-size:60px;
      }
    }
    .sub_title{
      font-size:24px;/*px*/
      margin-top:30px;
      line-height:30px;
    }
  }
  .list_item:last-child{
    width:100%;
    height:265px;
    .sub_title{

      margin-top:25px;

    }
  }
  .list_item:nth-of-type(3){//痴呆
    img{
      width:80%;
    }
  }
  .list_item:nth-of-type(2){//认知
    img{
      width:60%;

    }
  }
  .list_item:nth-of-type(1){//脑健康
    img{
      width:50%;
      height:105px;
    }
  }
  .list_item:nth-of-type(4){//神经
    img{
     width:100px;
      height:100px;
    }
  }
</style>
<template>
    <div class="assess_view">
        <div class="assess_list flex flex-wrap space-around">
            <div class="touch_active list_item ">
                <h2 class="title">脑健康评估</h2>
                <ul class="flex item_list space-between justify-center">
                  <li>
                    <nav-button :to="{path:'/main/test_list/0',query:{name:'基础脑健康评估'}}">
                      <img :src="require('../../../static/img/assess_list1.png')">
                      <p class="sub_title">基础脑健康评估</p>
                    </nav-button>
                  </li>
                  <li>
                    <nav-button :to="{path:'/main/test_list/1',query:{name:'认知障碍风险筛查'}}">
                      <img :src="require('../../../static/img/assess_list2.png')">
                      <p class="sub_title">认知障碍风险筛查</p>
                    </nav-button>

                  </li>
                  <li>
                   <nav-button :to="{path:'/main/test_list/2',query:{name:'痴呆早期风险预警'}}">
                     <img :src="require('../../../static/img/assess_list3.png')">
                     <p class="sub_title">痴呆早期风险预警</p>
                   </nav-button>
                  </li>
                </ul>
            </div>
            <div class="list_item touch_active">
            <h2 class="title">认知障碍筛查</h2>
            <ul class="flex item_list space-between justify-center">
              <li>
               <nav-button :to="{path:'/main/test_list/0',query:{name:'主诉记忆下降'}}">
                 <img :src="require('../../../static/img/ren_zhi_smc.png')">
                 <p class="sub_title">主诉记忆下降</p>
               </nav-button>
              </li>
              <li>
               <nav-button :to="{path:'/main/test_list/0',query:{name:'轻度认知障碍'}}">
                 <img :src="require('../../../static/img/ren_zhi_mci.png')">
                 <p class="sub_title">轻度认知障碍</p>
               </nav-button>
              </li>
              <li>
               <nav-button :to="{path:'/main/test_list/0',query:{name:'血管认知障碍'}}">
                 <img :src="require('../../../static/img/ren_zhi_vci.png')">
                 <p class="sub_title">血管认知障碍</p>
               </nav-button>
              </li>
            </ul>
          </div>
            <div class="list_item touch_active">
            <h2 class="title">痴呆筛查 <nav-button :to="{path:'/main/assess_list/chi_dai',query:{name:'痴呆筛查'}}" class="button-more">更多 &gt;</nav-button></h2>
            <ul class="flex item_list space-between justify-center">
              <li>
               <nav-button :to="{path:'/main/test_list/0',query:{name:'阿尔兹海默病'}}">
                 <img :src="require('../../../static/img/chi_dai_ad.png')">
                 <p class="sub_title">阿尔兹海默病</p>
               </nav-button>
              </li>
              <li>
                <nav-button :to="{path:'/main/test_list/0',query:{name:'额颞叶痴呆'}}">
                  <img :src="require('../../../static/img/chi_dai_ftd.png')">
                  <p class="sub_title">额颞叶痴呆</p>
                </nav-button>
              </li>
              <li>
                <nav-button :to="{path:'/main/test_list/0',query:{name:'语义性痴呆'}}">
                  <img :src="require('../../../static/img/chi_dai_sd.png')">
                  <p class="sub_title">语义性痴呆</p>
                </nav-button>
              </li>
            </ul>
          </div>
            <div class="list_item touch_active">
            <h2 class="title">神经精神疾病筛查<nav-button :to="{path:'/main/assess_list/chi_dai',query:{name:'痴呆筛查'}}" class="button-more">更多 &gt;</nav-button></h2>
            <ul class="flex item_list space-between justify-center">
              <li>
                <nav-button :to="{path:'/main/test_list/0',query:{name:'抑郁'}}">
                  <img :src="require('../../../static/img/shen_jing1.png')">
                  <p class="sub_title">抑郁</p>
                </nav-button>
              </li>
              <li>
                <nav-button :to="{path:'/main/test_list/0',query:{name:'焦虑'}}">
                  <img :src="require('../../../static/img/shen_jing2.png')">
                  <p class="sub_title">焦虑</p>
                </nav-button>
              </li>
              <li>
                <nav-button :to="{path:'/main/test_list/0',query:{name:'情感障碍'}}">
                  <img :src="require('../../../static/img/shen_jing3.png')">
                  <p class="sub_title">情感障碍</p>
                </nav-button>
              </li>
            </ul>
          </div>
            <div class=" list_item touch_active">
              <h2 class="title">认知测评工具库</h2>
              <ul class="flex item_list space-between justify-center">
                <li>
                  <icon-fontclass iconName="zhizhangzhangdan" style="color:#1fa2fe;"></icon-fontclass>
                  <p class="sub_title">临床常用<br>测评量表</p>
                </li>
                <li>
                  <icon-fontclass iconName="duoweidu" style="color:#fbc783;"></icon-fontclass>
                  <p class="sub_title">总体<br>认知能力</p>
                </li>
                <li>
                  <icon-fontclass iconName="brain__easyic" style="color:#fb8c83;"></icon-fontclass>
                  <p class="sub_title">记忆力</p>
                </li>
                <li>
                  <icon-fontclass iconName="yanjing-2" style="color:#83a5fb;"></icon-fontclass>
                  <p class="sub_title">注意力</p>
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
                 <nav-button :to="{path:'main/tools',query:{name:'认知测评工具库'}}">
                   <icon-fontclass iconName="caidan-gengduo" style="color:#739ff0;"></icon-fontclass>
                   <p class="sub_title">更多</p>
                 </nav-button>
                </li>
              </ul>
          </div>
        </div>
    </div>
</template>

<script>
    import NavButton from "../../components/router-link/src/index.vue";

    export default {components: {NavButton}}
</script>


