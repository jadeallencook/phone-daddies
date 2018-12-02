import { Component, Output } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})

export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private FirebaseAuthService: FirebaseAuthService) {}
  
}
