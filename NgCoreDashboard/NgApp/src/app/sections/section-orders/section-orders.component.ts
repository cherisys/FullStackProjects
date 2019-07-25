import { Component, OnInit } from '@angular/core';
import {Order} from '../../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  orders: Order[] = [
    {id:1, customer: {id:1, name:'John', email:'john@gmail.com', state:'CO'}, total: 200, placed: new Date(2019,1,1), fulfilled: new Date(2019,1,2)},    
    {id:2, customer: {id:2, name:'Cena', email:'cena@gmail.com', state:'CO'}, total: 343, placed: new Date(2019,6,23), fulfilled: new Date(2019,6,25)},
    {id:3, customer: {id:3, name:'Smith', email:'smith@gmail.com', state:'CO'}, total: 454, placed: new Date(2019,3,21), fulfilled: new Date(2019,4,24)},
    {id:4, customer: {id:4, name:'Jack', email:'jack@gmail.com', state:'CO'}, total: 565, placed: new Date(2019,4,22), fulfilled: new Date(2019,4,27)},
    {id:5, customer: {id:5, name:'Chan', email:'chan@gmail.com', state:'CO'}, total: 676, placed: new Date(2019,12,15), fulfilled: new Date(2019,12,23)},
    {id:6, customer: {id:6, name:'Joe', email:'joe@gmail.com', state:'CO'}, total: 454, placed: new Date(2019,7,13), fulfilled: new Date(2019,7,24)}
  ];

  constructor() { }

  ngOnInit() {
  }

}
