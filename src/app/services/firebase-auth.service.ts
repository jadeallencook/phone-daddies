import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseAuthService {

  ActiveUser:any = false;

  constructor() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) this.ActiveUser = user;
      else this.ActiveUser = false;
    });
  }

  // page specific functionality

  displayErrorMessage(error) {
    let ErrorMessageElement = document.getElementById('error-message');
    ErrorMessageElement.innerText = error;
  }

  // firebase functionality

  createAccount(email: string, password: string) {
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password).catch((error) => {
      this.displayErrorMessage(error.message);
    });
  }

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      this.displayErrorMessage(error.message);
    });
  }

  logout() {
    firebase.auth().signOut().catch((error) => {
      this.displayErrorMessage(error.message);
    });
  }
}
