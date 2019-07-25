import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../shared/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Input() server: Server;

  color:string;
  buttonText:string;

  constructor() { }

  ngOnInit() {
    this.setServerStatus(this.server.isOnline);
  }

  setServerStatus(isOnline:boolean){
    if(isOnline){
      this.color = "#66bb6a";
      this.buttonText = "Shutdown";
    }else{
      this.color = "#ff6b6b";
      this.buttonText = "Start";
    }
    this.server.isOnline = isOnline;
  }

  toggleStatus(onlineStatus:boolean) {
    this.setServerStatus(!onlineStatus);
  }
}
