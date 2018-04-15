<style lang='scss' scoped>
  .tabs{
    height:100px;
    background-color:#fff;
  }
  .tabs_wrap{
    width:100%;
    .my-tabs_nav{
      margin-left:200px;
    }
    .my-tabs_nav:first-child{
      margin-left:0;
    }
  }
  .tabs_content{
    height:920px;
    overflow:auto;
    padding:40px 40px 0;
  }
  .title{
    font-size:36px;/*px*/
    text-align:left;
    padding-left:40px;
    height:100px;
  }
  .list_view{
    padding-top:38px;
    padding-bottom:50px;
    background-color:#fff;
    margin-bottom:50px;

  }
  .people_view{
    width:1540px;

    .lists{
      li{
        text-align:left;
        padding-left:97px;
        height:82px;
        margin-top:90px;
      }
    }
    .label{
      width:167px;
      font-size:30px;/*px*/
    }
    .percents{

      width:1160px;

      .percents_bar-outer{
        height:30px;
        line-height:30px;
      }
      .bar_inner{
        display:inline-block;
        position:relative;
        background-color:#6bb1f8;
        text-align:center;
        .bar_inner_num{
          color:#fff;
          font-size:20px;
        }
        .bar_inner_range{
          position:absolute;
          left:50%;
          bottom:-40px;
          transform:translate(-50%,0)
        }
      }
      .bar_inner_left_side{
        border-top-left-radius:30px;
        border-bottom-left-radius:30px;
      }
      .bar_inner_right_side{
        border-top-right-radius:30px;
        border-bottom-right-radius:30px;
      }
    }
  }

</style>

<template>
<div class="data_view">
  <div class="tabs_wrap">
    <my-tabs v-model="curentTab" class="tabs flex justify-center" >
      <my-tabs-nav :label="'info'">数据概览</my-tabs-nav>
      <my-tabs-nav :label="'database'">数据库</my-tabs-nav>
    </my-tabs>
  </div>
  <div class="tabs_content">
    <div v-show="curentTab==='info'">
      <div class=" list_view people_view" >
        <h2 class="title">
          人口学信息概览
        </h2>
        <ul class="lists">
          <li class="flex">
            <span class="label">性别</span>
            <div class="percents">
              <p class="percents_bar-outer flex">
                <template   v-for="(item,index ) in filterList[0]">
                 <span class="bar_inner "
                       :class="{'bar_inner_left_side':item.leftRadius,'bar_inner_right_side':item.rightRadius}"
                       :name="index"
                       :style="{'background-color':item.backGroundColor,width:item.num}"

                       :key="index"
                 >
                <i class="bar_inner_num" >{{item.num}}</i>
                <i class="bar_inner_range" :style="{'color':item.backGroundColor}">{{item.name}}</i>
              </span>

                </template>
              </p>
            </div>
          </li>
          <li class="flex">
            <span class="label">年龄</span>
            <div class="percents">
              <p class="percents_bar-outer flex">
                <template   v-for="(item,index ) in filterList[1]">
                 <span class="bar_inner "
                       :class="{'bar_inner_left_side':item.leftRadius,'bar_inner_right_side':item.rightRadius}"
                       :name="index"
                       :style="{'background-color':item.backGroundColor,width:item.num}"

                       :key="index"
                 >
                <i class="bar_inner_num">{{item.num}}</i>
                <i class="bar_inner_range" :style="{'color':item.backGroundColor}">{{item.name}}</i>
              </span>

                </template>
              </p>
            </div>
          </li>
          <li class="flex">
            <span class="label">教育</span>
            <div class="percents">
              <p class="percents_bar-outer flex">
                <template   v-for="(item,index ) in filterList[2]">
                 <span class="bar_inner "
                       :class="{'bar_inner_left_side':item.leftRadius,'bar_inner_right_side':item.rightRadius}"
                       :name="index"
                       :style="{'background-color':item.backGroundColor,width:item.num}"

                       :key="index"
                 >
                <i class="bar_inner_num">{{item.num}}</i>
                <i class="bar_inner_range" :style="{'color':item.backGroundColor}">{{item.name}}</i>
              </span>

                </template>
              </p>
            </div>
          </li>
          <li class="flex">
            <span class="label">既往病史</span>
            <div class="percents">
              <p class="percents_bar-outer flex">
                <template   v-for="(item,index ) in filterList[2]">
                 <span class="bar_inner "
                       :class="{'bar_inner_left_side':item.leftRadius,'bar_inner_right_side':item.rightRadius}"
                       :name="index"
                       :style="{'background-color':item.backGroundColor,width:item.num}"

                       :key="index"
                 >
                <i class="bar_inner_num">{{item.num}}</i>
                <i class="bar_inner_range" :style="{'color':item.backGroundColor}">{{item.name}}</i>
              </span>

                </template>
              </p>
            </div>
          </li>
        </ul>

      </div>
      <div class="list_view">
        <h2 class="title">
          量表测评人次
        </h2>
        <div class="echart1 list_view " ref="echart1" style="height:800px;">
        </div>
      </div>
    </div>
    <div class="database" v-show="curentTab==='database'">
    </div>
  </div>
</div>
</template>
<script>
  import echarts from 'echarts/lib/echarts'
  import 'echarts/lib/chart/bar'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/title'
  export default{
    name:'Data',
    data(){
      return{
        curentTab:'info',
        lists:[
          [
            {
              name:'男',
              num:0.1
            },{
              name:'女',
              num:0.9
          }
          ],
          [
            {
              name:'<55',
              num:0.1
            },{
            name:'55-64',
            num:0.2
          },
            {
              name:'65-69',
              num:0.4
            },
            {
              name:'70>',
              num:0.3
            }
          ],
          [
            {
              name:'<6',
              num:0.3
            },{
            name:'9-12',
            num:0.2
          },
            {
              name:'12>',
              num:0.5
            }
          ]
        ]
      }
    },
    computed:{
      filterList(){//过滤数据为0的
        const newList=[]
        let self=this
        this.lists.forEach((item,index)=>{

          const newList2= item.map((item2,index2)=>{
            if(item2.num!==0){
              item2.num=item2.num*100+'%'
              item2.backGroundColor='#'+self.getColor(item2.name)
              if(index2===0){
                item2.leftRadius=true
              }else if(index2===item.length-1){
                item2.rightRadius=true
              }
              console.log(item2)
              return item2
            }
          })
         newList.push(newList2)
        })
        return newList
      }
    },
    created(){

    },
    mounted(){
      const myChart=echarts.init(this.$refs.echart1)
      this.myChart=myChart
      // 绘制图表
      this.initCharts()
    },
    methods:{
      initCharts(){
        this.myChart.setOption({
          color:['#6bb1f8'],
          title: {
            text: ''
          },
          tooltip: {},
          xAxis: {
            type : 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋'],
            axisLabel:{
              fontSize:30
            }
          },
          yAxis: {
            name:'(单位：人次)',
            type : 'value',
            nameTextStyle:{
              color:'#5f5f5f',
              fontSize:30
            },
            splitArea:{
              interval:1,
              show:true
            },
            max:450,
            splitNumber:9,
            axisLabel:{
              fontSize:30
            },
            axisTick:{
              length:0
            }

          },
          series: [{
            name: '人次',
            type: 'bar',
            barWidth:100,
            data: [
              {
                value:150,
              },
              {
                value:150
              },
              {
                value:150
              },
              {
                value:150
              },
              {
                value:450
              }
            ],
            label:{
              show:true,
              position:'top',
              fontSize:30
            },
            itemStyle:{
              barBorderRadius:[10,10,0,0]
            },
            tooltip:{
              textStyle:{
                fontSize:30
              }
            }
          }]
        })
      },
      getColor(val){
        const map=new Map([
          [
            '6bb1f8',new Set(['男','<55'])
          ],
          [
            '59d2f8',new Set(['女','55-64'])
          ],
          [
            'c794fc',new Set(['65-69','9-12','糖尿病'])
          ],
          [
            'fab744',new Set(['70>','12>','脑血管病'])
          ],
          [
            '6d6e74',new Set(['65-69','9-12','冠心病'])
          ]

        ])
        for(let [key,value] of  map){
          if( value.has(val)){

            return key
          }
        }
      }
    },
    watch:{
      curentTab(newVal,oldVal){


      }
    }
  }
</script>
