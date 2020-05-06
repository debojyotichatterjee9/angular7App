import { Component } from '@angular/core'



@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverId: number = 300;
    serverStatus: string = 'Offline';
    
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

getServerStatus(): string {
    return this.serverStatus
}
    
    getColor() {
       return this.serverStatus === 'Online' ? 'green' : 'red'; 
    }
    
    getServerClass() {
        return this.serverStatus === 'Online' ? {online: true} : {offline: true};
    }
}