import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FirebaseAuthService } from '../../services/firebase-auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  admin: boolean = null;

  constructor(private FirebaseAuthService: FirebaseAuthService) {
    firebase.auth().onAuthStateChanged(() => {
      this.admin = (environment.auth.includes(FirebaseAuthService.ActiveUser.email)) ? true : false;
    })
    this.admin = (environment.auth.includes(FirebaseAuthService.ActiveUser.email)) ? true : false;
  }

  ngOnInit() {

  }
}
