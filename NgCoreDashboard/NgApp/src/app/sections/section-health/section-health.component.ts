import { Component, OnInit } from '@angular/core';
import {Server} from '../../shared/server';

const SAMPLE_SERVERS = [
  {id:1, name: 'Cherisys', isOnline: true},
  {id:2, name: 'Godaddy', isOnline: false},
  {id:3, name: 'Hostgator', isOnline: true},
  {id:4, name: 'Bluehost', isOnline: false},
  {id:5, name: 'A2Hosting', isOnline: true},
  {id:6, name: 'Bigrock', isOnline: true}
];

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit {

  servers:Server[] = SAMPLE_SERVERS;

  constructor() { }

  ngOnInit() {
  }

}
