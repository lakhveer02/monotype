import { Component } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
// import Highcharts from 'highcharts/es-modules/masters/highcharts.src';
import HighchartsMore from 'highcharts/highcharts-more';
import HC_pattern from 'highcharts/modules/pattern-fill';
import * as Highcharts from 'highcharts';

HighchartsMore(Highcharts);
HC_pattern(Highcharts);
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HighchartsChartModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  Highcharts: typeof Highcharts = Highcharts;
  costChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: '#333'
    },
    title: {
      text: 'Costs',
      style: {
        color: '#fff'
      }
    },
    series: [{
      type: 'pie',
      data: [
        { name: 'Costs', y: 34, color: '#007bff' },
        { name: 'Return', y: 30, color: '#3df4f2' },
        { name: 'Remaining', y: 36, color: '#e0e0e0' }
      ]
    }]
  };

  profitChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: '#333'
    },
    title: {
      text: 'Profit',
      style: {
        color: '#fff'
      }
    },
    series: [{
      type: 'pie',
      data: [
        { name: 'Profit', y: 40, color: '#28a745' },
        { name: 'Loss', y: 29, color: '#21f5d2' },
        { name: 'Remaining', y: 31, color: '#e0e0e0' }
      ]
    }]
  };

  physicianProfitabilityChartOptions: Highcharts.Options = {
    chart: {
      type: 'bar',
      backgroundColor: '#333'
    },
    title: {
      text: 'Physician Profitability',
      style: {
        color: '#fff'
      }
    },
    xAxis: {
      categories: ['C288811', 'C3335390', 'C402477', 'C2702067'],
      labels: {
        style: {
          color: '#fff'
        }
      }
    },
    series: [{
      type: 'bar',
      name: 'Profit',
      data: [2113852, 1391830, 1205992, 648496],
      color: '#28a745'  
    }]
  };

  profitabilityByYearChartOptions: Highcharts.Options = {
    chart: {
      type: 'polar',
      backgroundColor: '#333',
    },
    title: {
      text: 'Profitability by Year',
      style: {
        color: '#fff'
      }
    },
    pane: {
      startAngle: 0,
      endAngle: 360
    },
    xAxis: {
      categories: ['Start', 'Increase', 'Decrease', 'End', '7 year', '8 year', '10 year', '12 year', '14 year'],
      tickmarkPlacement: 'on',
      lineWidth: 0,
      labels: {
        style: {
          color: '#fff'
        }
      }
    },
    yAxis: {
      gridLineWidth: 1,
      labels: {
        formatter: function () {
          return this.value.toString();
        },
        style: {
          color: '#fff'
        }
      },
      min: -2000000,
      max: 1000000
    },
    series: [{
      type: 'line',
      name: 'Profit',
      data: [0, 327534, 234567,-268764, -2000000, 250, 300, 400, 500, 600], 
      pointPlacement: 'on',
      color: '#007bff'  
    }]
  };
  
}
