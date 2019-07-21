import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent { // exporting the class to be able to use it outside of this file
serverId: number = 10;
serverStatus: string = 'Offline';

getServerStatus() {
    return this.serverStatus;
}
}
