/**
 * Created by zxf on 2018.4.4.
 */
const myChart=echarts.init(document.getElementById('echarts'))
const obama_budget_2012=require('./mock/data')
myChart.setOption({
  tooltip : {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      label: {
        show: true
      }
    }
  },
  toolbox: {
    show : true,
    feature : {
      mark : {show: true},
      dataView : {show: true, readOnly: false},
      magicType: {show: true, type: ['line', 'bar']},
      restore : {show: true},
      saveAsImage : {show: true}
    }
  },
  calculable : true,
  legend: {
    data:['Growth', 'Budget 2011', 'Budget 2012'],
    itemGap: 5
  },
  grid: {
    top: '12%',
    left: '1%',
    right: '10%',
    containLabel: true
  },
  xAxis: [
    {
      type : 'category',
      data : obama_budget_2012.names
    }
  ],
  yAxis: [
    {
      type : 'value',
      name : 'Budget (million USD)',
      axisLabel: {
        formatter: function (a) {
          a = +a;
          return isFinite(a)
            ? echarts.format.addCommas(+a / 1000)
            : '';
        }
      }
    }
  ],
  dataZoom: [

    {
      type: 'slider',
      start: 94,
      end: 100
    }

  ],
  series : [
    {
      name: 'Budget 2011',
      type: 'bar',
      data: obama_budget_2012.budget2011List
    }
  ]
})
