<style lang="scss" scoped>
  .el-transfer{
    margin-top:30px;
    /deep/ .el-transfer-panel{
      width: 302px;
      border:1px solid #ebeef5;/*no*/
    }
  }
  .select{
    padding:40px 50px 0;
  }
  .select__item{
    flex:0 1 865px;
    background-color:#fff;
    padding:38px 46px 38px 46px;
    text-align:left;
    .title{
      font-size:30px;/*px*/
      color:#5f5f5f;
      font-weight:normal;
    }
  }

</style>
<template>
    <div>
    <div class="select flex space-between">
      <div class="select__item">
        <h2 class="title">选择分组变量</h2>
        <el-transfer
          filterable
          :filter-method="filterMethod"
          @left-check-change="leftCheck"
          @change="moveData"
          mode="radio"
          filter-placeholder="输入拼音搜索"
          v-model="value2"
          :titles="['筛选项','已选']"
          :height="'561px'"
          :data="data2"
          class="el-transfer">
        </el-transfer>
      </div>
      <div class="select__item">
        <h2 class="title">选择结果变量</h2>
        <el-transfer
          filterable
          :filter-method="filterMethod"
          filter-placeholder="输入拼音搜索"
          v-model="value1"
          :titles="['筛选项','已选']"
          :height="'561px'"
          :data="data1"
          class="el-transfer">
        </el-transfer>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
      data() {
        const generateData2 = _ => {
          const data = [];
          const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
          const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
          cities.forEach((city, index) => {
            data.push({
              label: city,
              key: index,
              pinyin: pinyin[index],
              disabled:false
            });
          });
          return data;
        };
        const getData2= _ =>{
          const data2=[]
          const sel=['年龄','性别']
          const pinyin=['nianling','xingbie']
          sel.forEach((v,index)=>{
            data2.push({
              label:v,
              key:index,
              pinyin:pinyin[index]
            })
          })
          return data2
        }

        return {
          data1:getData2(),
          data2: generateData2(),
          value2: [],
          value1:[],
          s:'',
          filterMethod(query, item) {
            return item.pinyin.indexOf(query) > -1;
          }
        };
      },
      methods:{
        leftCheck(val,movedKeys){

//          if(val.length>0){
//            const checkIndex=movedKeys[0]
//            this.data2=this.data2.filter((item,index)=>{
//              if(item.key!==checkIndex){
//                item.disabled=true
//                return item
//              }
//              return item
//            })
//          }else{
//            this.data2=this.data2.map((item)=>{
//              item.disabled=false
//              return item
//            })
//          }

        },
        moveData(currentValue,direc,leftChecked){
          this.data2=this.data2.map((item)=>{
            item.disabled=false
            return item
          })
        }
      }
    }
</script>


