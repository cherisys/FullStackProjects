import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  BarChart:any;

  ngOnInit() {
    this.BarChart = new Chart('barChart', {
      type: 'bar',
    data: {
     labels: ["W1", "W2", "W3", "W4", "W5", "W6"],
     datasets: [
      {data: [9,7 , 3, 5, 2, 10], label: "Q3 Sales", backgroundColor: 'white', borderColor: 'silver'},
      {data: [9,7 , 3, 5, 2, 10], label: "Q4 Sales", backgroundColor: 'yellow', borderColor: 'green'}
     ]
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
