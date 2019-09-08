import { Component, OnInit } from '@angular/core';
import {LINE_CHART_COLORS} from '../../shared/chart.colors';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [23, 64, 49, 36, 21, 10], label: 'Price management'},
  { data: [24, 48, 87, 39, 26, 18], label: 'CRM'},
  { data: [31, 70, 52, 60, 35, 22], label: 'Order management'}
];

const LINE_CHART_LABELS: string[] = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'
];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  }
  lineChartLegend = true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;

  ngOnInit() {
  }

}
