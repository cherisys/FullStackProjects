import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  LineChart:any;

  constructor() { }

  ngOnInit() {
    this.LineChart = new Chart('lineChart', {
      type: 'line',
    data: {
     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
     datasets: [
       {data: [32,14,46,23,38,36], label: 'Sentiment Analysis', fill:true, lineTension:0.2, borderColor:"rgba(0,200,140,0.5)", backgroundColor:'rgba(6,214,160,0.2)', borderWidth: 1},
       {data: [23,45,55,77,43,55], label: 'Image Recognition', fill:true, lineTension:0.2, borderColor:"rgba(240,180,89,0.5)", backgroundColor:'rgba(255,209,102,0.2)', borderWidth: 1},
       {data: [11,22,55,44,35,66], label: 'Forecasting', fill:true, lineTension:0.2, borderColor:"rgba(3,64,128,0.5)", backgroundColor:'rgba(15,78,133,0.2)', borderWidth: 1}
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
