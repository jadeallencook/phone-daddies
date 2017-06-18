import { Component, OnInit } from '@angular/core';
import { activateTheme } from 'assets/js/main.js';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // activate component js 
    activateTheme();
  }

}
