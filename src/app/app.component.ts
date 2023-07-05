import { Component } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  bsConfig: Partial<BsDatepickerConfig>;
  date: Date;

  constructor() {
    this.bsConfig = Object.assign(
      {},
      { dateInputFormat: 'DD-MM-YYYY' },
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false
      }
    );
  }

  saveDate() {
    // Implement your save logic here
  }

  cancelDate() {
    // Implement your cancel logic here
  }
}
