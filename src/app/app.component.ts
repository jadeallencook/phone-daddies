import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})

export class AppComponent {
  constructor() {}

  ngDoCheck() {
    if (window.location.hash.includes('#/#') || window.location.hash === '#/') {
      window.location.hash = '';
    }
  }
}
