import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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

  ngOnInit() {

  }

}
