import { Component } from '@angular/core';

@Component({
  // <app-root>
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // the class holds the logic for the application
  title: string = 'Alpha';

  /* 
  Directives And Data Binding
  
  Event binding: makes the application respond to input by updating the application data.

  Property binding: interpolate values that are computed from the application data into the HTML.

  */
}
