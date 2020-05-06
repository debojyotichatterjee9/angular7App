import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    
    allowNewServer: boolean = false;
    serverCreationStatus: boolean = false;
    serverName: string = 'Test Server';

  constructor() {
      setTimeout(() => {
          this.allowNewServer = true;
      }, 2000)
  }

  ngOnInit(): void {
  }
    
    onCreateServer() {
        this.serverCreationStatus = true;
    }
    
    onUpdateServerName(event: any) {
       this.serverName = (<HTMLInputElement>event.target).value;
    }

}
