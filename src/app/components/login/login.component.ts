import { Component, Output } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})

export class LoginComponent {

  messages = [
    `You wanna be a Phone Daddy, huh?`,
    `Who's your daddy?`,
    `Join the Phone Daddy team!`
  ];
  message = this.messages[Math.floor(Math.random()*this.messages.length)];

  email: string = '';
  password: string = '';

  constructor(private FirebaseAuthService: FirebaseAuthService) {}
  
}
