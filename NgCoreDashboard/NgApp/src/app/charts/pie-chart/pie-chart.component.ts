import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public pieChartData:number[] = [340,233,444];
  public pieChartLabels:string[] = ['XYZ Logistics', 'Delhivery', 'EKart'];
  public pieChartColors:any[] = [
    {
      backgroundColor: ['#26547c','#ff6b6b','#ffd166']
    }
  ];
  public pieChartType: 'pie'

  constructor() { }

  ngOnInit() {
  }

}
