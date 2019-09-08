import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  public pieChartData: number[] = [350, 450, 120];
  public pieChartLabels: string[] = ['Pretzel industries', 'Doughnut logistics', 'Cucumber aerospace'];
  public pieChartColors: any[] = [
      {
        backgroundColor: ['#26547c', '#ff6b6b', '#ffd166']
      }
  ];
  public pieChartType = 'pie';

  ngOnInit() {
  }

}
