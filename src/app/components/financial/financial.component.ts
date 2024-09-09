import { Component } from '@angular/core';
// import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import Highcharts from 'highcharts/es-modules/masters/highcharts.src';
@Component({
  selector: 'app-financial',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './financial.component.html',
  styleUrl: './financial.component.css',
})
export class FINANCIALComponent {
  Highcharts: typeof Highcharts = Highcharts;

cashInBankChartOptions:Highcharts.Options={
  chart:{
    type:'column',
    backgroundColor:'2b2d3e'
  },
  title:{
    text:undefined,
  },
  xAxis:{
    categories:['jan','fab','mar','apr','may','jun','july'],
    labels:{
      style:{
        color:'#fff'
      },
    },
  },
  yAxis:{
    title:{
    text:null
    },
    labels:{
      style:{
        color:'#fff'
      },
    },
  },
  series:[
    {
      type:'column',
      data:[4,0.7,5,0.7,0.9,0.7,10 ],
      color:'#00d8ff'
    },
  ],
  credits:{
    enabled:false
  }
}
  // totalAmountChartOptions: Highcharts.Options = {
  //   chart: {
  //     type: 'pie',
  //     backgroundColor: '#2b2d3e',
  //   },
  //   title: {
  //     text: undefined,
  //   },
  //   series: [
  //     {
  //       type: 'pie',
  //       data: [
  //        ['16 year', 900],  
  //         ['2 year', 50],
  //         ['3 year', 80],
  //         ['5 year', 100],
  //         ['5 year', 110],
  //         ['6 year', 190],
  //         ['7 year', 290],
  //         ['8 year', 320],
  //         ['9 year', 350],
  //         ['10 year', 400],
  //         ['11 year', 450],
  //         ['1 year', 70],
  //         ['12 year', 500],
  //         ['13 year', 550],
  //         ['4 year', 90],
  //         ['14 year', 600],
  //         ['15 year', 650],
  //       ],
  //       color: '#00d8ff',
  //     },
  //   ],
  //   credits: {
  //     enabled: false,
  //   },
  // };
  totalAmountChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: '#2b2d3e',
      plotShadow: false,
    },
    title: {
      text: undefined,
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        borderRadius: 5,
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4,
          },
        },
      },
    },
    series: [
      {
        name: 'Share',
        type: 'pie',
        data: [
          // ['16 year', 1200],
          // ['2 year', 50],
          // ['3 year', 80],
          // ['5 year', 100],
          // ['5 year', 110],
          // ['6 year', 190],
          // ['7 year', 290],
          // ['8 year', 320],
          // ['9 year', 350],
          // ['10 year', 400],
          // ['11 year', 450],
          // ['1 year', 70],
          // ['12 year', 500],
          // ['13 year', 550],
          // ['4 year', 90],
          // ['14 year', 600],
          // ['15 year', 650],
          ['16 year',1200],
          ['2 year',50],
          ['3 year',90],
          ['5 year', 120],
          ['6 year',200],
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  };

  burnChartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
      backgroundColor: '#2b2d3e',
    },
    title: {
      text: undefined,
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','july'],
      labels: {
        style: {
          color:'#fff'
        },
      },
    },
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        style: {
        },
      },
    },
    series: [
      {
        type: 'line',
        data: [50, 60, 100, 10.3,50.2, 80, 60],
        color: '#00d8ff',
      },
    ],
    credits: {
      enabled: false,
    },
  };
}
