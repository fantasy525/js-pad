<style lang="scss" scoped>
  .analyze{
    padding-top:20px;
  }
  .form-top{
    background-color:#f5f9f9;
    height:150px;
    display:flex;
    align-items: center;
    padding-left:48px;

    .form-selects{
      width:1095px;
      text-align:left;
      border:2px solid #e5e5e5;/*px*/
      display:flex;
      border-radius:10px;
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
    width:420px;
    height:90px;
    border-radius:7px;

    display:flex;
    justify-content: center;
    align-items: center;
    background-color:#dff0fa;
    margin-left:37px;
    color:#1fa2fe;
    .iconfont{
      color:#1fa2fe;
      font-size:50px;
    }
  }
</style>
<template>
    <div class="analyze">
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
        <button class="form-button"><nav-button to="/main/variable_select">{{$route.query.name}}</nav-button></button>
      </div>
      <my-table height="680" :data="databaseLists" ref="myTable">
        <my-table-column label="序号" width="100">

        </my-table-column>
        <my-table-column label="姓名" width="150">

        </my-table-column>
        <my-table-column label="性别" width="100">

        </my-table-column>
        <my-table-column label="年龄" width="100">

        </my-table-column>
        <my-table-column label="评估名称" width="300">

        </my-table-column>
        <my-table-column label="得分" width="100">

        </my-table-column>
        <my-table-column label="评估来源" width="300">

        </my-table-column>
        <my-table-column label="评估时间" width="150">

        </my-table-column>
        <my-table-column label="评估人" width="100">

        </my-table-column>
      </my-table>
    </div>
</template>

<script>
    export default {
      name:'analyze',
      data(){
        return{
          databaseLists:[
            {
              id:1,
              name:'张三',
              sex:'男',
              age:23,
              assessName:'图片记忆测验',
              score:40,
              assessSource:'基础脑健康评估',
              assessTime:'2018.09.12',
              assessMan:'张三'
            },
            {
              id:1,
              name:'张三',
              sex:'男',
              age:23,
              assessName:'图片记忆测验',
              score:40,
              assessSource:'基础脑健康评估',
              assessTime:'2018.09.12',
              assessMan:'张三'
            },
            {
              id:1,
              name:'张三',
              sex:'男',
              age:23,
              assessName:'图片记忆测验',
              score:40,
              assessSource:'基础脑健康评估',
              assessTime:'2018.09.12',
              assessMan:'张三'
            },
            {
              id:1,
              name:'张三',
              sex:'男',
              age:23,
              assessName:'图片记忆测验',
              score:40,
              assessSource:'基础脑健康评估',
              assessTime:'2018.09.12',
              assessMan:'张三'
            },
            {
              id:1,
              name:'张三',
              sex:'男',
              age:23,
              assessName:'图片记忆测验',
              score:40,
              assessSource:'基础脑健康评估',
              assessTime:'2018.09.12',
              assessMan:'张三'
            },
            {
              id:1,
              name:'张三',
              sex:'男',
              age:23,
              assessName:'图片记忆测验',
              score:40,
              assessSource:'基础脑健康评估',
              assessTime:'2018.09.12',
              assessMan:'张三'
            },
            {
              id:1,
              name:'张三',
              sex:'男',
              age:23,
              assessName:'图片记忆测验',
              score:40,
              assessSource:'基础脑健康评估',
              assessTime:'2018.09.12',
              assessMan:'张三'
            },
            {
              id:1,
              name:'张三',
              sex:'男',
              age:23,
              assessName:'图片记忆测验',
              score:40,
              assessSource:'基础脑健康评估',
              assessTime:'2018.09.12',
              assessMan:'张三'
            },
            {
              id:1,
              name:'张三',
              sex:'男',
              age:23,
              assessName:'图片记忆测验',
              score:40,
              assessSource:'基础脑健康评估',
              assessTime:'2018.09.12',
              assessMan:'张三'
            },
            {
              id:1,
              name:'张三',
              sex:'男',
              age:23,
              assessName:'图片记忆测验',
              score:40,
              assessSource:'基础脑健康评估',
              assessTime:'2018.09.12',
              assessMan:'张三'
            },
            {
              id:1,
              name:'张三',
              sex:'男',
              age:23,
              assessName:'图片记忆测验',
              score:40,
              assessSource:'基础脑健康评估',
              assessTime:'2018.09.12',
              assessMan:'张三'
            },
            {
              id:1,
              name:'张三',
              sex:'男',
              age:23,
              assessName:'图片记忆测验',
              score:40,
              assessSource:'基础脑健康评估',
              assessTime:'2018.09.12',
              assessMan:'张三'
            },
            {
              id:1,
              name:'张三',
              sex:'男',
              age:23,
              assessName:'图片记忆测验',
              score:40,
              assessSource:'基础脑健康评估',
              assessTime:'2018.09.12',
              assessMan:'张三'
            },
            {
              id:1,
              name:'张三',
              sex:'男',
              age:23,
              assessName:'图片记忆测验',
              score:40,
              assessSource:'基础脑健康评估',
              assessTime:'2018.09.12',
              assessMan:'张三'
            },
            {
              id:1,
              name:'张三',
              sex:'男',
              age:23,
              assessName:'图片记忆测验',
              score:40,
              assessSource:'基础脑健康评估',
              assessTime:'2018.09.12',
              assessMan:'张三'
            }
          ],
          dataBaseForm:{
            sex:'',
            age:'',
            edu:'',
            disease:''
          },
        }
      }
    }
</script>


