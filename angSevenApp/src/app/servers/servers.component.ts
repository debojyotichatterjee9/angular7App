import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line
  // selector: '[app-servers]', // checking component selector with attribute selector
  // tslint:disable-next-line
  // selector: '.app-servers', // checking component selector with css selector
  selector: 'app-servers', // checking component selector with element selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server Created';
  serverName = 'Test Server Name';
  serverCreated = false;
  servers = ['Test Server 1', 'Test Server 2'];
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }

onCreateServer(){
  this.serverCreated = true;
  this.servers.push(this.serverName)
  this.serverCreationStatus = 'Server was Created!! The name is: ' + this.serverName;
}
onUpdateServerName(event: any){
console.warn(event)
this.serverName = (<HTMLInputElement>event.target).value
}
}
