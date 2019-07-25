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
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }

}
