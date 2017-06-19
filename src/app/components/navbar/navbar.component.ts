import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  links = [
    {
      text: 'Repair',
      link: '/form/repair'
    }, {
      text: 'Sell',
      link: '/form/sell'
    }, {
      text: 'Account',
      link: '/dash'
    }, {
      text: 'Contact',
      link: '/form/repair'
    },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
