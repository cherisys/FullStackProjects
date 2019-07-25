import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  PieChart:any;

  constructor() { }

  ngOnInit() {
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
    data: {
     labels: ["XYZ Logistics", "Main St. Bakery", "Acme Hosting"],
     datasets: [{
         data: [350,450,120],
         backgroundColor: [
             'yellow',
             'white',
             'skyblue'
         ],
         borderColor: [
             'green',
             'silver',
             'purple'
         ],
         borderWidth: 1
     }]
    }, 
    options: {
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });
  }

}
