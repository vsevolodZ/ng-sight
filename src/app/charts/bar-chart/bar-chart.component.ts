import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[] = [
  {data: [65,59,43,22,51,32,80], label: 'Q3 sales'},
  {data: [56,91,33,11,19,23,98], label: 'Q4 sales'}
];

const SAMPLE_BARCHART_LABELS: string[] = ['W1','W2','W3','W4','W5','W6','W7'];


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor() { }
  
  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  }
  ngOnInit() {
  }

}
