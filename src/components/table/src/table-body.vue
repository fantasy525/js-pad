<template>
    <div class="my-table-body-wrap">
      <scroll-view class="scroll" :style="{height:height}">
        <table width="100%" class="my-table-body">
          <colgroup>
            <col width="100">   <!--序号-->
            <col width="150"><!--姓名-->
            <col width="100"><!--性别-->
            <col width="100"><!--年龄-->
            <col width="350"><!--评估名称-->
            <col width="100"><!--得分-->
            <col width="300"><!--评估来源-->
            <col width="200"><!--评估时间-->
            <col width="150"><!--评估人-->
          </colgroup>
          <tbody>
          <tr>
            <td>1</td>
            <td>王二小</td>
            <td>男</td>
            <td>12</td>
            <td>图片记忆学习测验（简版）</td>
            <td>50</td>
            <td>轻度认知障碍筛查</td>
            <td>2018.09.14</td>
            <td>王麻子</td>
          </tr>
          <tr>
            <td>1</td>
            <td>王二小</td>
            <td>男</td>
            <td>12</td>
            <td>图片记忆学习测验（简版）</td>
            <td>50</td>
            <td>轻度认知障碍筛查</td>
            <td>2018.09.14</td>
            <td>王麻子</td>
          </tr>
          <tr>
            <td>1</td>
            <td>王二小</td>
            <td>男</td>
            <td>12</td>
            <td>图片记忆学习测验（简版）</td>
            <td>50</td>
            <td>轻度认知障碍筛查</td>
            <td>2018.09.14</td>
            <td>王麻子</td>
          </tr>
          <tr>
            <td>1</td>
            <td>王二小</td>
            <td>男</td>
            <td>12</td>
            <td>图片记忆学习测验（简版）</td>
            <td>50</td>
            <td>轻度认知障碍筛查</td>
            <td>2018.09.14</td>
            <td>王麻子</td>
          </tr>
          <tr>
            <td>1</td>
            <td>王二小</td>
            <td>男</td>
            <td>12</td>
            <td>图片记忆学习测验（简版）</td>
            <td>50</td>
            <td>轻度认知障碍筛查</td>
            <td>2018.09.14</td>
            <td>王麻子</td>
          </tr>
          <tr>
            <td>1</td>
            <td>王二小</td>
            <td>男</td>
            <td>12</td>
            <td>图片记忆学习测验（简版）</td>
            <td>50</td>
            <td>轻度认知障碍筛查</td>
            <td>2018.09.14</td>
            <td>王麻子</td>
          </tr>
          <tr>
            <td>1</td>
            <td>王二小</td>
            <td>男</td>
            <td>12</td>
            <td>图片记忆学习测验（简版）</td>
            <td>50</td>
            <td>轻度认知障碍筛查</td>
            <td>2018.09.14</td>
            <td>王麻子</td>
          </tr>
          </tbody>
        </table>
      </scroll-view>
    </div>
</template>

<script>
    export default {
      name:'MyTableBody',
      computed:{
        height(){
          return this.$parent.height?this.$parent.height+'px':'auto'
        }
      }
    }
</script>

<style lang="scss" >
  .my-table-body{

    tr{
      height:120px;
      font-size:26px;/*px*/
      color:#5f5f5f;
    }
    tr:nth-of-type(odd){
      background-color:#f9fbff;
    }
    tr:nth-of-type(even){
      background-color:#f4f7fe;
    }
  }
  .scroll{
    overflow: hidden;
    position:relative;
  }
</style>
