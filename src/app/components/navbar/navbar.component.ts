import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: []
})
export class NavbarComponent implements OnInit {

  // links for navbar
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
    }
  ];

  constructor(private FirebaseAuthService: FirebaseAuthService) {}

  ngOnInit() {

  }
}
