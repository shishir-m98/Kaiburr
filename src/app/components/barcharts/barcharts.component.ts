import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexGrid,
  ApexFill,
  ApexLegend
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  grid: ApexGrid;
  fill: ApexFill;
  legend: ApexLegend;
};
@Component({
  selector: 'app-barcharts',
  templateUrl: './barcharts.component.html',
  styleUrls: ['./barcharts.component.css']
})
export class BarchartsComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "basic",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 120, 180]
        },
        {
          name: "basic2",
          data: [200, 530, 248, 170, 340, 780, 290, 800, 200, 380]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: '70%',
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: ['#F44336', '#9C27B0'],
        width: 2,
        dashArray: 0  
      },
      grid: {
        row: {
          colors: ['#fff', '#f2f2f2']
        }
      },
      legend:{
        show:true,
        labels: {
          colors: ['#F44336', '#9C27B0'],
          useSeriesColors: false
        },
        fontSize: '20px',
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: '#000',
          fillColors: ['#F44336', '#9C27B0'],
          radius: 12
        }
      },
      fill: {
        colors: ['#F44336', '#9C27B0'],
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        }
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany"
        ]
      }
    };
  }

  ngOnInit(): void {
  }

}
