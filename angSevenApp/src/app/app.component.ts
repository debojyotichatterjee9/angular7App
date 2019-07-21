import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'changedAppTitle';
}
/* in the decorator section we can use template instead to templateUrl to write the html here itself,
if we need to write multiline HTML the we can use the tilt symbol and wrap the whole thing in it
the styleUrls can also be similarly replaced with styles and not the this uses an array so that means we can
use multiple sile pointer references to the styleUrls and or styles*/
