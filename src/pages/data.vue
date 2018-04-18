
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
  .tabs_content_database{

    padding:0 0;
  }
  .title{
    font-size:36px;/*px*/
    text-align:left;
    padding-left:40px;
    height:80px;
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

  .form-top{
    background-color:#f5f9f9;
    height:150px;
    display:flex;
    align-items: center;
    padding-left:29px;
    .form-selects{

      width:1095px;
      text-align:left;
      border:2px solid #e5e5e5;/*px*/
      display:flex;
    }
    .my-selects {
      flex:1 1;
      display: inline-block;
      height: 90px;
      padding-left:10px;
      position: relative;
      /deep/ .my-select-outer {
        padding-right: 30px;
       /deep/ &:after {

        position: absolute;
        content: '';
        height: 30px;
        border-right: solid 2px #d2d9e0; /*no*/
        top: 50%;
        transform: translate(0, -50%);
        right: 0;
      }
    }
      &:first-of-type{
        padding-left:0;
      }
    }


  }
  .add-select{
    width:120px;
    color:#aaacac;
    text-align:center;
    font-size:40px;
  }
  .form-button{
    width:200px;
    height:90px;
    border-radius:5px;

    display:flex;
    justify-content: center;
    align-items: center;
    background-color:#dff0fa;
    .iconfont{
      color:#1fa2fe;
      font-size:50px;
    }
  }
  .my-tables-wrap{
    width:100%;
    .my-table-head-wrap{


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
  <div class="tabs_content" :class="{tabs_content_database:curentTab!=='info'}" >
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
        <div class="echart1  " ref="echart1" style="height:600px;padding-bottom:0;margin-bottom:0;padding-top:0">
        </div>
      </div>
      <div class="list_view">
        <h2 class="title">
          量表测评人次
        </h2>
        <div class="echart2  " ref="echart2" style="height:600px;padding-bottom:0;margin-bottom:0;padding-top:0">
        </div>
      </div>
    </div>
    <div class="database" v-show="curentTab==='database'">
      <div class="form-top">
       <div class="form-selects">
         <my-select v-model="dataBaseForm.sex" placeholder="性别" class="my-selects">

           <my-select-option label="男">
           </my-select-option>
           <my-select-option label="女">
           </my-select-option>
         </my-select>
         <my-select v-model="dataBaseForm.age" placeholder="年龄" class="my-selects">
           <icon-fontclass class="icon" iconName="jiantou1-copy" slot="icon"></icon-fontclass>
           <my-select-option label="<6">
           </my-select-option>
           <my-select-option label="6-55">
           </my-select-option>
           <my-select-option label="55>">
           </my-select-option>
         </my-select>
         <my-select v-model="dataBaseForm.edu" placeholder="受教育年限" class="my-selects">
           <icon-fontclass class="icon" iconName="jiantou1-copy" slot="icon"></icon-fontclass>
           <my-select-option label="5">
           </my-select-option>
           <my-select-option label="10">
           </my-select-option>
           <my-select-option label="15">
           </my-select-option>
         </my-select>
         <my-select v-model="dataBaseForm.disease" placeholder="既往病史" class="my-selects">
           <icon-fontclass class="icon" iconName="jiantou1-copy" slot="icon"></icon-fontclass>
           <my-select-option label="高血压">
           </my-select-option>
           <my-select-option label="糖尿病">
           </my-select-option>
           <my-select-option label="高血脂">
           </my-select-option>
           <my-select-option label="脑血管病">
           </my-select-option>
         </my-select>
         <button class="add-select">+</button>
       </div>
        <button class="form-button" style="margin-left:30px">
          <icon-fontclass iconName="sousuo-">

          </icon-fontclass>
        </button>
        <button class="form-button" style="margin-left:19px">
          <icon-fontclass iconName="AK-MNfasong_fill">

          </icon-fontclass>
        </button>
      </div>
      <div class="my-tables_wrap">
          <my-table height="680">
            <my-table-column label="序号" width="100">

            </my-table-column>
            <my-table-column label="姓名" width="150">

            </my-table-column>
            <my-table-column label="年龄" width="100">

            </my-table-column>
          </my-table>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  import echarts from 'echarts/lib/echarts'
  import 'echarts/lib/chart/bar'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/title'
  import 'echarts/lib/component/dataZoom'
  import 'echarts/lib/chart/line'
  export default{
    name:'Data',
    data(){
      return{
        curentTab:'database',
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
        ],
        dataBaseForm:{
          sex:'',
          age:'',
          edu:'',
          disease:''
        }
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
      const myChart2=echarts.init(this.$refs.echart2)
      this.myChart=myChart//量表测评人次
      this.myChart2=myChart2//测评历史概况
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
          grid:{
            top:'10%'
          },
          xAxis: {
            type : 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋','1', '2', '3', '4', '5','6', '7', '8', '9', '10'],
            axisLabel:{
              fontSize:30
            }
          },
          yAxis: {
            name:'(单位：人次)',
            nameGap:30,
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
              },{
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
              },
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
          }],
          dataZoom:[
            {
              type:'slider',
              show:true,
              zoomLock:true,
              start:0,
              end:50,
              zLevel:3,
             handleStyle:{
                color:'red',
               opacity:0
             },
              textStyle:{
                color:'black'
              }
            }
          ]
        })
        this.myChart2.setOption({
          xAxis: {
            type: 'category',
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月','十月', '十一月', '十二月'],
            axisTick:{
              length:12
            },
            axisLabel:{
              fontSize:30,
              interval:0
            }
          },
          yAxis: {
            name:'(单位：人次)',
            nameGap:30,
            type: 'value',
            splitArea:{
              interval:1,
              show:true
            },
            nameTextStyle:{
              color:'#5f5f5f',
              fontSize:30
            },
            axisLabel:{
              fontSize:30
            },
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1320, 200, 1000, 500, 1320],
            type: 'line',
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(31,162,254,0.2)' // 0% 处的颜色
                }, {
                  offset: 1, color: 'rgba(31,162,254,0)' // 100% 处的颜色
                }]
              }
            },
            lineStyle:{
              color:'#1fa2fe',
              width:4
            },
            itemStyle:{
              color:'#1fa2fe',
              borderWidth:5
            },
            label:{
              show:true,
              fontSize:30,
              position:'insideTop',
              distance:20,
              color:'#5f5f5f'
            }
          }]
        }
      )
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
