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
      text: 'Become A Phone Daddy',
      link: '/dash'
    }
  ];

  constructor(private FirebaseAuthService: FirebaseAuthService) {}

  ngOnInit() {

  }
}
